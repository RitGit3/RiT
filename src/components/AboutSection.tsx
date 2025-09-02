import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const features = [
  {
    icon: "🎯",
    title: "Mission Focused",
    description: "We're dedicated to creating exceptional digital experiences that drive results."
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Optimized for performance with cutting-edge technologies and best practices."
  },
  {
    icon: "🔒",
    title: "Secure & Reliable",
    description: "Built with security in mind, ensuring your data and users are always protected."
  },
  {
    icon: "🌟",
    title: "User Experience",
    description: "Every interaction is crafted to provide intuitive and delightful user experiences."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ModernWeb</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about creating modern, scalable web solutions that help businesses 
            thrive in the digital landscape. Our team combines creativity with technical expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}