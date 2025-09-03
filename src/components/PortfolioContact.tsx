import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export function PortfolioContact() {
  // Formspree hook (replaces your old handleSubmit)
  const [state, handleSubmit] = useForm("xblazgww");

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "theariththeman@gmail.com",
      href: "mailto:theariththeman@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+855 (011) 59-2229",
      href: "tel:+855011592229"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Phnom Penh, Cambodia",
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
              
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-body-small text-gray-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
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
                    required
                    className="w-full bg-gray-800/30 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
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
                  rows={6}
                  required
                  className="w-full bg-gray-800/30 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or what you'd like to discuss..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white px-6 py-4 rounded-lg transition-all duration-200 font-medium flex items-center justify-center"
              >
                {state.submitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    Send Message
                    <Send size={20} className="ml-2" />
                  </>
                )}
              </button>

              {/* Success Message */}
              {state.succeeded && (
                <div className="bg-green-600/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
