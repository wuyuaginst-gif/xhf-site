import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";

const allNews = [
  {
    id: 0,
    title: "我公司董事长率领团队参观大数据集团的AI工厂展厅",
    date: "2026年03月12日",
    category: "合作动态",
    description: "2026年3月12日，我公司董事长率领团队参观大数据集团的AI工厂展厅，了解最新AI技术与应用成果。",
    image: "/news_20260312.jpg",
    content: "2026年3月12日，我公司董事长率领团队参观大数据集团的AI工厂展厅，深入了解了大数据集团在AI领域的前沿技术与创新应用成果，双方就AI技术赋能产业发展进行了深入交流。"
  },
  {
    id: 1,
    title: "公司董事长周会新率领销售以及技术团队参观考察湖北人形机器人创新中心，与武汉东智科技股份有限公司形成初步合作",
    date: "2026年01月27日",
    category: "合作动态",
    description: "公司董事长周会新率领销售以及技术团队参观考察湖北人形机器人创新中心，与武汉东智科技股份有限公司形成初步合作。",
    image: "/news_20260127.jpg",
    content: "2026年1月27日，公司董事长周会新率领销售以及技术团队参观考察湖北人形机器人创新中心，与武汉东智科技股份有限公司进行了深入交流，双方在人形机器人技术研发、市场应用等方面形成初步合作意向。"
  },
  {
    id: 2,
    title: "公司与神农架林区电信开展深度合作交流，共商发展",
    date: "2025年10月28日",
    category: "合作动态",
    description: "公司与神农架林区电信开展深度合作交流，共商发展，双方就相关合作事宜进行了深入探讨。",
    image: "/news_20251028.jpg",
    content: "2025年10月28日，公司与神农架林区电信开展深度合作交流，共商发展大计，双方就相关合作领域和模式进行了深入探讨。"
  },
  {
    id: 3,
    title: "公司董事长带队赴湖北大数据集团政务服务公司交流",
    date: "2025年10月15日",
    category: "合作动态",
    description: "公司董事长带队赴湖北大数据集团政务服务公司交流，探讨双方在政务大数据领域的合作机会。",
    image: "/news_20251015.jpg",
    content: "2025年10月15日，公司董事长带队赴湖北大数据集团政务服务公司进行交流访问，双方就政务大数据平台建设、数据共享与应用等议题进行了深入探讨。"
  },
  {
    id: 4,
    title: "鑫恒福科技与高校合作建立联合研究中心",
    date: "2021年11月08日",
    category: "合作动态",
    description: "鑫恒福科技与国内知名高校合作建立了区块链技术联合研究中心，推动产学研结合。",
    content: "为了加强基础研究和技术创新，鑫恒福科技与国内顶级高校建立了战略合作关系。双方将在区块链、人工智能等领域开展深入合作，共同推动技术进步和产业发展。"
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
    title: "鑫恒福科技荣获'年度最佳技术创新企业'奖",
    date: "2021年06月10日",
    category: "荣誉奖项",
    description: "在中国信息技术创新大会上，鑫恒福科技因其在区块链和大数据领域的创新成果获得了'年度最佳技术创新企业'奖。",
    content: "鑫恒福科技凭借在云计算、大数据、物联网、人工智能、区块链等领域的持续创新和卓越成就，获得了业界的广泛认可。这一荣誉充分体现了公司在技术创新方面的领先地位和市场影响力。"
  },
  {
    id: 7,
    title: "鑫恒福科技、浪潮金融举行商务洽谈交流会",
    date: "2020年12月04日",
    category: "合作动态",
    description: "鑫恒福科技与浪潮金融商务洽谈交流会在鑫恒福科技公司5楼会议室举行。双方就合作方向进行了深入探讨，探索在金融科技领域的合作机会。",
    content: "2020年12月4日，鑫恒福科技与浪潮金融在武汉举行商务洽谈交流会。双方高层领导出席会议，就云计算、大数据、人工智能等领域的合作进行了深入交流。会议认为，双方在技术积累和市场资源方面具有很强的互补性，有很大的合作潜力。"
  },
  {
    id: 8,
    title: "鑫恒福收到一封抗疫感谢信│携手抗疫，共克时艰",
    date: "2020年03月20日",
    category: "公司新闻",
    description: "3月20日，鑫恒福公司收到了来自湖北省武汉市武昌区大数据中心的感谢信，感谢公司在疫情期间的技术支持和贡献。",
    content: "在新冠疫情防控的关键时期，鑫恒福科技积极响应国家号召，充分发挥自身技术优势，为武昌区大数据中心提供了强有力的技术支持和服务。公司的技术团队加班加点，确保了疫情防控数据系统的稳定运行，为疫情防控工作做出了重要贡献。"
  },
  {
    id: 9,
    title: "聚焦中国互联网行业商业报道",
    date: "2020年02月15日",
    category: "行业动态",
    description: "专注互联网信息化技术最新动态，发掘新金融最具影响力的商业讯息，传播新金融核心价值。",
    content: "在数字经济时代，互联网技术正在深刻改变各行各业的发展格局。鑫恒福科技作为行业领先者，始终致力于为客户提供最前沿的技术解决方案。我们关注行业发展动态，把握市场机遇，为客户创造更大价值。"
   }
];

export default function News() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navigation />
      <main className="flex-1 pt-20">
        {/* Hero section */}
        <section className="relative py-20 overflow-hidden section-3d bg-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="gradient-text">新闻中心</span>
              </h1>
              <p className="text-lg text-slate-600">
                聚焦行业动态，传播最新资讯
              </p>
            </div>
          </div>
        </section>

        {/* News list */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="space-y-6">
              {allNews.map((newsItem) => (
                <div key={newsItem.id} className="tech-card group cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Category and date */}
                      <div className="flex items-center gap-4 flex-wrap">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                          {newsItem.category}
                        </span>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Calendar className="w-4 h-4" />
                          {newsItem.date}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {newsItem.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed">
                        {newsItem.description}
                      </p>

                      {/* Read more link */}
                      <div className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all pt-2">
                        <span className="text-sm font-medium">阅读全文</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Image or visual indicator */}
                    <div className="hidden md:flex items-center justify-center w-32 h-32 rounded-lg bg-gradient-to-br from-blue-50 to-sky-50 flex-shrink-0 border border-blue-100 overflow-hidden">
                      {newsItem.image ? (
                        <img src={newsItem.image} alt={newsItem.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-4xl font-bold text-blue-200">{newsItem.id}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
