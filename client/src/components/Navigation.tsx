import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Globe } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { APP_LOGO, APP_TITLE } from "@/const";
import { useScrollDirection } from "@/hooks/useScroll";
import { LANGUAGE_OPTIONS, LANGUAGE_STORAGE_KEY } from "@/i18n";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const [isVisible, setIsVisible] = useState(true);
  const [location] = useLocation();
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language as "zh-CN" | "en-US";
  const languageLabel = LANGUAGE_OPTIONS.find(option => option.code === currentLanguage)?.labelKey ?? "nav.zh";

  const handleLanguageChange = (value: string) => {
    if (value !== "zh-CN" && value !== "en-US") return;
    i18n.changeLanguage(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, value);
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = value;
    }
  };

  useEffect(() => {
    if (scrollDirection === "up") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollDirection]);

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.products"), href: "/products" },
    { label: t("nav.cases"), href: "/cases" },
    { label: t("nav.news"), href: "/news" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.service"), href: "/service" },
    { label: t("nav.join"), href: "/join" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-transform duration-500 ${
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
              className="h-9 w-9 rounded-xl object-cover ring-1 ring-blue-500/30 group-hover:ring-blue-400/60 transition-all duration-300"
            />
          </div>
          <span className="text-lg font-bold font-display hidden sm:inline bg-gradient-to-r from-slate-900 via-blue-800 to-blue-600 bg-clip-text text-transparent">
            {APP_TITLE}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${location === item.href ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Language dropdown */}
        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50 transition-all text-sm font-semibold">
                <Globe className="w-4 h-4" />
                {t(languageLabel)}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuLabel>{t("nav.language")}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={currentLanguage} onValueChange={handleLanguageChange}>
                {LANGUAGE_OPTIONS.map((option) => (
                  <DropdownMenuRadioItem key={option.code} value={option.code}>
                    {t(option.labelKey)}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group"
          aria-label="Toggle menu"
        >
          {isOpen ? (
          <X className="w-5 h-5 text-blue-600" />
          ) : (
          <Menu className="w-5 h-5 text-slate-800 group-hover:text-blue-600 transition-colors" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200">
          <div className="container py-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  location === item.href
                    ? "bg-gradient-to-r from-blue-50 to-sky-50 text-blue-700 border border-blue-200"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Sparkles className="w-4 h-4 opacity-60" />
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50 transition-all text-sm font-semibold">
                    <Globe className="w-4 h-4" />
                    {t(languageLabel)}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-40">
                  <DropdownMenuLabel>{t("nav.language")}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={currentLanguage} onValueChange={handleLanguageChange}>
                    {LANGUAGE_OPTIONS.map((option) => (
                      <DropdownMenuRadioItem key={option.code} value={option.code}>
                        {t(option.labelKey)}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
