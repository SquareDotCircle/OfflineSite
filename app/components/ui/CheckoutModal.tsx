'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { loadStripe, PaymentRequest } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements, PaymentRequestButtonElement } from '@stripe/react-stripe-js';
import Modal from './Modal';
import Button from './Button';

// Load Stripe outside of component render to avoid recreating it
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null;

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  price: string;
  priceInCents: number;
}

type CheckoutStep = 'shipping' | 'payment' | 'success';

interface ShippingFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  zip: string;
}

// Inner form component that has access to Stripe context
function PaymentForm({ price, priceInCents, onSuccess, onBack }: { price: string, priceInCents: number, onSuccess: () => void, onBack: () => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(null);

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Offline Order',
          amount: priceInCents,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      // Check the availability of the Payment Request API.
      pr.canMakePayment().then((result) => {
        if (result) {
          setPaymentRequest(pr);
        }
      });

      pr.on('paymentmethod', async (ev) => {
        // Confirm the PaymentIntent without handling shipping info (handled in step 1)
        // In a real app, you might want to skip Step 1 if using Apple Pay since it provides address
        const { error } = await stripe.confirmCardPayment(
          'pi_client_secret_placeholder', // This requires clientSecret from the PaymentIntent
          { payment_method: ev.paymentMethod.id },
          { handleActions: false }
        );

        if (error) {
          ev.complete('fail');
          setErrorMessage('Payment failed.');
        } else {
          ev.complete('success');
          onSuccess();
        }
      });
    }
  }, [stripe, priceInCents, onSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage(null);

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required', // Prevents redirect if not needed (e.g. card payments)
    });

    if (error) {
      setErrorMessage(error.message || 'An unexpected error occurred.');
      setIsProcessing(false);
    } else {
      // Payment succeeded
      setIsProcessing(false);
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-4 border border-white/10 rounded bg-white/5 space-y-4">
        <div className="flex justify-between items-center text-sm text-white/80">
          <span>Total Due:</span>
          <span className="font-bold text-xl text-white">{price}</span>
        </div>
        
        <div className="pt-4 border-t border-white/10">
          {paymentRequest && (
            <div className="mb-6">
              <PaymentRequestButtonElement options={{ paymentRequest }} />
              <div className="relative mt-6 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-black px-2 text-white/40">Or pay with card</span>
                </div>
              </div>
            </div>
          )}

          <PaymentElement 
            options={{
              theme: 'night',
              variables: {
                colorPrimary: '#ff471d',
                colorBackground: '#1a1a1a',
                colorText: '#ffffff',
                colorDanger: '#ef4444',
                fontFamily: 'Inter, sans-serif',
              }
            }}
          />
        </div>
      </div>

      {errorMessage && (
        <div className="text-red-500 text-sm text-center bg-red-500/10 p-2 rounded">
          {errorMessage}
        </div>
      )}

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onBack}
          className="w-1/3 py-4 border border-white/20 text-white/60 hover:text-white hover:bg-white/5 rounded font-mono text-xs uppercase tracking-widest transition-colors"
        >
          Back
        </button>
        <Button 
          type="submit" 
          disabled={!stripe || isProcessing}
          loading={isProcessing}
          className="w-2/3 py-4 font-bold uppercase tracking-widest"
        >
          {isProcessing ? 'Processing...' : `Pay ${price}`}
        </Button>
      </div>
      
      <p className="text-center text-xs text-white/30 flex items-center justify-center gap-2">
        <span>🔒</span> Secure 256-bit SSL Encrypted Payment
      </p>
    </form>
  );
}

