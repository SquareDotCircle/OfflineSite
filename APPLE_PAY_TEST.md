# Apple Pay Testing Guide

## ✅ What I Fixed

The Apple Pay integration had a critical bug where it was using a placeholder `clientSecret` instead of the real payment intent secret. This is now fixed!

**Changes made:**
- ✅ Pass actual `clientSecret` to PaymentForm component
- ✅ Use real clientSecret in Apple Pay payment confirmation
- ✅ Added console logging for debugging
- ✅ Added error handling for failed payments

---

## 🧪 How to Test Apple Pay

### Prerequisites

1. **Device:** You need a REAL iPhone, iPad, or Mac with Safari
   - Apple Pay does NOT work in Chrome/Firefox
   - Apple Pay does NOT work in simulators for real payments
   - You must use Safari browser

2. **Apple Pay Setup:** Make sure you have Apple Pay configured
   - iPhone: Settings → Wallet & Apple Pay → Add Card
   - iPad: Settings → Wallet & Apple Pay → Add Card  
   - Mac: System Preferences → Wallet & Apple Pay → Add Card

3. **Stripe Test Mode:** Your dev environment uses Stripe test keys
   - No real charges will occur
   - You can use Stripe test cards

---

## 📱 Testing Steps

### Step 1: Start Your Dev Server

```bash
cd /Users/jordanrogan/Documents/Offline/Offline_Web_Preppers/offline-nextjs
npm run dev
```

### Step 2: Open on Your iPhone

1. On your iPhone, open Safari
2. Go to: `http://YOUR_COMPUTER_IP:3000`
   - Find your computer's local IP:
     ```bash
     ifconfig | grep "inet " | grep -v 127.0.0.1
     ```
   - Example: `http://192.168.1.100:3000`

3. Or use ngrok for easier testing:
   ```bash
   # Install ngrok first: brew install ngrok
   ngrok http 3000
   # Use the https:// URL it gives you
   ```

### Step 3: Test the Checkout

1. On your iPhone in Safari, navigate to your site
2. Click on either product: "Software Only" or "EMP Hardened Drive"
3. Click **"Add to Cart"**
4. Fill in the shipping information:
   - Email
   - Name
   - Address (should have autocomplete)
5. Click **"Continue to Payment"**

### Step 4: Look for Apple Pay Button

**What you should see:**

```
┌─────────────────────────────────┐
│   Total Due: $99 (or $237)     │
├─────────────────────────────────┤
│                                 │
│   ┌───────────────────────┐    │
│   │  🍎  Pay with Apple   │    │  ← This is the Apple Pay button
│   └───────────────────────┘    │
│                                 │
│   ─── Or pay with card ───     │
│                                 │
│   [Card Number field]           │
│   [Expiry/CVC fields]          │
│                                 │
└─────────────────────────────────┘
```

### Step 5: Test Apple Pay

1. Tap the **Apple Pay button**
2. Your iPhone should show the Apple Pay sheet
3. You'll see:
   - Offline Order: $XX.XX
   - Your saved card(s)
   - Face ID / Touch ID prompt

4. Authenticate with Face ID/Touch ID
5. Payment should process
6. You should see the "Order Confirmed!" success screen

---

## 🐛 Debugging

### Console Logs to Check

Open Safari Developer Tools (on Mac, connect iPhone via cable):
1. Mac: Safari → Develop → [Your iPhone] → [Your Tab]
2. Look for these logs:

```javascript
✅ Apple Pay/Google Pay available: { applePay: true }
💳 Payment method received from Apple/Google Pay
✅ Payment successful!
```

### If You Don't See Apple Pay Button

**Check these in console:**

```javascript
❌ Apple Pay/Google Pay not available on this device
```

**Reasons:**
1. Not using Safari browser (use Safari!)
2. No card added to Apple Wallet
3. Device doesn't support Apple Pay (very old iPhone/iPad)
4. Stripe keys not configured properly

**To manually test availability:**

In Safari console on your iPhone:
```javascript
// Copy-paste this into console
const script = document.createElement('script');
script.src = 'https://js.stripe.com/v3/';
script.onload = () => {
  const stripe = Stripe('pk_test_YOUR_KEY'); // Use your actual test key
  const pr = stripe.paymentRequest({
    country: 'US',
    currency: 'usd',
    total: { label: 'Test', amount: 100 }
  });
  
  pr.canMakePayment().then(result => {
    console.log('Payment Methods Available:', result);
  });
};
document.head.appendChild(script);
```

---

## 🧪 Stripe Test Cards

When testing with Apple Pay in test mode:

- Apple Pay will show a **"Test Card"** option
- Select it and complete the payment
- The payment will succeed without charging a real card

**Alternative:** Add a Stripe test card to your Apple Wallet:
- Card Number: `4242 4242 4242 4242`
- Expiry: Any future date
- CVC: Any 3 digits
- ZIP: Any 5 digits

---

## ✅ What Success Looks Like

### In the UI:
1. Apple Pay button appears ✅
2. Tapping it opens Apple Pay sheet ✅
3. Face ID/Touch ID authentication ✅
4. Payment processes ✅
5. "Order Confirmed!" screen appears ✅

### In the Console:
```
✅ Apple Pay/Google Pay available: { applePay: true }
💳 Payment method received from Apple/Google Pay
✅ Payment successful!
```

### In Stripe Dashboard:
1. Go to: https://dashboard.stripe.com/test/payments
2. You should see a successful payment
3. Payment method: "Apple Pay"
4. Status: "Succeeded"

---

## 🚨 Common Issues

### Issue: "Could not find Elements context"
**Status:** ✅ FIXED (this was the error you reported)

### Issue: "Payment failed" after Apple Pay
**Cause:** `clientSecret` was placeholder string
**Status:** ✅ FIXED

### Issue: No Apple Pay button appears
**Cause:** Not on Safari or no Apple Pay card added
**Solution:** Use Safari + add card to Wallet

### Issue: "Payment Intent not found"
**Cause:** Stripe secret key not configured
**Solution:** Check `.env.local` has `STRIPE_SECRET_KEY`

---

## 📊 Test Scenarios

Test these scenarios:

- [ ] **Happy Path:** Apple Pay payment succeeds
- [ ] **Card Payment:** Regular card payment still works
- [ ] **Crypto Payment:** Crypto button redirects to Coinbase
- [ ] **Back Button:** Can go back from payment to shipping
- [ ] **Mobile Layout:** Everything looks good on small screen
- [ ] **Error Handling:** Payment failure shows error message
- [ ] **Loading States:** Buttons show "Processing..." state

---

## 🎯 Next Steps

Once Apple Pay works on your iPhone:

1. **Test with real money:** Use live Stripe keys and charge yourself $1
2. **Domain verification:** Required for production Apple Pay
3. **Test on multiple devices:** iPhone, iPad, Mac
4. **Test Google Pay:** Use Chrome on Android
5. **Test Crypto:** Add Coinbase Commerce API key

---

## 📞 Need Help?

If Apple Pay still isn't working:

1. Check Stripe logs: https://dashboard.stripe.com/test/logs
2. Check browser console for errors
3. Verify your `.env.local` has correct keys:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```
4. Restart your dev server after changing env vars

**Contact Stripe Support:**
- https://support.stripe.com/
- They can verify your account is set up correctly for Apple Pay

