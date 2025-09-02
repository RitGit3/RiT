import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export function PortfolioContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual submission logic
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Your City, Country",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-950/50">
      <div className="container-content px-6 mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading-1 text-white mb-6">Let's Work Together</h2>
          <p className="text-body-large text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h3 className="text-heading-2 text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = (
                  <div className="flex items-center p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/30 transition-all duration-300">
                    <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-3 mr-4">
                      <IconComponent size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-body-small text-gray-400 mb-1">{info.label}</div>
                      <div className="text-body text-white">{info.value}</div>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a key={index} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-heading-3 text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/30 hover:bg-gray-700/50 border border-gray-700/50 hover:border-blue-500/30 rounded-lg p-3 transition-all duration-300"
                >
                  <Github size={20} className="text-gray-400 hover:text-blue-400" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/30 hover:bg-gray-700/50 border border-gray-700/50 hover:border-blue-500/30 rounded-lg p-3 transition-all duration-300"
                >
                  <Linkedin size={20} className="text-gray-400 hover:text-blue-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-body-small text-gray-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/30 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-body-small text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/30 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-body-small text-gray-400 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800/30 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-colors"
                  placeholder="Project discussion, job opportunity, etc."
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-body-small text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-gray-800/30 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or what you'd like to discuss..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white px-6 py-4 rounded-lg transition-all duration-200 font-medium flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    Send Message
                    <Send size={20} className="ml-2" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-600/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-600/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}