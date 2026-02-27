import { useState } from "react";
import { Link } from "react-router";
import { Star, Users, Maximize, Wifi, Tv, Wind, CheckCircle2, Filter } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export function Rooms() {
  const [sortBy, setSortBy] = useState("recommended");
  const [filterType, setFilterType] = useState("all");

  const rooms = [
    {
      id: 1,
      name: "Deluxe Suite",
      type: "suite",
      price: 299,
      image: "https://images.unsplash.com/photo-1662841540530-2f04bb3291e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxOTAzNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      reviews: 234,
      capacity: 4,
      size: 55,
      beds: 2,
      available: true,
      amenities: ["WiFi", "AC", "TV", "Mini Bar", "Balcony"],
    },
    {
      id: 2,
      name: "Executive Room",
      type: "executive",
      price: 199,
      image: "https://images.unsplash.com/photo-1725623831897-fb009acfe742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzcxODkwNDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      reviews: 189,
      capacity: 2,
      size: 40,
      beds: 1,
      available: true,
      amenities: ["WiFi", "AC", "TV", "Work Desk"],
    },
    {
      id: 3,
      name: "Standard Room",
      type: "standard",
      price: 149,
      image: "https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMHJvb20lMjBiZWR8ZW58MXx8fHwxNzcxODY4MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
      reviews: 156,
      capacity: 2,
      size: 35,
      beds: 1,
      available: true,
      amenities: ["WiFi", "AC", "TV"],
    },
    {
      id: 4,
      name: "Premium Suite",
      type: "suite",
      price: 399,
      image: "https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWx1eGUlMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzcxOTI0MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5.0,
      reviews: 98,
      capacity: 4,
      size: 65,
      beds: 2,
      available: false,
      amenities: ["WiFi", "AC", "TV", "Mini Bar", "Balcony", "Jacuzzi"],
    },
    {
      id: 5,
      name: "Pool View Suite",
      type: "suite",
      price: 349,
      image: "https://images.unsplash.com/photo-1626258607001-88235bc4aefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjB2aWV3fGVufDF8fHx8MTc3MTkxNDcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      reviews: 187,
      capacity: 3,
      size: 50,
      beds: 2,
      available: true,
      amenities: ["WiFi", "AC", "TV", "Pool View", "Balcony"],
    },
    {
      id: 6,
      name: "Business Executive",
      type: "executive",
      price: 229,
      image: "https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMHJvb20lMjBiZWR8ZW58MXx8fHwxNzcxODY4MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      reviews: 145,
      capacity: 2,
      size: 42,
      beds: 1,
      available: true,
      amenities: ["WiFi", "AC", "TV", "Work Desk", "Meeting Space"],
    },
  ];

  const filteredRooms = rooms.filter(room => 
    filterType === "all" || room.type === filterType
  );

  const sortedRooms = [...filteredRooms].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Rooms</h1>
          <p className="text-xl text-white/90">
            Discover the perfect room for your stay
          </p>
        </div>
      </section>

      {/* Filters & Sort */}
      <section className="bg-card border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {sortedRooms.length} rooms available
              </span>
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Room Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="executive">Executive</SelectItem>
                  <SelectItem value="suite">Suite</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sortedRooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative md:w-1/2 h-64 md:h-auto">
                    <ImageWithFallback
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                    {!room.available && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <Badge variant="destructive" className="text-lg px-4 py-2">
                          Not Available
                        </Badge>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground capitalize">
                        {room.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl">{room.name}</h3>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="text-sm font-semibold text-foreground">
                            {room.rating}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({room.reviews})
                          </span>
                        </div>
                      </div>

                      {/* Room Details */}
                      <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{room.capacity} Guests</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Maximize className="h-4 w-4 text-primary" />
                          <span>{room.size} m²</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>{room.beds} Bed{room.beds > 1 ? "s" : ""}</span>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {room.amenities.slice(0, 4).map((amenity, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                        {room.amenities.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{room.amenities.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="text-sm text-muted-foreground">Starting from</p>
                        <p className="text-2xl font-bold text-primary">
                          ${room.price}
                          <span className="text-sm font-normal text-muted-foreground">/night</span>
                        </p>
                      </div>
                      <Link to="/booking">
                        <Button disabled={!room.available}>
                          {room.available ? "Book Now" : "Unavailable"}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
