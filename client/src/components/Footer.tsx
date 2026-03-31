import { Mail, Phone, MapPin, ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-slate-200 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

      <div className="container relative z-10 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src={APP_LOGO}
                alt={APP_TITLE}
                className="h-10 w-auto rounded-xl group-hover:scale-105 transition-transform duration-300 ring-1 ring-slate-200/50"
              />
          <span className="text-lg font-bold font-display bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
                {APP_TITLE}
              </span>
            </Link>
        <p className="text-sm text-slate-500 leading-relaxed">
              专业的科技型企业，致力于为政府、金融、公安等领域提供前沿的整体解决方案，构建数字化未来。
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                // { icon: Github, href: "#", label: "GitHub" },
                // { icon: Linkedin, href: "#", label: "LinkedIn" },
                // { icon: Twitter, href: "#", label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
              className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 hover:shadow-sm hover:text-blue-600 text-slate-600 transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
        <h4 className="font-semibold text-slate-900 font-display">快速链接</h4>
            <ul className="space-y-3">
              {[
                { label: "首页", href: "/" },
                { label: "产品中心", href: "/products" },
                { label: "成功案例", href: "/cases" },
                { label: "新闻动态", href: "/news" },
              ].map((link) => (
                <li key={link.href}>
              <Link href={link.href} className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors group">
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div className="space-y-6">
        <h4 className="font-semibold text-slate-900 font-display">关于我们</h4>
            <ul className="space-y-3">
              {[
                { label: "公司简介", href: "/about" },
                { label: "服务支持", href: "/service" },
                { label: "加入我们", href: "/join" },
                { label: "联系我们", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
              <Link href={link.href} className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors group">
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
        <h4 className="font-semibold text-slate-900 font-display">联系我们</h4>
            <div className="space-y-4">
              <a
                href="tel:02787771732"
            className="flex items-center gap-3 text-sm text-slate-500 hover:text-blue-600 transition-colors group"
              >
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <span>027-87771732</span>
              </a>
              <a
                href="mailto:hbxhf@hbxhf.com.cn"
            className="flex items-center gap-3 text-sm text-slate-500 hover:text-blue-600 transition-colors group"
              >
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <span className="break-all">hbxhf@hbxhf.com.cn</span>
              </a>
          <div className="flex items-start gap-3 text-sm text-slate-500">
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-blue-600" />
                </div>
                <p>湖北省武汉市东湖高新技术开发区金融港光谷汇金中心8号楼</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
    <div className="border-t border-slate-200 py-8">
          {/* Bottom footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
              © {currentYear} {APP_TITLE}. 保留所有权利。
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
            className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
              >
                隐私政策
              </a>
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
              >
                服务条款
              </a>
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
              >
                鄂ICP备12009556号-1
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
