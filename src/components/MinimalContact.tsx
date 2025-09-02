import { Mail, MapPin, Github, Linkedin, Youtube, Instagram, MessageCircle } from "lucide-react";

export function MinimalContact() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Discord', icon: MessageCircle, href: '#' },
  ];

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
              <span className="text-body text-white">contact@rit-portfolio.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin size={20} className="text-purple-400 mr-4" />
              <span className="text-body text-white">Phnom Penh, Cambodia</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="btn-primary">
            Start Your Project
          </button>
          <button className="btn-secondary">
            Schedule a Call
          </button>
        </div>

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