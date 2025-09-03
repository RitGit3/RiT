import { useForm, ValidationError } from '@formspree/react';

import { Mail, MapPin, Github, Linkedin, Youtube, Instagram, MessageCircle } from "lucide-react";

export function MinimalContact() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@Space00123' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Discord', icon: MessageCircle, href: '#' },
  ];
  
  const [state, handleSubmit] = useForm("xblazgww");

  return (
    <section id="contact" className="py-32 bg-gray-800/50">
      <div className="container-narrow px-6 mx-auto text-center">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-caption text-purple-400 mb-4 block">Contact</span>
          <h2 className="text-heading-1 text-white mb-6">
            Let's build something great together
          </h2>
          <p className="text-body-large text-gray-300">
            Ready to start your project? I'd love to hear about your ideas and help bring them to life.
          </p>
        </div>

        {/* Contact Info */}
        <div className="card p-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <Mail size={20} className="text-purple-400 mr-4" />
              <span className="text-body text-white">theariththeman@gmail.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin size={20} className="text-purple-400 mr-4" />
              <span className="text-body text-white">Phnom Penh, Cambodia</span>
            </div>
          </div>
        </div>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-12 space-y-4">
  {state.succeeded && (
    <p className="text-green-400">Thanks for reaching out!</p>
  )}
  <div>
    <label htmlFor="email" className="block text-white mb-2">
      Email Address
    </label>
    <input
      id="email"
      type="email"
      name="email"
      className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
  </div>
  <div>
    <label htmlFor="message" className="block text-white mb-2">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={5}
      className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
    />
    <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
    />
  </div>
  <button 
    type="submit" 
    disabled={state.submitting}
    className="btn-primary w-full"
  >
    Submit
  </button>
</form>


        {/* Social Links */}
        <div>
          <p className="text-body-small text-gray-400 mb-6">Follow me on</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                title={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