export default function CheckoutModal({ isOpen, onClose, productName, price, priceInCents }: CheckoutModalProps) {
  const [step, setStep] = useState<CheckoutStep>('shipping');
  const [clientSecret, setClientSecret] = useState('');
  
  const { register: registerShipping, handleSubmit: handleSubmitShipping, formState: { errors: shippingErrors } } = useForm<ShippingFormData>();

  useEffect(() => {
    if (isOpen && step === 'shipping') {
      // Pre-fetch client secret when modal opens to be ready for step 2
      // In a real app, you might create the Intent only after shipping info is submitted
      fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: priceInCents }),
      })
        .then((res) => res.json())
        .then((data) => {
            if(data.clientSecret) setClientSecret(data.clientSecret);
        });
    }
  }, [isOpen, priceInCents, step]);

  const onShippingSubmit = (data: ShippingFormData) => {
    setStep('payment');
  };

  const resetAndClose = () => {
    setStep('shipping');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-2xl">
      <div className="w-full">
        {/* Header */}
        <div className="mb-8 text-center border-b border-white/10 pb-6">
          <h2 className="text-2xl font-bold text-white mb-2">{productName}</h2>
          <p className="text-primary font-mono text-xl">{price}</p>
        </div>

        {/* Progress Bar */}
        {step !== 'success' && (
          <div className="flex items-center justify-center gap-4 mb-8 text-xs font-mono uppercase tracking-widest">
            <div className={`flex items-center gap-2 ${step === 'shipping' ? 'text-white' : 'text-white/40'}`}>
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center">1</span>
              Shipping
            </div>
            <div className="w-8 h-[1px] bg-white/20"></div>
            <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-white' : 'text-white/40'}`}>
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center">2</span>
              Payment
            </div>
          </div>
        )}

        {/* Step 1: Shipping */}
        {step === 'shipping' && (
          <form onSubmit={handleSubmitShipping(onShippingSubmit)} className="space-y-4">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wide text-white/60 mb-2">Email Address</label>
                <input
                  {...registerShipping('email', { required: true })}
                  type="email"
                  className="w-full bg-black/20 border border-white/10 rounded p-3 text-white focus:border-primary outline-none transition-colors"
                  placeholder="you@example.com"
                />
                {shippingErrors.email && <span className="text-red-500 text-xs mt-1">Required</span>}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-white/60 mb-2">First Name</label>
                  <input
                    {...registerShipping('firstName', { required: true })}
                    className="w-full bg-black/20 border border-white/10 rounded p-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-white/60 mb-2">Last Name</label>
                  <input
                    {...registerShipping('lastName', { required: true })}
                    className="w-full bg-black/20 border border-white/10 rounded p-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wide text-white/60 mb-2">Address</label>
                <input
                  {...registerShipping('address', { required: true })}
                  className="w-full bg-black/20 border border-white/10 rounded p-3 text-white focus:border-primary outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-white/60 mb-2">City</label>
                  <input
                    {...registerShipping('city', { required: true })}
                    className="w-full bg-black/20 border border-white/10 rounded p-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-white/60 mb-2">Zip / Postal</label>
                  <input
                    {...registerShipping('zip', { required: true })}
                    className="w-full bg-black/20 border border-white/10 rounded p-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full mt-6 py-4 font-bold uppercase tracking-widest">
              Continue to Payment
            </Button>
          </form>
        )}

        {/* Step 2: Payment (Real Stripe Integration) */}
        {step === 'payment' && clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: 'night', labels: 'floating' } }}>
            <PaymentForm 
                price={price} 
                priceInCents={priceInCents}
                onSuccess={() => setStep('success')} 
                onBack={() => setStep('shipping')}
            />
          </Elements>
        )}
        
        {/* Error state if Stripe keys are missing */}
        {step === 'payment' && !stripePromise && (
            <div className="text-center py-8">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500 text-3xl">!</div>
                <h3 className="text-xl font-bold text-white mb-2">Payment System Unavailable</h3>
                <p className="text-white/60 mb-4 text-sm">
                    Stripe configuration is missing. Please check your environment variables.
                </p>
                <div className="bg-black/40 p-4 rounded border border-white/10 text-xs text-left font-mono text-white/50 mb-6">
                    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is undefined
                </div>
                <button
                  type="button"
                  onClick={() => setStep('shipping')}
                  className="w-full py-4 border border-white/20 text-white hover:bg-white/5 rounded font-mono text-xs uppercase tracking-widest transition-colors"
                >
                  Back
                </button>
            </div>
        )}
        
        {/* Loading state if clientSecret is missing but Stripe is configured */}
        {step === 'payment' && !clientSecret && stripePromise && (
            <div className="text-center py-8">
                <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-white/60 text-sm">Initializing secure payment...</p>
                {/* Fallback if keys are missing */}
                <p className="text-red-500 text-xs mt-4 max-w-xs mx-auto">
                    (Dev Note: Ensure STRIPE keys are set in .env.local)
                </p>
            </div>
        )}

        {/* Step 3: Success */}
        {step === 'success' && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 text-3xl">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Order Confirmed!</h3>
            <p className="text-white/60 mb-8">
              Thank you for your purchase. You will receive a confirmation email shortly with your download link or tracking information.
            </p>
            <Button onClick={resetAndClose} className="w-full py-4 font-bold uppercase tracking-widest">
              Close
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
}