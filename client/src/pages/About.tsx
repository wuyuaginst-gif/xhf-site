import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, Users, Zap, Target } from "lucide-react";

const timeline = [
  {
    year: "2008",
    title: "公司成立",
    description: "湖北鑫恒福科技发展有限公司正式成立，致力于计算机信息系统集成和智慧金融平台开发。"
  },
  {
    year: "2012",
    title: "技术突破",
    description: "在云计算和大数据领域取得重要技术突破，获得多项自主知识产权。"
  },
  {
    year: "2016",
    title: "业务拓展",
    description: "成功拓展到公安、城市管理等领域，为多个省市提供信息化解决方案。"
  },
  {
    year: "2020",
    title: "创新发展",
    description: "在区块链、人工智能等前沿技术领域取得创新成果，推出多个行业领先产品。"
  }
];

const values = [
  {
    icon: Target,
    title: "创新驱动",
    description: "坚持技术创新，不断推出行业领先的产品和解决方案"
  },
  {
    icon: Users,
    title: "客户至上",
    description: "以客户需求为中心，提供专业的行业应用和全方位服务"
  },
  {
    icon: Zap,
    title: "卓越执行",
    description: "高效的执行能力，确保项目按时保质完成"
  },
  {
    icon: CheckCircle2,
    title: "可持续发展",
    description: "致力于构建健康可持续的产业生态体系"
  }
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1 pt-20">
        {/* Hero section */}
        <section className="relative py-20 overflow-hidden gradient-tech">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="gradient-text">关于鑫恒福</span>
              </h1>
              <p className="text-lg text-foreground/70">
                专业的科技型企业，致力于为各行业提供前沿的整体解决方案
              </p>
            </div>
          </div>
        </section>

        {/* Company overview */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                湖北鑫恒福科技发展有限公司是一家从事计算机信息系统集成、智慧金融互联网平台等自主研发、生产、销售、运营及服务于一体的科技型企业。
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                公司致力于向客户提供完整的解决方案、专业的行业应用、及时的全方位服务，将紧跟世界主流先进技术演进方向，不断开拓创新，实现成为国内一流、世界领先的IT服务提供商的目标。
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                目前公司以云计算、大数据、物联网、人工智能、区块链等为代表的信息技术，与政府、金融、公安、医疗、交通业务的紧密结合，立足打造科技创新服务品牌，促进科技创新生态体系的构建，大力推动产业健康可持续发展。
              </p>
            </div>
          </div>
        </section>

        {/* Core values */}
        <section className="py-20 bg-slate-900/50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="gradient-text">核心价值观</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div key={idx} className="tech-card text-center">
                    <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-foreground/70 text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="gradient-text">发展历程</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-cyan-400 mt-2"></div>
                      {idx < timeline.length - 1 && (
                        <div className="w-1 h-20 bg-gradient-to-b from-cyan-400 to-cyan-400/20 mt-2"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-8">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-slate-900/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold gradient-text mb-2">15+</div>
                <p className="text-foreground/70">年行业经验</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold gradient-text mb-2">500+</div>
                <p className="text-foreground/70">成功案例</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold gradient-text mb-2">1000+</div>
                <p className="text-foreground/70">服务客户</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold gradient-text mb-2">100+</div>
                <p className="text-foreground/70">技术团队</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
