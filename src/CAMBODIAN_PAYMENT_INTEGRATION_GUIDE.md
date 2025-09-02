# 🇰🇭 Cambodian Payment Methods Integration Guide

## 🎯 Enhanced Payment Page Features

Your PaymentPage component now includes **professional Cambodian payment methods** that are widely used in Cambodia:

### 💳 Supported Payment Methods

| Method | Logo Color | Description | Fields Required |
|--------|------------|-------------|-----------------|
| **Credit/Debit Cards** | Blue | Visa, Mastercard, Amex | Card number, Expiry, CVV |
| **ABA Bank** | Red (A) | ABA Mobile Banking | Account number, Phone |
| **ACELEDA Bank** | Blue (AC) | ACELEDA Mobile Banking | Account number, Phone |
| **WING** | Purple (W) | WING Mobile Money | Mobile number |
| **TrueMoney** | Orange (T) | TrueMoney Digital Wallet | Mobile number |

---

## 🎨 Visual Design Features

### Professional Payment Method Cards
```tsx
// Each payment method has:
- Brand-colored logo badges
- Clear descriptions
- Radio button selection
- Dynamic form fields
- SMS/App integration notes
```

### Trust Building Elements
- **"We Accept" showcase section** with all payment logos
- **Security badges** and SSL encryption indicators
- **Cambodian language support** (Khmer font included)
- **Mobile-optimized interface** for phone payments

### Enhanced User Experience
- **Smart form fields** that change based on payment method
- **Visual feedback** with blue accents for selected methods
- **Clear instructions** for each payment type
- **Professional styling** matching your portfolio

---

## 🔧 How to Integrate

### Option 1: Add to Your Portfolio Navigation

Add a "Services" or "Hire Me" button to your PortfolioHeader:

```tsx
// In PortfolioHeader.tsx, add this button:
<button 
  onClick={() => window.location.href = '/payment'}
  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
>
  Hire Me
</button>
```

### Option 2: Simple Routing in App.tsx

```tsx
import { useState } from "react";
import { PaymentPage } from "./components/PaymentPage";
// ... other imports

export default function App() {
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'payment'>('portfolio');

  if (currentPage === 'payment') {
    return <PaymentPage />;
  }

  // ... rest of your portfolio
}
```

### Option 3: Direct Link Integration

Simply create a button anywhere that links to the payment page:

```tsx
<button 
  onClick={() => window.location.href = '/payment'}
  className="btn-primary"
>
  View Services & Pricing
</button>
```

---

## 🏦 Cambodian Payment Provider Integration

### ABA Bank Integration
```tsx
const handleABAPayment = async (formData) => {
  // ABA Bank API integration
  const response = await fetch('/api/aba-payment', {
    method: 'POST',
    body: JSON.stringify({
      accountNumber: formData.accountNumber,
      phoneNumber: formData.phoneNumber,
      amount: selectedItem.price,
      currency: 'USD'
    })
  });
  
  // Redirect to ABA mobile app or SMS confirmation
};
```

### ACELEDA Bank Integration
```tsx
const handleACELEDAPayment = async (formData) => {
  // ACELEDA Bank API integration
  const response = await fetch('/api/aceleda-payment', {
    method: 'POST',
    body: JSON.stringify({
      accountNumber: formData.accountNumber,
      phoneNumber: formData.phoneNumber,
      amount: selectedItem.price
    })
  });
  
  // Process through ACELEDA mobile banking
};
```

### WING Payment Integration
```tsx
const handleWINGPayment = async (formData) => {
  // WING API integration
  const response = await fetch('/api/wing-payment', {
    method: 'POST',
    body: JSON.stringify({
      phoneNumber: formData.phoneNumber,
      amount: selectedItem.price,
      reference: `ORDER_${Date.now()}`
    })
  });
  
  // Redirect to WING mobile app
};
```

### TrueMoney Integration
```tsx
const handleTrueMoneyPayment = async (formData) => {
  // TrueMoney API integration
  const response = await fetch('/api/truemoney-payment', {
    method: 'POST',
    body: JSON.stringify({
      phoneNumber: formData.phoneNumber,
      amount: selectedItem.price,
      merchantId: 'YOUR_MERCHANT_ID'
    })
  });
  
  // Process through TrueMoney wallet
};
```

---

## 🌐 Localization Features

### Khmer Language Support
The payment page includes:
- **Khmer font integration** (Noto Sans Khmer)
- **Bilingual descriptions** for better understanding
- **Cultural payment preferences** (mobile-first approach)

### Cambodian Market Considerations
- **USD pricing** (commonly used in Cambodia)
- **Mobile payment priority** (WING, TrueMoney are very popular)
- **Bank integration** (ABA and ACELEDA are major banks)
- **SMS confirmations** for banking payments

