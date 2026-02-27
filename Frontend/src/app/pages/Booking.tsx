import { useState } from "react";
import { Calendar, Users, CreditCard, CheckCircle, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";

export function Booking() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    roomType: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const rooms = [
    { id: "standard", name: "Standard Room", price: 149 },
    { id: "executive", name: "Executive Room", price: 199 },
    { id: "deluxe", name: "Deluxe Suite", price: 299 },
    { id: "premium", name: "Premium Suite", price: 399 },
  ];

  const calculateTotal = () => {
    const room = rooms.find(r => r.id === bookingData.roomType);
    if (!room || !bookingData.checkIn || !bookingData.checkOut) return 0;
    
    const days = Math.ceil(
      (new Date(bookingData.checkOut).getTime() - new Date(bookingData.checkIn).getTime()) / 
      (1000 * 60 * 60 * 24)
    );
    return room.price * Math.max(days, 1);
  };

  const total = calculateTotal();
  const tax = total * 0.1;
  const grandTotal = total + tax;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Stay</h1>
          <p className="text-xl text-white/90">
            Complete your reservation in just a few steps
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {step > s ? <CheckCircle className="h-5 w-5" /> : s}
                  </div>
                  <span className={`hidden md:block ${step >= s ? "text-foreground" : "text-muted-foreground"}`}>
                    {s === 1 ? "Room Details" : s === 2 ? "Guest Info" : "Payment"}
                  </span>
                </div>
                {s < 3 && <div className={`hidden md:block w-20 h-0.5 ${step > s ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {step === 1 && <><Building className="h-5 w-5" /> Room Details</>}
                    {step === 2 && <><Users className="h-5 w-5" /> Guest Information</>}
                    {step === 3 && <><CreditCard className="h-5 w-5" /> Payment Details</>}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Step 1: Room Details */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Room Type</Label>
                        <Select value={bookingData.roomType} onValueChange={(value) => handleInputChange("roomType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select room type" />
                          </SelectTrigger>
                          <SelectContent>
                            {rooms.map((room) => (
                              <SelectItem key={room.id} value={room.id}>
                                {room.name} - ${room.price}/night
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Check-in Date</Label>
                          <Input
                            type="date"
                            value={bookingData.checkIn}
                            onChange={(e) => handleInputChange("checkIn", e.target.value)}
                            min={new Date().toISOString().split("T")[0]}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Check-out Date</Label>
                          <Input
                            type="date"
                            value={bookingData.checkOut}
                            onChange={(e) => handleInputChange("checkOut", e.target.value)}
                            min={bookingData.checkIn || new Date().toISOString().split("T")[0]}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Number of Guests</Label>
                        <Input
                          type="number"
                          placeholder="2"
                          min="1"
                          max="4"
                          value={bookingData.guests}
                          onChange={(e) => handleInputChange("guests", e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Guest Info */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>First Name</Label>
                          <Input
                            placeholder="John"
                            value={bookingData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Last Name</Label>
                          <Input
                            placeholder="Doe"
                            value={bookingData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Email Address</Label>
                        <Input
                          type="email"
                          placeholder="john.doe@example.com"
                          value={bookingData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Phone Number</Label>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={bookingData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Payment */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Card Number</Label>
                        <Input
                          placeholder="1234 5678 9012 3456"
                          value={bookingData.cardNumber}
                          onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Expiry Date</Label>
                          <Input
                            placeholder="MM/YY"
                            value={bookingData.expiryDate}
                            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>CVV</Label>
                          <Input
                            placeholder="123"
                            type="password"
                            maxLength={3}
                            value={bookingData.cvv}
                            onChange={(e) => handleInputChange("cvv", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="bg-accent/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          Your payment information is encrypted and secure. We never store your full card details.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex gap-4 pt-4">
                    {step > 1 && (
                      <Button variant="outline" onClick={() => setStep(step - 1)} className="flex-1">
                        Previous
                      </Button>
                    )}
                    {step < 3 ? (
                      <Button onClick={() => setStep(step + 1)} className="flex-1">
                        Next Step
                      </Button>
                    ) : (
                      <Button className="flex-1">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Confirm Booking
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {bookingData.roomType && (
                    <>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Room</p>
                        <p className="font-semibold">
                          {rooms.find(r => r.id === bookingData.roomType)?.name}
                        </p>
                      </div>
                      <Separator />
                    </>
                  )}

                  {bookingData.checkIn && bookingData.checkOut && (
                    <>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Check-in:</span>
                          <span className="font-medium">{new Date(bookingData.checkIn).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Check-out:</span>
                          <span className="font-medium">{new Date(bookingData.checkOut).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Separator />
                    </>
                  )}

                  {bookingData.guests && (
                    <>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Guests</span>
                        <span className="font-medium">{bookingData.guests}</span>
                      </div>
                      <Separator />
                    </>
                  )}

                  {total > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">${total.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Tax (10%)</span>
                        <span className="font-medium">${tax.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Total</span>
                        <span className="text-2xl font-bold text-primary">
                          ${grandTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  )}

                  {!bookingData.roomType && (
                    <div className="text-center py-8">
                      <p className="text-sm text-muted-foreground">
                        Select a room to see pricing details
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
