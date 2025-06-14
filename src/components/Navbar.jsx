import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-md" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold flex items-center rounded-xl px-4 py-2 transition duration-300 hover:shadow-[0_0_20px_4px_rgba(139,92,246,0.8)] hover:scale-105"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-primary text-foreground">Suvasthikan</span>{" "}
            Portfolio
          </span>
        </a>


        {/* Desktop nav */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 transition-all duration-300 px-4 py-2 rounded-md hover:text-primary hover:bg-primary/10 hover:shadow-[0_4px_20px_rgba(139,92,246,0.6)] dark:hover:shadow-[0_4px_20px_rgba(167,139,250,0.8)]"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile nav */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-6 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/80 transition-all duration-300 px-6 py-2 rounded-md hover:text-primary hover:bg-primary/10 hover:shadow-[0_4px_20px_rgba(139,92,246,0.6)] dark:hover:shadow-[0_4px_20px_rgba(167,139,250,0.8)]"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
