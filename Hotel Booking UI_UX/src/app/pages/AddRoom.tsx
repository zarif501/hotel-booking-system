import { useState } from "react";
import { Upload, Plus, X, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";

export function AddRoom() {
  const [amenities, setAmenities] = useState<string[]>([]);
  const [currentAmenity, setCurrentAmenity] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const addAmenity = () => {
    if (currentAmenity.trim() && !amenities.includes(currentAmenity.trim())) {
      setAmenities([...amenities, currentAmenity.trim()]);
      setCurrentAmenity("");
    }
  };

  const removeAmenity = (amenity: string) => {
    setAmenities(amenities.filter(a => a !== amenity));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Add New Room</h1>
          <p className="text-xl text-white/90">
            Create a new room listing for your hotel
          </p>
        </div>
      </section>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-24 right-4 z-50 animate-in slide-in-from-right">
          <Card className="border-green-500 bg-green-50">
            <CardContent className="p-4 flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <p className="text-green-900 font-medium">Room added successfully!</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Room Name</Label>
                      <Input placeholder="e.g., Deluxe Suite" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Room Type</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="executive">Executive</SelectItem>
                          <SelectItem value="suite">Suite</SelectItem>
                          <SelectItem value="penthouse">Penthouse</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      placeholder="Describe the room features and amenities..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Price per Night ($)</Label>
                      <Input type="number" placeholder="199" min="0" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Room Size (m²)</Label>
                      <Input type="number" placeholder="35" min="0" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Max Capacity</Label>
                      <Input type="number" placeholder="2" min="1" max="10" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Number of Beds</Label>
                      <Input type="number" placeholder="1" min="1" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Bed Type</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select bed type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="double">Double</SelectItem>
                          <SelectItem value="queen">Queen</SelectItem>
                          <SelectItem value="king">King</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card>
                <CardHeader>
                  <CardTitle>Amenities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add amenity (e.g., WiFi, AC, TV)"
                      value={currentAmenity}
                      onChange={(e) => setCurrentAmenity(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addAmenity())}
                    />
                    <Button type="button" onClick={addAmenity}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>

                  {amenities.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {amenities.map((amenity) => (
                        <Badge key={amenity} variant="secondary" className="gap-2">
                          {amenity}
                          <button
                            type="button"
                            onClick={() => removeAmenity(amenity)}
                            className="hover:bg-destructive/20 rounded-full p-0.5"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}

                  {amenities.length === 0 && (
                    <p className="text-sm text-muted-foreground">
                      No amenities added yet. Add some to make your room more attractive!
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Images */}
              <Card>
                <CardHeader>
                  <CardTitle>Room Images</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PNG, JPG or WebP (max. 5MB each)
                    </p>
                    <Input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      multiple
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Upload at least 3 high-quality images of the room
                  </p>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card>
                <CardHeader>
                  <CardTitle>Availability Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Available From</Label>
                      <Input type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Room Status</Label>
                      <Select defaultValue="available">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="available">Available</SelectItem>
                          <SelectItem value="maintenance">Under Maintenance</SelectItem>
                          <SelectItem value="booked">Booked</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Room Number</Label>
                    <Input placeholder="e.g., 301" required />
                  </div>

                  <div className="space-y-2">
                    <Label>Floor</Label>
                    <Input type="number" placeholder="3" min="0" required />
                  </div>
                </CardContent>
              </Card>

              {/* Submit Buttons */}
              <div className="flex gap-4">
                <Button type="button" variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Room
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
