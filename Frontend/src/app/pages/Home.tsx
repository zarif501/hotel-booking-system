import { Link } from "react-router";
import { Search, Star, MapPin, Calendar, Users, Wifi, Coffee, Utensils, Dumbbell } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const features = [
    { icon: Wifi, title: "Free WiFi", description: "High-speed internet" },
    { icon: Coffee, title: "Coffee Bar", description: "Premium coffee" },
    { icon: Utensils, title: "Restaurant", description: "Fine dining" },
    { icon: Dumbbell, title: "Fitness Center", description: "24/7 gym access" },
  ];

  const topRooms = [
    {
      id: 1,
      name: "Deluxe Suite",
      price: 299,
      image: "https://images.unsplash.com/photo-1662841540530-2f04bb3291e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxOTAzNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      beds: 2,
    },
    {
      id: 2,
      name: "Executive Room",
      price: 199,
      image: "https://images.unsplash.com/photo-1725623831897-fb009acfe742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzcxODkwNDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      beds: 1,
    },
    {
      id: 3,
      name: "Standard Room",
      price: 149,
      image: "https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMHJvb20lMjBiZWR8ZW58MXx8fHwxNzcxODY4MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
      beds: 1,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1720540244592-b4124532b318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc3MTg0NjQyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury Hotel Lobby"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discover Your Perfect Stay
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Experience luxury and comfort in our carefully curated hotel rooms
            </p>
            
            {/* Search Box */}
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-foreground flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      Location
                    </label>
                    <Input placeholder="Where are you going?" className="bg-input-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      Check-in / Check-out
                    </label>
                    <Input type="date" className="bg-input-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-foreground flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      Guests
                    </label>
                    <Input type="number" placeholder="2" className="bg-input-background" />
                  </div>
                </div>
                <Button className="w-full mt-4" size="lg">
                  <Search className="h-4 w-4 mr-2" />
                  Search Rooms
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">World-Class Amenities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enjoy premium facilities and services designed for your comfort
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Rooms</h2>
              <p className="text-muted-foreground">Our most popular accommodations</p>
            </div>
            <Link to="/rooms">
              <Button variant="outline">View All Rooms</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    ${room.price}/night
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3>{room.name}</h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-semibold text-foreground">{room.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {room.beds} {room.beds === 1 ? "Bed" : "Beds"} • City View • 35 m²
                  </p>
                  <Link to="/booking">
                    <Button className="w-full">Book Now</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of satisfied guests who have experienced our exceptional hospitality
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/rooms">
              <Button size="lg" variant="secondary">
                Browse Rooms
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
