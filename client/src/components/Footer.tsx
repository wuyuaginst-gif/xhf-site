import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-dark relative overflow-hidden">
      {/* 顶部渐变蓝线 */}
      <div className="divider-blue" />

      {/* 背景网格 */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      {/* 主内容区 */}
      <div className="container relative z-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* 公司信息（占2格） */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src={APP_LOGO}
                alt={APP_TITLE}
                className="h-10 w-10 rounded-lg object-cover"
              />
              <div>
                <div className="text-base font-bold text-white">{APP_TITLE}</div>
                <div className="text-[10px] text-[#0096D6] tracking-widest uppercase">Technology Co., Ltd.</div>
              </div>
            </Link>

            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              专业的科技型企业，致力于为政府、金融、公安等领域提供前沿的整体解决方案，深度赋能企业数字化转型与智能化升级。
            </p>

            {/* 联系电话 - 醒目展示 */}
            <div className="bg-white/5 border border-white/10 rounded px-4 py-3">
              <div className="text-xs text-white/50 mb-1">服务热线</div>
              <a href="tel:02787771732" className="text-xl font-bold text-[#0096D6] hover:text-[#00B8F0] transition-colors">
                027-87771732
              </a>
            </div>
          </div>

          {/* 产品服务 */}
          <div>
            <h4>产品服务</h4>
            <ul className="space-y-2">
              {[
                { label: "YOLO 视觉训练平台", href: "/products" },
                { label: "智慧金融平台", href: "/products" },
                { label: "Points OS 积分平台", href: "/products" },
                { label: "智慧城市方案", href: "/products" },
                { label: "大数据分析平台", href: "/products" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 关于我们 */}
          <div>
            <h4>关于我们</h4>
            <ul className="space-y-2">
              {[
                { label: "公司简介", href: "/about" },
                { label: "产品中心", href: "/products" },
                { label: "成功案例", href: "/cases" },
                { label: "新闻动态", href: "/news" },
                { label: "服务支持", href: "/service" },
                { label: "加入我们", href: "/join" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系我们 */}
          <div>
            <h4>联系我们</h4>
            <div className="space-y-3">
              <a
                href="tel:02787771732"
                className="flex items-start gap-2.5 text-sm"
              >
                <Phone className="w-4 h-4 text-[#0096D6] flex-shrink-0 mt-0.5" />
                <span>027-87771732</span>
              </a>
              <a
                href="mailto:hbxhf@hbxhf.com.cn"
                className="flex items-start gap-2.5 text-sm break-all"
              >
                <Mail className="w-4 h-4 text-[#0096D6] flex-shrink-0 mt-0.5" />
                <span>hbxhf@hbxhf.com.cn</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-[#0096D6] flex-shrink-0 mt-0.5" />
                <p>湖北省武汉市东湖高新技术开发区金融港光谷汇金中心8号楼</p>
              </div>
            </div>
          </div>
        </div>

        {/* 底部版权栏 */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {currentYear} {APP_TITLE}. 保留所有权利。
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              隐私政策
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              服务条款
            </a>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-[#0096D6] transition-colors"
            >
              鄂ICP备12009556号-1
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
