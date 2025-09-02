# 🖼️ How to Replace Payment Method Logos

## 🎯 Current Logo Setup

Your payment page now uses **actual images** instead of text placeholders! Here's how to customize them with your preferred logos.

---

## 📍 **Where Logos Are Used**

### 1. **Payment Method Selection Cards** (Lines 376-398)
- Shows when users select payment methods
- Size: `32px x 32px` (w-8 h-8)
- Style: Rounded corners with white/10 background

### 2. **"We Accept" Showcase Section** (Lines 598-650)  
- Shows all accepted payment methods
- Size: `48px x 48px` (w-12 h-12)
- Style: Rounded corners with white/10 background

---

## 🔄 **How to Replace Logos**

### **Method 1: Replace URL in Code**

In `/components/PaymentPage.tsx`, find these lines:

```tsx
// ABA Bank (Line 124-125)
logo: "ABA",
logoUrl: "https://images.unsplash.com/photo-1693117616661-1083089c1c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBQkElMjBCYW5rJTIwQ2FtYm9kaWElMjBsb2dvfGVufDF8fHx8MTc1NjgxNDE5Nnww&ixlib=rb-4.1.0&q=80&w=1080"

// ACELEDA Bank (Line 132-133)
logo: "ACELEDA", 
logoUrl: "https://images.unsplash.com/photo-1646627928999-48734570fff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBQ0VMRURBJTIwQmFuayUyMGxvZ298ZW58MXx8fHwxNzU2ODE0MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080"

// WING (Line 140-141)
logo: "WING",
logoUrl: "https://images.unsplash.com/photo-1669798760618-52fe2c72b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXSU5HJTIwbW9iaWxlJTIwbW9uZXklMjBsb2dvfGVufDF8fHx8MTc1NjgxNDIwMnww&ixlib=rb-4.1.0&q=80&w=1080"

// TrueMoney (Line 148-149)
logo: "TrueMoney",
logoUrl: "https://images.unsplash.com/photo-1585401586477-2a671e1cae4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUcnVlTW9uZXklMjB3YWxsZXQlMjBsb2dvfGVufDF8fHx8MTc1NjgxNDIwNXww&ixlib=rb-4.1.0&q=80&w=1080"
```

**Simply replace the URL** with your preferred image URL!

---

### **Method 2: Use Local Images**

#### **Step 1**: Add your logo images to the project
```
/public/
  images/
    logos/
      aba-bank-logo.png
      aceleda-bank-logo.png
      wing-logo.png
      truemoney-logo.png
```

#### **Step 2**: Update the logoUrl in PaymentPage.tsx
```tsx
// Replace URLs with local paths:
logoUrl: "/images/logos/aba-bank-logo.png"
logoUrl: "/images/logos/aceleda-bank-logo.png" 
logoUrl: "/images/logos/wing-logo.png"
logoUrl: "/images/logos/truemoney-logo.png"
```

---

## 🎨 **Logo Requirements**

### **Recommended Specifications:**
- **Format**: PNG, JPG, or SVG
- **Size**: 200x200px minimum (for crisp display)
- **Background**: Transparent PNG preferred
- **Aspect Ratio**: Square (1:1) works best

### **Style Guidelines:**
- **Clean and recognizable** - Official bank/service logos
- **High contrast** - Readable on dark backgrounds
- **Professional quality** - Represents your business well

---

## 🔧 **Advanced Customization**

### **Add New Payment Method:**

```tsx
// Add to paymentMethods array (around line 110):
{
  id: "new-payment",
  name: "New Payment Service", 
  icon: CreditCard, // Choose appropriate icon
  description: "New payment description",
  available: true,
  logo: "NEW_PAYMENT",
  logoUrl: "https://your-logo-url-here.com/logo.png"
}
```

### **Remove Payment Method:**

Simply delete or comment out the unwanted payment method from the `paymentMethods` array.

### **Change Logo Size:**

```tsx
// For payment selection (currently w-8 h-8 = 32px):
<div className="w-10 h-10 overflow-hidden rounded-lg bg-white/10">

// For showcase section (currently w-12 h-12 = 48px):  
<div className="w-16 h-16 rounded-lg overflow-hidden bg-white/10">
```

---

## 🖥️ **Where to Find Official Logos**

### **Cambodian Bank Logos:**
- **ABA Bank**: [ABA's official website](https://www.ababank.com)
- **ACELEDA Bank**: [ACELEDA's brand resources](https://www.acledabank.com.kh)
- **WING**: [WING official website](https://www.wingmoney.com)
- **TrueMoney**: [TrueMoney Cambodia](https://www.truemoney.com.kh)

### **Logo Resources:**
- **Brand guidelines** - Check each company's official brand kit
- **Press kits** - Often available on company websites
- **Vector formats** - SVG files work best for web

---

## 📱 **Fallback System**

The payment page includes a **smart fallback system**:

```tsx
// If logoUrl fails to load, it shows colored text badges:
{method.logoUrl ? (
  <ImageWithFallback src={method.logoUrl} alt="Logo" />
) : method.logo ? (
  <div className="bg-red-600 text-white">A</div>  // Fallback badge
) : (
  <IconComponent />  // Icon fallback
)}
```

This ensures your payment page always works, even if images fail to load!

---

## 🎯 **Testing Your Changes**

### **After replacing logos:**

1. **Refresh your payment page**
2. **Check both sections**:
   - Payment method selection cards
   - "We Accept" showcase section
3. **Test on mobile** - Ensure logos look good at smaller sizes
4. **Verify loading speed** - Optimize large images if needed

---

## 🚨 **Common Issues & Solutions**

### **Logo not displaying?**
- ✅ Check URL is accessible (try opening in browser)
- ✅ Verify image format is supported (PNG, JPG, SVG)
- ✅ Check for typos in logoUrl

### **Logo looks blurry?**
- ✅ Use higher resolution images (200x200px minimum)
- ✅ Avoid stretching non-square images
- ✅ Use PNG for transparent backgrounds

### **Logo too big/small?**
- ✅ Adjust the `w-8 h-8` classes in the code
- ✅ Use `object-cover` or `object-contain` for different fits

---

## 🎨 **Styling Options**

### **Round logos:**
```tsx
className="w-8 h-8 rounded-full object-cover"
```

### **Add border:**
```tsx
className="w-8 h-8 rounded-lg border border-gray-600 object-cover"
```

### **Add shadow:**
```tsx 
className="w-8 h-8 rounded-lg shadow-lg object-cover"
```

---

## 💡 **Pro Tips**

### **For Best Results:**
- Use **official logos** from bank websites
- Keep **consistent sizing** across all payment methods
- Optimize images for **web performance**
- Test on **different screen sizes**

### **Brand Compliance:**
- Check each company's **brand guidelines**
- Use logos **as intended** by the companies
- Don't modify colors or proportions
- Credit sources if required

---

## 🎉 **You're All Set!**

Your payment page now has:
- ✅ **Professional logo images** instead of text placeholders
- ✅ **Proper spacing** so prices don't overlap with titles  
- ✅ **Fallback system** for reliability
- ✅ **Easy customization** for future updates

The pricing display has been fixed so larger amounts like $5,000 won't touch the service titles, and you now have real logos that make your payment page look much more professional and trustworthy! 🇰🇭✨