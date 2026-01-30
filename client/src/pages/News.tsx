import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";

const allNews = [
  {
    id: 1,
    title: "鑫恒福科技、浪潮金融举行商务洽谈交流会",
    date: "2020年12月04日",
    category: "合作动态",
    description: "鑫恒福科技与浪潮金融商务洽谈交流会在鑫恒福科技公司5楼会议室举行。双方就合作方向进行了深入探讨，探索在金融科技领域的合作机会。",
    content: "2020年12月4日，鑫恒福科技与浪潮金融在武汉举行商务洽谈交流会。双方高层领导出席会议，就云计算、大数据、人工智能等领域的合作进行了深入交流。会议认为，双方在技术积累和市场资源方面具有很强的互补性，有很大的合作潜力。"
  },
  {
    id: 2,
    title: "鑫恒福收到一封抗疫感谢信│携手抗疫，共克时艰",
    date: "2020年03月20日",
    category: "公司新闻",
    description: "3月20日，鑫恒福公司收到了来自湖北省武汉市武昌区大数据中心的感谢信，感谢公司在疫情期间的技术支持和贡献。",
    content: "在新冠疫情防控的关键时期，鑫恒福科技积极响应国家号召，充分发挥自身技术优势，为武昌区大数据中心提供了强有力的技术支持和服务。公司的技术团队加班加点，确保了疫情防控数据系统的稳定运行，为疫情防控工作做出了重要贡献。"
  },
  {
    id: 3,
    title: "聚焦中国互联网行业商业报道",
    date: "2020年02月15日",
    category: "行业动态",
    description: "专注互联网信息化技术最新动态，发掘新金融最具影响力的商业讯息，传播新金融核心价值。",
    content: "在数字经济时代，互联网技术正在深刻改变各行各业的发展格局。鑫恒福科技作为行业领先者，始终致力于为客户提供最前沿的技术解决方案。我们关注行业发展动态，把握市场机遇，为客户创造更大价值。"
  },
  {
    id: 4,
    title: "鑫恒福科技荣获'年度最佳技术创新企业'奖",
    date: "2021年06月10日",
    category: "荣誉奖项",
    description: "在中国信息技术创新大会上，鑫恒福科技因其在区块链和大数据领域的创新成果获得了'年度最佳技术创新企业'奖。",
    content: "鑫恒福科技凭借在云计算、大数据、物联网、人工智能、区块链等领域的持续创新和卓越成就，获得了业界的广泛认可。这一荣誉充分体现了公司在技术创新方面的领先地位和市场影响力。"
  },
  {
    id: 5,
    title: "智慧金融平台成功上线，服务数百万用户",
    date: "2021年09月22日",
    category: "产品动态",
    description: "鑫恒福科技自主研发的智慧金融平台正式上线，已为数百万用户提供了高效、安全的金融服务。",
    content: "经过两年多的研发和测试，鑫恒福科技的智慧金融平台于2021年9月正式上线。平台采用了最先进的云计算和大数据技术，为用户提供了全面的金融解决方案。上线以来，已有数百万用户注册使用，获得了用户的高度评价。"
  },
  {
    id: 6,
    title: "鑫恒福科技与高校合作建立联合研究中心",
    date: "2021年11月08日",
    category: "合作动态",
    description: "鑫恒福科技与国内知名高校合作建立了区块链技术联合研究中心，推动产学研结合。",
    content: "为了加强基础研究和技术创新，鑫恒福科技与国内顶级高校建立了战略合作关系。双方将在区块链、人工智能等领域开展深入合作，共同推动技术进步和产业发展。"
  }
];

export default function News() {
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
                <span className="gradient-text">新闻中心</span>
              </h1>
              <p className="text-lg text-foreground/70">
                聚焦行业动态，传播最新资讯
              </p>
            </div>
          </div>
        </section>

        {/* News list */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="space-y-6">
              {allNews.map((newsItem) => (
                <div key={newsItem.id} className="tech-card group cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Category and date */}
                      <div className="flex items-center gap-4 flex-wrap">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          {newsItem.category}
                        </span>
                        <div className="flex items-center gap-2 text-xs text-foreground/60">
                          <Calendar className="w-4 h-4" />
                          {newsItem.date}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                        {newsItem.title}
                      </h3>

                      {/* Description */}
                      <p className="text-foreground/70 leading-relaxed">
                        {newsItem.description}
                      </p>

                      {/* Read more link */}
                      <div className="flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all pt-2">
                        <span className="text-sm font-medium">阅读全文</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Visual indicator */}
                    <div className="hidden md:flex items-center justify-center w-32 h-32 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex-shrink-0">
                      <div className="text-4xl font-bold text-cyan-400/30">{newsItem.id}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="px-4 py-2 rounded-lg border border-cyan-500/30 text-foreground hover:bg-cyan-500/10 transition-colors">
                上一页
              </button>
              <button className="px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/50">
                1
              </button>
              <button className="px-4 py-2 rounded-lg border border-cyan-500/30 text-foreground hover:bg-cyan-500/10 transition-colors">
                2
              </button>
              <button className="px-4 py-2 rounded-lg border border-cyan-500/30 text-foreground hover:bg-cyan-500/10 transition-colors">
                下一页
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
