# Payment Setup Guide

## Environment Variables Required

Add these to your `.env.local` file:

```bash
# Stripe Payment Configuration (Required for card payments & Apple/Google Pay)
# Get your keys from: https://dashboard.stripe.com/test/apikeys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

# Coinbase Commerce (Optional - for crypto payments)
# Get your API key from: https://commerce.coinbase.com/settings/security
# Supports: Bitcoin (BTC), Ethereum (ETH), USD Coin (USDC), DAI
COINBASE_COMMERCE_API_KEY=your_coinbase_commerce_api_key_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Apple Pay Setup

Apple Pay is **automatically enabled** if:
1. ✅ User is on an Apple device (iPhone, iPad, or Mac with Safari)
2. ✅ User has Apple Pay configured in their device settings
3. ✅ Your Stripe account is properly configured

### Testing Apple Pay

**On a real iPhone/iPad:**
1. Open Safari (Chrome won't work for Apple Pay)
2. Navigate to your site
3. Click "Add to Cart" on any product
4. Fill in shipping information
5. On the payment step, you should see the **Apple Pay button** at the top
6. Tap it and authenticate with Face ID/Touch ID

**Testing with Stripe Test Mode:**
- Apple Pay will show a "Test Card" option in test mode
- You can complete the flow without charging a real card

**Common Issues:**
- **No Apple Pay button?** Check that you're using Safari on iOS
- **"Set Up Apple Pay"?** User needs to add a card to Apple Wallet
- **Payment fails?** Check console logs for errors with `clientSecret`

### Production Setup for Apple Pay

1. **Verify your domain with Apple:**
   - Go to Stripe Dashboard → Settings → Payment Methods → Apple Pay
   - Add your domain (e.g., `offline.io`)
   - Download the verification file
   - Host it at: `https://offline.io/.well-known/apple-developer-merchantid-domain-association`

2. **Enable Apple Pay in Stripe:**
   - Stripe Dashboard → Settings → Payment Methods
   - Toggle on "Apple Pay"
   - Add your verified domains

---

## Google Pay Setup

Google Pay is **automatically enabled** if:
1. ✅ User is on Chrome (desktop or mobile)
2. ✅ User has Google Pay configured
3. ✅ Your Stripe account supports it

### Testing Google Pay

**On Android or Chrome:**
1. Open Chrome browser
2. Navigate to your site
3. Complete checkout flow
4. Google Pay button should appear alongside Apple Pay

**In Test Mode:**
- Google Pay will use Stripe test cards automatically

---

## Crypto Payment Setup (Coinbase Commerce)

### Step 1: Create Coinbase Commerce Account

1. Go to https://commerce.coinbase.com/
2. Sign up (separate from regular Coinbase account)
3. Complete account verification

### Step 2: Get API Key

1. Navigate to Settings → Security → API Keys
2. Create a new API key
3. Copy it to your `.env.local` as `COINBASE_COMMERCE_API_KEY`

### Step 3: Configure Webhooks (Optional but Recommended)

To receive payment confirmations:

1. Go to Settings → Webhook subscriptions
2. Add endpoint: `https://yoursite.com/api/coinbase-webhook`
3. Select events: `charge:confirmed`, `charge:failed`
4. Save the webhook secret (you'll need this for verification)

### Step 4: Test Crypto Payments

1. Start your dev server
2. Click "Add to Cart" on any product
3. Fill shipping info
4. On payment page, click **"Pay with Crypto"** button
5. You'll be redirected to Coinbase Commerce
6. Choose Bitcoin, Ethereum, USDC, or DAI
7. Complete payment (in test mode, use small amounts)

### Supported Cryptocurrencies

- **Bitcoin (BTC)** - Most popular, slower confirmations (~10 min)
- **Ethereum (ETH)** - Faster, but higher fees during network congestion
- **USD Coin (USDC)** - Stablecoin, good for avoiding price fluctuation
- **DAI** - Decentralized stablecoin

---

## Payment Flow Overview

### Card Payment:
```
User clicks "Add to Cart"
  ↓
Shipping info form (with address autocomplete)
  ↓
Payment form loads
  ↓
If Apple/Google Pay available → Show button
  ↓
User pays with card/Apple Pay/Google Pay
  ↓
Success screen
```

### Crypto Payment:
```
User clicks "Add to Cart"
  ↓
Shipping info form
  ↓
Payment form loads
  ↓
User clicks "Pay with Crypto"
  ↓
Redirect to Coinbase Commerce
  ↓
User selects cryptocurrency
  ↓
User sends payment from their wallet
  ↓
Confirmation (1-30 min depending on crypto)
  ↓
Redirect back to success page
```

---

## Debugging

### Check if Apple Pay is available:
```javascript
// In browser console on payment page
const pr = stripe.paymentRequest({
  country: 'US',
  currency: 'usd',
  total: { label: 'Test', amount: 100 }
});

pr.canMakePayment().then(result => {
  console.log('Payment Request API:', result);
  // result will show: { applePay: true } if available
});
```

### Check console logs:
- Look for: `✅ Apple Pay/Google Pay available`
- Or: `❌ Apple Pay/Google Pay not available on this device`

### Common Errors:

**"Could not find Elements context"**
- Fixed! This was the AddressElement error you saw earlier

**"Invalid clientSecret"**
- Check that `STRIPE_SECRET_KEY` is set in `.env.local`
- Restart your dev server after adding env vars

**"Payment failed"**
- Check Stripe Dashboard → Logs for detailed error
- Verify your Stripe API keys are for the same mode (test/live)

---

## Production Checklist

Before going live:

### Stripe
- [ ] Switch from test keys to live keys
- [ ] Verify domain with Apple Pay
- [ ] Enable Google Pay in production
- [ ] Set up webhook endpoint for payment confirmation
- [ ] Test with real credit card (charge yourself $1)

### Coinbase Commerce
- [ ] Switch to production API key
- [ ] Set up webhook for payment confirmations
- [ ] Test with real crypto (send small amount first)
- [ ] Set up email notifications for new payments

### Site Configuration
- [ ] Update `NEXT_PUBLIC_SITE_URL` to your production domain
- [ ] Verify HTTPS is enabled
- [ ] Test checkout flow on mobile devices
- [ ] Check error handling and edge cases

---

## Support Resources

- **Stripe Dashboard:** https://dashboard.stripe.com/
- **Stripe Docs:** https://stripe.com/docs/payments/payment-request-button
- **Stripe Test Cards:** https://stripe.com/docs/testing
- **Coinbase Commerce Dashboard:** https://commerce.coinbase.com/dashboard
- **Coinbase Commerce API Docs:** https://commerce.coinbase.com/docs/api/