---

## 💱 Currency & Pricing

### Default Currency: USD
```tsx
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'  // Standard in Cambodia
  }).format(price);
};
```

### Add Riel (KHR) Support (Optional)
```tsx
const formatPriceKHR = (price: number) => {
  const khrRate = 4100; // Approximate USD to KHR rate
  return new Intl.NumberFormat('km-KH', {
    style: 'currency',
    currency: 'KHR'
  }).format(price * khrRate);
};
```

---

## 📱 Mobile Optimization

### Cambodia-Specific Mobile Features
- **Large touch targets** for mobile banking apps
- **Clear payment method logos** for easy recognition
- **SMS integration messaging** for bank confirmations
- **App redirect handling** for WING/TrueMoney

### Responsive Design
```css
/* Mobile payment method cards */
@media (max-width: 640px) {
  .payment-method-card {
    padding: 1rem;
    margin-bottom: 0.75rem;
  }
  
  .payment-logo {
    width: 48px;
    height: 48px;
  }
}
```

---

## 🔒 Security Considerations

### Cambodian Banking Security
- **Never store banking credentials** locally
- **Use HTTPS for all transactions**
- **Implement proper session management**
- **Follow each bank's security guidelines**

### Payment Data Handling
```tsx
// Secure form data handling
const secureFormData = {
  ...formData,
  // Remove sensitive data before logging
  cardNumber: '****',
  cvv: '***',
  accountNumber: '****'
};
console.log('Payment attempt:', secureFormData);
```

---

## 🎯 User Experience Enhancements

### Smart Form Validation
```tsx
const validatePaymentMethod = (method: string, data: any) => {
  switch (method) {
    case 'aba':
    case 'aceleda':
      return data.accountNumber && data.phoneNumber;
    case 'wing':
    case 'truemoney':
      return data.phoneNumber && /^(\+855|0)[1-9]\d{7,8}$/.test(data.phoneNumber);
    case 'card':
      return data.cardNumber && data.expiryDate && data.cvv;
    default:
      return false;
  }
};
```

### Dynamic Button Text
The submit button automatically updates based on selected payment method:
- "Complete Payment" for credit cards
- "Pay with ABA" for ABA Bank
- "Pay with WING" for WING payments
- etc.

---

## 📊 Analytics & Tracking

### Payment Method Analytics
```tsx
// Track payment method preferences
const trackPaymentMethodSelection = (method: string) => {
  gtag('event', 'payment_method_selected', {
    method: method,
    currency: 'USD',
    country: 'Cambodia'
  });
};

// Track conversion by payment method
const trackPaymentSuccess = (method: string, amount: number) => {
  gtag('event', 'purchase', {
    transaction_id: `TXN_${Date.now()}`,
    value: amount,
    currency: 'USD',
    payment_method: method,
    country: 'Cambodia'
  });
};
```

---

## 🚀 Deployment Checklist

### Before Going Live:
- [ ] **Test each payment method** with sandbox accounts
- [ ] **Verify mobile responsiveness** on Cambodian devices
- [ ] **Test SMS integration** for banking payments
- [ ] **Validate Khmer text display** properly
- [ ] **Set up payment provider accounts** (ABA, ACELEDA, WING, TrueMoney)
- [ ] **Configure webhook endpoints** for payment confirmations
- [ ] **Test currency conversion** if needed
- [ ] **Verify SSL certificates** are properly configured

### Marketing Considerations:
- **Highlight local payment options** in your marketing
- **Show trust badges** for Cambodian banks
- **Use familiar payment logos** that locals recognize
- **Provide customer support** in both English and Khmer

---

## 🎉 Benefits of This Integration

### For Your Business:
✅ **Increased conversions** - Cambodians prefer local payment methods
✅ **Market credibility** - Shows understanding of local market
✅ **Reduced friction** - Familiar payment options
✅ **Competitive advantage** - Most developers don't offer this

### For Your Clients:
✅ **Convenient payments** - Use their preferred methods
✅ **Faster processing** - Local banking is often faster
✅ **Lower fees** - Avoid international transaction fees
✅ **Familiar interface** - Payment methods they already use

---

## 🆘 Troubleshooting

**Payment method not working?**
- Check API credentials for each provider
- Verify webhook URLs are correctly configured
- Test with sandbox accounts first

**Khmer text not displaying?**
- Ensure Noto Sans Khmer font is loaded
- Check UTF-8 encoding in your HTML meta tags
- Verify CSS font-family declarations

**Mobile payments failing?**
- Test redirect URLs to banking apps
- Verify phone number format validation
- Check mobile app deep linking setup

---

This integration makes your portfolio uniquely suited for the Cambodian market while maintaining professional international standards! 🇰🇭✨