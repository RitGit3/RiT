import { useState } from "react";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Check, 
  CreditCard, 
  Shield, 
  ArrowLeft, 
  Lock, 
  Star,
  Download,
  Clock,
  Users,
  Zap,
  Smartphone,
  Building2,
  Wallet
} from "lucide-react";

interface PaymentItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  deliveryTime?: string;
  includes?: string[];
}

interface PaymentPageProps {
  onBackToPortfolio?: () => void;
}

export function PaymentPage({ onBackToPortfolio }: PaymentPageProps = {}) {
  const [selectedPlan, setSelectedPlan] = useState<string>("standard");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("card");
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    postalCode: "",
    country: "KH",
    phoneNumber: "",
    accountNumber: "",
    paymentMethod: "card"
  });

  const paymentItems: PaymentItem[] = [
    {
      id: "consultation",
      name: "1-Hour Consultation",
      description: "Professional consultation call to discuss your project requirements and technical needs.",
      price: 150,
      features: [
        "60-minute video call",
        "Project requirement analysis",
        "Technical recommendations",
        "Follow-up summary document",
        "Email support for 1 week"
      ],
      deliveryTime: "Same day booking",
      includes: ["Video call recording", "Written summary", "Action plan"]
    },
    {
      id: "standard",
      name: "Website Development",
      description: "Complete responsive website with modern design and functionality.",
      price: billingCycle === "monthly" ? 2500 : 2000,
      originalPrice: billingCycle === "monthly" ? 3000 : 2500,
      popular: true,
      features: [
        "Responsive design",
        "Up to 5 pages",
        "Contact form integration",
        "SEO optimization",
        "Mobile-first approach",
        "1 month of support",
        "Performance optimization",
        "Cross-browser compatibility"
      ],
      deliveryTime: "2-3 weeks",
      includes: ["Source code", "Documentation", "Deployment guide"]
    },
    {
      id: "premium",
      name: "Full-Stack Application",
      description: "Complete web application with backend, database, and advanced features.",
      price: billingCycle === "monthly" ? 5000 : 4200,
      originalPrice: billingCycle === "monthly" ? 6000 : 5000,
      features: [
        "Custom backend development",
        "Database design & setup",
        "User authentication",
        "Admin dashboard",
        "API integration",
        "3 months of support",
        "Hosting setup",
        "Security implementation",
        "Performance monitoring"
      ],
      deliveryTime: "4-6 weeks",
      includes: ["Full source code", "API documentation", "Deployment & hosting"]
    }
  ];

  const selectedItem = paymentItems.find(item => item.id === selectedPlan);

  const paymentMethods = [
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: CreditCard,
      description: "Visa, Mastercard, American Express",
      available: true
    },
    {
      id: "aba",
      name: "ABA Bank",
      icon: Building2,
      description: "ABA Mobile Banking",
      available: true,
      logo: "ABA",
      logoUrl: "https://images.unsplash.com/photo-1693117616661-1083089c1c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBQkElMjBCYW5rJTIwQ2FtYm9kaWElMjBsb2dvfGVufDF8fHx8MTc1NjgxNDE5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "aceleda",
      name: "ACELEDA Bank",
      icon: Building2,
      description: "ACELEDA Mobile Banking",
      available: true,
      logo: "ACELEDA",
      logoUrl: "https://images.unsplash.com/photo-1646627928999-48734570fff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBQ0VMRURBJTIwQmFuayUyMGxvZ298ZW58MXx8fHwxNzU2ODE0MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "wing",
      name: "WING",
      icon: Smartphone,
      description: "WING Mobile Money",
      available: true,
      logo: "WING",
      logoUrl: "https://images.unsplash.com/photo-1669798760618-52fe2c72b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXSU5HJTIwbW9iaWxlJTIwbW9uZXklMjBsb2dvfGVufDF8fHx8MTc1NjgxNDIwMnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "truemoney",
      name: "TrueMoney",
      icon: Wallet,
      description: "TrueMoney Digital Wallet",
      available: true,
      logo: "TrueMoney",
      logoUrl: "https://images.unsplash.com/photo-1585401586477-2a671e1cae4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUcnVlTW9uZXklMjB3YWxsZXQlMjBsb2dvfGVufDF8fHx8MTc1NjgxNDIwNXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentMethodChange = (methodId: string) => {
    setSelectedPaymentMethod(methodId);
    setFormData(prev => ({
      ...prev,
      paymentMethod: methodId
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission - integrate with Stripe, PayPal, etc.
    console.log("Payment submitted:", { selectedPlan, formData, billingCycle });
    alert("Payment processing would happen here - integrate with your payment provider!");
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container-content px-6 mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <button 
            onClick={onBackToPortfolio}
            className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </button>
          
          <h1 className="text-heading-1 text-white mb-4">Choose Your Service</h1>
          <p className="text-body-large text-gray-400 max-w-2xl mx-auto mb-2">
            Select the perfect solution for your project needs. All packages include professional development, 
            clean code, and ongoing support.
          </p>
          <p className="text-body text-gray-500 font-khmer">
            ជ្រើសរើសគម្រោងឌីជីថលដ៏ល្អឥតខ្ចោះសម្រាប់អ្នក • ទូទាត់ជាមួយប្រព័ន្ធទូទាត់របស់កម្ពុជា
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Service Selection */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-heading-2 text-white mb-6">Available Services</h2>
              
              {/* Service Cards */}
              <div className="space-y-4">
                {paymentItems.map((item) => (
                  <div
                    key={item.id}
                    className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      selectedPlan === item.id
                        ? 'border-blue-500 bg-blue-600/5'
                        : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600/50'
                    }`}
                    onClick={() => setSelectedPlan(item.id)}
                  >
                    {item.popular && (
                      <div className="absolute -top-3 left-6">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-start mb-4 gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-heading-3 text-white mb-2 leading-tight">{item.name}</h3>
                        <p className="text-body text-gray-400 pr-2">{item.description}</p>
                      </div>
                      
                      <div className="text-right flex-shrink-0 min-w-[120px]">
                        <div className="flex flex-col items-end gap-1">
                          {item.originalPrice && (
                            <span className="text-gray-500 line-through text-sm">
                              {formatPrice(item.originalPrice)}
                            </span>
                          )}
                          <span className="text-xl font-semibold text-white leading-tight">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                        {item.deliveryTime && (
                          <div className="flex items-center justify-end text-sm text-gray-400 mt-2">
                            <Clock size={14} className="mr-1" />
                            {item.deliveryTime}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-body font-medium text-white mb-2">Features:</h4>
                        <ul className="space-y-1">
                          {item.features.slice(0, 4).map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-400">
                              <Check size={14} className="text-blue-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                          {item.features.length > 4 && (
                            <li className="text-sm text-blue-400">
                              +{item.features.length - 4} more features
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      {item.includes && (
                        <div>
                          <h4 className="text-body font-medium text-white mb-2">Includes:</h4>
                          <ul className="space-y-1">
                            {item.includes.map((include, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-400">
                                <Download size={14} className="text-green-400 mr-2 flex-shrink-0" />
                                {include}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 sticky top-6">
              <h3 className="text-heading-3 text-white mb-6">Payment Details</h3>
              
              {/* Order Summary */}
              {selectedItem && (
                <div className="mb-6 p-4 bg-gray-700/30 rounded-lg">
                  <h4 className="text-body font-medium text-white mb-2">Order Summary</h4>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">{selectedItem.name}</span>
                    <span className="text-white">{formatPrice(selectedItem.price)}</span>
                  </div>
                  {selectedItem.originalPrice && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Discount</span>
                      <span className="text-green-400">
                        -{formatPrice(selectedItem.originalPrice - selectedItem.price)}
                      </span>
                    </div>
                  )}
                  <div className="border-t border-gray-600 pt-2 mt-2">
                    <div className="flex justify-between items-center font-medium">
                      <span className="text-white">Total</span>
                      <span className="text-white text-lg">{formatPrice(selectedItem.price)}</span>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Contact Information */}
                <div>
                  <h4 className="text-body font-medium text-white mb-3">Contact Information</h4>
                  <div className="space-y-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-700/30 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-colors"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-700/30 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-colors"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-700/30 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div>
                  <h4 className="text-body font-medium text-white mb-3">Payment Method</h4>
                  <div className="space-y-3 mb-4">
                    {paymentMethods.map((method) => {
                      const IconComponent = method.icon;
                      return (
                        <div
                          key={method.id}
                          className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                            selectedPaymentMethod === method.id
                              ? 'border-blue-500 bg-blue-600/5'
                              : 'border-gray-600/50 bg-gray-700/20 hover:border-gray-500/50'
                          }`}
                          onClick={() => handlePaymentMethodChange(method.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-lg ${
                                selectedPaymentMethod === method.id ? 'bg-blue-600/20' : 'bg-gray-600/30'
                              }`}>
                                {method.logoUrl ? (
                                  <div className="w-8 h-8 overflow-hidden rounded-lg bg-white/10">
                                    <ImageWithFallback
                                      src={method.logoUrl}
                                      alt={`${method.name} logo`}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                ) : method.logo ? (
                                  <div className={`w-6 h-6 flex items-center justify-center rounded text-xs font-bold ${
                                    method.logo === 'ABA' ? 'bg-red-600 text-white' :
                                    method.logo === 'ACELEDA' ? 'bg-blue-600 text-white' :
                                    method.logo === 'WING' ? 'bg-purple-600 text-white' :
                                    method.logo === 'TrueMoney' ? 'bg-orange-600 text-white' :
                                    'bg-gray-600 text-white'
                                  }`}>
                                    {method.logo === 'ABA' ? 'A' :
                                     method.logo === 'ACELEDA' ? 'AC' :
                                     method.logo === 'WING' ? 'W' :
                                     method.logo === 'TrueMoney' ? 'T' : '?'}
                                  </div>
                                ) : (
                                  <IconComponent size={20} className={
                                    selectedPaymentMethod === method.id ? 'text-blue-400' : 'text-gray-400'
                                  } />
                                )}
                              </div>
                              <div>
                                <div className="text-white font-medium">{method.name}</div>
                                <div className="text-gray-400 text-sm">{method.description}</div>
                              </div>
                            </div>
                            <div className={`w-4 h-4 rounded-full border-2 ${
                              selectedPaymentMethod === method.id
                                ? 'border-blue-500 bg-blue-500'
                                : 'border-gray-500'
                            }`}>
                              {selectedPaymentMethod === method.id && (
                                <div className="w-full h-full rounded-full bg-blue-500 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-white"></div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Dynamic Payment Fields */}
                  {selectedPaymentMethod === 'card' && (
                    <div className="space-y-3">
                      <div className="relative">
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="Card number"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-gray-700/30 border border-gray-600/50 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-colors"
                        />
                        <CreditCard size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          name="expiryDate"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-700/30 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-colors"
                        />
                        <div className="relative">
                          <input
                            type="text"
                            name="cvv"
                            placeholder="CVV"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-gray-700/30 border border-gray-600/50 rounded-lg px-4 py-3 pr-10 text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-colors"
                          />
                          <Lock size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  )}

                  {(selectedPaymentMethod === 'aba' || selectedPaymentMethod === 'aceleda') && (
                    <div className="space-y-3">
                      <input
                        type="text"
                        name="accountNumber"
                        placeholder="Account Number"
                        value={formData.accountNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-700/30 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-colors"
                      />
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-700/30 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-colors"
                      />
                      <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-3">
                        <p className="text-blue-400 text-sm">
                          📱 You will receive an SMS with payment confirmation link
                        </p>
                      </div>
                    </div>
                  )}

                  {(selectedPaymentMethod === 'wing' || selectedPaymentMethod === 'truemoney') && (
                    <div className="space-y-3">
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Mobile Number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-700/30 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-colors"
                      />
                      <div className="bg-purple-600/10 border border-purple-500/30 rounded-lg p-3">
                        <p className="text-purple-400 text-sm">
                          📱 Payment will be processed through {selectedPaymentMethod === 'wing' ? 'WING' : 'TrueMoney'} mobile app
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Security Badge */}
                <div className="flex items-center justify-center p-3 bg-green-600/10 border border-green-500/30 rounded-lg">
                  <Shield size={16} className="text-green-400 mr-2" />
                  <span className="text-green-400 text-sm">Secured with 256-bit SSL encryption</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg transition-all duration-200 font-medium flex items-center justify-center"
                >
                  {selectedPaymentMethod === 'card' ? 'Complete Payment' :
                   selectedPaymentMethod === 'aba' ? 'Pay with ABA' :
                   selectedPaymentMethod === 'aceleda' ? 'Pay with ACELEDA' :
                   selectedPaymentMethod === 'wing' ? 'Pay with WING' :
                   selectedPaymentMethod === 'truemoney' ? 'Pay with TrueMoney' :
                   'Complete Payment'}
                  {selectedPaymentMethod === 'card' ? (
                    <CreditCard size={20} className="ml-2" />
                  ) : (
                    <Smartphone size={20} className="ml-2" />
                  )}
                </button>

                {/* Trust Indicators */}
                <div className="text-center pt-4">
                  <div className="flex items-center justify-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center">
                      <Star size={14} className="text-yellow-400 mr-1" />
                      <span>5.0 rating</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={14} className="mr-1" />
                      <span>50+ clients</span>
                    </div>
                    <div className="flex items-center">
                      <Zap size={14} className="mr-1" />
                      <span>Fast delivery</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Accepted Payment Methods */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 mb-8">
          <h3 className="text-heading-2 text-white mb-6 text-center">We Accept</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {/* Credit Cards */}
            <div className="flex flex-col items-center p-4 bg-gray-700/30 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                <CreditCard size={24} className="text-white" />
              </div>
              <span className="text-white text-sm font-medium">Credit Cards</span>
              <span className="text-gray-400 text-xs">Visa, Mastercard</span>
            </div>

            {/* ABA Bank */}
            <div className="flex flex-col items-center p-4 bg-gray-700/30 rounded-lg">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center mb-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1693117616661-1083089c1c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBQkElMjBCYW5rJTIwQ2FtYm9kaWElMjBsb2dvfGVufDF8fHx8MTc1NjgxNDE5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="ABA Bank logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white text-sm font-medium">ABA Bank</span>
              <span className="text-gray-400 text-xs">Mobile Banking</span>
            </div>

            {/* ACELEDA */}
            <div className="flex flex-col items-center p-4 bg-gray-700/30 rounded-lg">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center mb-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1646627928999-48734570fff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBQ0VMRURBJTIwQmFuayUyMGxvZ298ZW58MXx8fHwxNzU2ODE0MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="ACELEDA Bank logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white text-sm font-medium">ACELEDA</span>
              <span className="text-gray-400 text-xs">Mobile Banking</span>
            </div>

            {/* WING */}
            <div className="flex flex-col items-center p-4 bg-gray-700/30 rounded-lg">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center mb-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1669798760618-52fe2c72b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXSU5HJTIwbW9iaWxlJTIwbW9uZXklMjBsb2dvfGVufDF8fHx8MTc1NjgxNDIwMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="WING mobile money logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white text-sm font-medium">WING</span>
              <span className="text-gray-400 text-xs">Mobile Money</span>
            </div>

            {/* TrueMoney */}
            <div className="flex flex-col items-center p-4 bg-gray-700/30 rounded-lg">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center mb-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1585401586477-2a671e1cae4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUcnVlTW9uZXklMjB3YWxsZXQlMjBsb2dvfGVufDF8fHx8MTc1NjgxNDIwNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="TrueMoney wallet logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white text-sm font-medium">TrueMoney</span>
              <span className="text-gray-400 text-xs">Digital Wallet</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              All payments are processed securely with industry-standard encryption
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
          <h3 className="text-heading-2 text-white mb-6 text-center">Frequently Asked Questions</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-body font-medium text-white mb-2">What's included in the price?</h4>
              <p className="text-body-small text-gray-400 mb-4">
                All packages include development, testing, documentation, and initial support. No hidden fees.
              </p>
              
              <h4 className="text-body font-medium text-white mb-2">How do revisions work?</h4>
              <p className="text-body-small text-gray-400 mb-4">
                Each package includes a specific number of revision rounds to ensure you're completely satisfied.
              </p>

              <h4 className="text-body font-medium text-white mb-2">Which payment methods do you accept?</h4>
              <p className="text-body-small text-gray-400 mb-4">
                We accept all major credit cards, ABA Bank, ACELEDA Bank, WING, and TrueMoney for your convenience.
              </p>
            </div>
            
            <div>
              <h4 className="text-body font-medium text-white mb-2">What if I need something custom?</h4>
              <p className="text-body-small text-gray-400 mb-4">
                I offer custom solutions tailored to your specific needs. Contact me for a personalized quote.
              </p>
              
              <h4 className="text-body font-medium text-white mb-2">Do you provide ongoing support?</h4>
              <p className="text-body-small text-gray-400 mb-4">
                Yes! All packages include support period, and extended support packages are available.
              </p>

              <h4 className="text-body font-medium text-white mb-2">How long does payment processing take?</h4>
              <p className="text-body-small text-gray-400">
                Credit card payments are instant, while mobile banking payments typically process within 2-5 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}