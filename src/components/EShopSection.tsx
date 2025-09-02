import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const products = [
  {
    id: 1,
    name: "Premium Template",
    price: "$49",
    originalPrice: "$79",
    description: "Professional website template with modern design",
    category: "Template",
    badge: "Popular"
  },
  {
    id: 2,
    name: "UI Component Kit",
    price: "$29",
    originalPrice: "$49",
    description: "Complete set of React components for rapid development",
    category: "Components",
    badge: "New"
  },
  {
    id: 3,
    name: "Design System",
    price: "$99",
    originalPrice: "$149",
    description: "Comprehensive design system with guidelines and assets",
    category: "Design",
    badge: "Bundle"
  }
];

export function EShopSection() {
  return (
    <section id="eshop" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900">
            Digital <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">eShop</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our collection of premium templates, components, and design systems 
            to accelerate your web development projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-white border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {product.badge}
                  </Badge>
                  <div className="text-3xl">🎨</div>
                </div>
                <CardTitle className="text-gray-900">{product.name}</CardTitle>
                <CardDescription className="text-gray-500">{product.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-2xl text-gray-900">{product.price}</span>
                  <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  <Badge className="bg-green-100 text-green-800 text-xs">Save {Math.round((1 - parseInt(product.price.slice(1)) / parseInt(product.originalPrice.slice(1))) * 100)}%</Badge>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}