import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { APP_LOGO, APP_TITLE } from "@/const";
import { useScrollDirection } from "@/hooks/useScroll";
import { LANGUAGE_OPTIONS, LANGUAGE_STORAGE_KEY } from "@/i18n";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "首页", href: "/" },
    { label: "产品服务", href: "/products" },
    { label: "客户案例", href: "/cases" },
    { label: "新闻资讯", href: "/news" },
    { label: "关于我们", href: "/about" },
    { label: "服务支持", href: "/service" },
    { label: "加入我们", href: "/join" },
  ];

  return (
    /* 整个导航包裹层 */
    <div className={`fixed top-0 w-full z-50 transition-transform duration-500 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>

      {/* 主导航栏 */}
      <nav className={`w-full transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-slate-200"
          : "bg-white border-b border-slate-100"
      }`}>
        <div className="container flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group flex-shrink-0">
            <img
              src={APP_LOGO}
              alt={APP_TITLE}
              className="h-10 w-10 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <div className="text-base font-bold text-[#0B3D8C] leading-tight">{APP_TITLE}</div>
              <div className="text-[10px] text-slate-400 tracking-widest uppercase">Technology Co., Ltd.</div>
            </div>
          </Link>

          {/* 桌面端主导航 */}
          <div className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={`relative px-4 py-5 text-sm font-medium transition-colors inline-block group ${
                  location === item.href
                    ? "text-[#0B3D8C]"
                    : "text-slate-600 hover:text-[#0B3D8C]"
                }`}>
                  {item.label}
                  {/* 底部蓝色下划线 */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0096D6] transition-transform duration-300 origin-center ${
                    location === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </span>
              </Link>
            ))}
          </div>

          {/* 右侧操作区 */}
          <div className="hidden lg:flex items-center gap-3">
            {/* 立即咨询按钮 */}
            <Link href="/contact">
              <span className="px-5 py-2 text-sm font-semibold text-white rounded bg-[#0B3D8C] hover:bg-[#062D6E] transition-colors">
                立即咨询
              </span>
            </Link>
          </div>

          {/* 手机端菜单按钮 */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded border border-slate-200 hover:border-[#0096D6] transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-[#0B3D8C]" />
            ) : (
              <Menu className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </div>

        {/* 手机端下拉菜单 */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
            <div className="container py-4 flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium border-b border-slate-50 transition-colors ${
                    location === item.href
                      ? "text-[#0B3D8C] bg-blue-50 border-l-2 border-l-[#0096D6]"
                      : "text-slate-600 hover:text-[#0B3D8C] hover:bg-slate-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 pb-2 px-4">
                <Link href="/contact" className="block">
                  <span className="flex items-center justify-center py-2.5 text-sm font-semibold text-white rounded bg-[#0B3D8C] w-full">
                    立即咨询
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
