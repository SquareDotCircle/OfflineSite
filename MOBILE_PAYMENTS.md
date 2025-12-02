# Mobile Payment Options

## ✅ Currently Enabled

### Apple Pay & Google Pay
**Status:** Already integrated and working!

Your checkout modal automatically displays Apple Pay/Google Pay buttons via Stripe's `PaymentRequestButtonElement`. These will appear:
- **Apple Pay:** On iOS devices (iPhone/iPad/Mac) when user has Apple Pay set up
- **Google Pay:** On Android devices when user has Google Pay configured

**How it works:**
1. User clicks "Add to Cart" on mobile
2. If Apple Pay/Google Pay is available, a button appears at the top of the payment form
3. User taps the button → authenticates with Face ID/Touch ID/PIN
4. Payment is processed instantly

**Testing:**
- On real iOS device with Safari (required for Apple Pay)
- On Android with Chrome (for Google Pay)
- Use Stripe test cards: https://stripe.com/docs/testing

**Code location:** `/app/components/ui/CheckoutModal.tsx` lines 38-76

---

## 💰 Adding Cryptocurrency Payments

Cryptocurrency payments require a different payment processor. Here are your options:

### Option 1: Coinbase Commerce (Recommended)
**Best for:** Bitcoin, Ethereum, USDC, DAI
**Fees:** ~1% per transaction

**Setup:**
1. Create account at https://commerce.coinbase.com/
2. Install package:
```bash
npm install @coinbase/coinbase-commerce-js
```

3. Add to `.env.local`:
```
COINBASE_COMMERCE_API_KEY=your_api_key_here
NEXT_PUBLIC_COINBASE_COMMERCE_KEY=your_publishable_key
```

4. Create API route `/app/api/create-crypto-charge/route.ts`:
```typescript
import { NextResponse } from 'next/server';
const Client = require('coinbase-commerce-node').Client;

export async function POST(request: Request) {
  const { amount, productName } = await request.json();
  
  Client.init(process.env.COINBASE_COMMERCE_API_KEY);
  
  const chargeData = {
    name: productName,
    description: 'Offline Intelligence Product',
    local_price: {
      amount: (amount / 100).toFixed(2),
      currency: 'USD'
    },
    pricing_type: 'fixed_price',
    redirect_url: 'https://yoursite.com/success',
    cancel_url: 'https://yoursite.com/checkout'
  };

  try {
    const charge = await Client.resources.Charge.create(chargeData);
    return NextResponse.json({ 
      hostedUrl: charge.hosted_url,
      id: charge.id 
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create charge' }, { status: 500 });
  }
}
```

5. Add crypto button to CheckoutModal:
```tsx
// In PaymentForm component
const [cryptoUrl, setCryptoUrl] = useState<string | null>(null);

const handleCryptoPayment = async () => {
  const res = await fetch('/api/create-crypto-charge', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      amount: priceInCents, 
      productName: 'Your Product' 
    })
  });
  const data = await res.json();
  if (data.hostedUrl) {
    window.location.href = data.hostedUrl; // Redirect to Coinbase payment page
  }
};

// In your JSX
<button 
  onClick={handleCryptoPayment}
  className="w-full py-4 bg-blue-600 text-white rounded hover:bg-blue-700"
>
  Pay with Crypto (BTC/ETH/USDC)
</button>
```

### Option 2: BTCPay Server (Self-Hosted)
**Best for:** Bitcoin-only, no middleman
**Fees:** None (you host it)
**Tech Level:** Advanced

Setup guide: https://btcpayserver.org/

### Option 3: Stripe Crypto (Limited)
**Status:** Currently limited to US-based customers only
**Supports:** USDC only

Stripe added crypto support in 2024, but it's restricted. Not recommended for your use case.

---

## 🚀 Recommended Implementation

For your product (offline intelligence for privacy-conscious users), I recommend:

### Phase 1: Current Setup (Done ✅)
- Stripe with Apple Pay/Google Pay
- Works on all mobile devices
- Instant checkout experience

### Phase 2: Add Coinbase Commerce
- Appeals to crypto-native preppers
- Supports BTC, ETH, USDC, DAI
- ~1 hour to implement
- Add a toggle: "Pay with Card" vs "Pay with Crypto"

### Phase 3: (Optional) BTCPay Server
- Ultimate privacy for hardcore users
- Lightning Network support for instant payments
- Requires more technical setup

---

## Mobile UX Best Practices

Your current implementation already follows these:
✅ Large, touch-friendly buttons
✅ Minimal form fields
✅ Auto-complete for addresses (AddressElement)
✅ One-tap payment with Apple/Google Pay
✅ Progress indicator (step 1/2)
✅ Responsive design

---

## Testing Checklist

- [ ] Test Apple Pay on real iPhone (Safari required)
- [ ] Test Google Pay on Android (Chrome required)
- [ ] Test on mobile browsers (Chrome, Safari, Firefox)
- [ ] Test form validation on mobile keyboards
- [ ] Verify checkout flow in mobile view (< 640px width)
- [ ] Test with Stripe test cards

---

## Support

- **Stripe Docs:** https://stripe.com/docs/payments/payment-request-button
- **Coinbase Commerce Docs:** https://commerce.coinbase.com/docs/
- **Stripe Dashboard:** https://dashboard.stripe.com/test/payments

