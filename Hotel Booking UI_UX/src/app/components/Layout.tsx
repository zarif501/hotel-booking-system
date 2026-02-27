import { Outlet, Link, useLocation } from "react-router";
import { Hotel, Home, Bed, Calendar, PlusCircle, LayoutDashboard } from "lucide-react";
import { Button } from "./ui/button";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/rooms", label: "Rooms", icon: Bed },
    { path: "/booking", label: "Booking", icon: Calendar },
    { path: "/add-room", label: "Add Room", icon: PlusCircle },
    { path: "/base", label: "Base", icon: LayoutDashboard },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Hotel className="h-6 w-6" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                HotelHub
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className={isActive ? "bg-accent text-accent-foreground" : ""}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                  <Hotel className="h-5 w-5" />
                </div>
                <span className="font-semibold">HotelHub</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted partner for seamless hotel booking experiences.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-primary">Home</Link></li>
                <li><Link to="/rooms" className="hover:text-primary">Rooms</Link></li>
                <li><Link to="/booking" className="hover:text-primary">Booking</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2026 HotelHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
