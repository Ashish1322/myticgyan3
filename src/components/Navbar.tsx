import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/10">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Mystic Vigyan" className="w-10 h-10" />
          <span className="font-display text-lg font-bold text-primary-foreground">
            Mystic<span className="text-gold">Vigyan</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`text-sm font-medium tracking-wide transition-colors ${
                location.pathname === item.path
                  ? "text-gold"
                  : "text-primary-foreground/80 hover:text-gold"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 bg-gold text-gold-foreground text-sm font-semibold rounded-lg hover:brightness-110 transition-all"
          >
            Book Now
          </Link>
        </div>
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-gold/10 px-6 py-4 space-y-3">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-medium tracking-wide transition-colors ${
                location.pathname === item.path
                  ? "text-gold"
                  : "text-primary-foreground/80 hover:text-gold"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center px-5 py-2 bg-gold text-gold-foreground text-sm font-semibold rounded-lg"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
