import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Link, useLocation } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";
import { useScrollDirection } from "@/hooks/useScroll";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const [isVisible, setIsVisible] = useState(true);
  const [location] = useLocation();

  useEffect(() => {
    if (scrollDirection === "up") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollDirection]);

  const navItems = [
    { label: "首页", href: "/" },
    { label: "产品", href: "/products" },
    { label: "案例", href: "/cases" },
    { label: "新闻", href: "/news" },
    { label: "关于", href: "/about" },
    { label: "服务", href: "/service" },
    { label: "加入", href: "/join" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 nav-glass transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="relative">
            <img
              src={APP_LOGO}
              alt={APP_TITLE}
              className="h-9 w-9 rounded-lg object-cover ring-1 ring-cyan-500/30 group-hover:ring-cyan-400/60 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-lg font-bold font-display hidden sm:inline bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            {APP_TITLE}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span className={`nav-link ${location === item.href ? 'active' : ''}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className="btn-neumorphic-primary px-6 py-2 text-sm font-semibold rounded-xl">
            立即体验
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-cyan-400" />
          ) : (
            <Menu className="w-5 h-5 text-foreground group-hover:text-cyan-400 transition-colors" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-strong border-t border-white/10">
          <div className="container py-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  location === item.href
                    ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30"
                    : "text-foreground/70 hover:text-cyan-400 hover:bg-white/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Sparkles className="w-4 h-4 opacity-60" />
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10">
              <button className="btn-neumorphic-primary w-full py-3 rounded-xl text-sm font-semibold">
                立即体验
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
