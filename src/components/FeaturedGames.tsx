import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

const games = [
  {
    id: 1,
    title: "Cyber Nexus 2077",
    genre: "Sci-Fi RPG",
    rating: "4.8",
    players: "2.5M",
    description: "An immersive cyberpunk RPG with stunning visuals and deep storyline.",
    status: "New Release"
  },
  {
    id: 2,
    title: "Dragon Realm Online",
    genre: "MMORPG",
    rating: "4.6",
    players: "5.2M",
    description: "Epic fantasy MMORPG with massive multiplayer battles.",
    status: "Popular"
  },
  {
    id: 3,
    title: "Space Warriors",
    genre: "Action",
    rating: "4.7",
    players: "3.8M",
    description: "Fast-paced space combat with strategic elements.",
    status: "Trending"
  }
];

export function FeaturedGames() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Games</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the most popular and exciting games in our collection
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Card key={game.id} className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-purple-600 text-white">
                    {game.status}
                  </Badge>
                  <div className="text-4xl">🎯</div>
                </div>
                <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                  {game.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {game.genre}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  {game.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-white">{game.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">👥</span>
                    <span className="text-gray-300">{game.players}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0">
                  Play Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}