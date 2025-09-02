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
      logoUrl: "https://media.licdn.com/dms/image/v2/C510BAQEnYW7qoK68EQ/company-logo_200_200/company-logo_200_200/0/1630579892170/aba_bank_logo?e=2147483647&v=beta&t=CNGsdiQOwm9PB1VAqw8aqn7Iau72Zen8WZmsqrdC1sY"
    },
    {
      id: "aceleda",
      name: "ACELEDA Bank",
      icon: Building2,
      description: "ACELEDA Mobile Banking",
      available: true,
      logo: "ACELEDA",
      logoUrl: "data:image/jpeg;base64,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"
    },
    {
      id: "wing",
      name: "WING",
      icon: Smartphone,
      description: "WING Mobile Money",
      available: true,
      logo: "WING",
      logoUrl: "data:image/png;base64,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"
    },
    {
      id: "truemoney",
      name: "TrueMoney",
      icon: Wallet,
      description: "TrueMoney Digital Wallet",
      available: true,
      logo: "TrueMoney",
      logoUrl: "data:image/png;base64,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"
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