import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const news = [
  {
    id: 0,
    title: "我公司董事长率领团队参观大数据集团的AI工厂展厅",
    date: "2026年03月12日",
    description: "2026年3月12日，我公司董事长率领团队参观大数据集团的AI工厂展厅，了解最新AI技术与应用成果。",
    category: "合作动态",
  },
  {
    id: 1,
    title: "公司董事长周会新率领销售以及技术团队参观考察湖北人形机器人创新中心",
    date: "2026年01月27日",
    description: "公司董事长周会新率领销售以及技术团队参观考察湖北人形机器人创新中心，与武汉东智科技股份有限公司形成初步合作。",
    category: "合作动态",
  },
  {
    id: 2,
    title: "公司与神农架林区电信开展深度合作交流，共商发展",
    date: "2025年10月28日",
    description: "公司与神农架林区电信开展深度合作交流，共商发展，双方就相关合作事宜进行了深入探讨。",
    category: "合作动态",
  },
];

export default function NewsSection() {
  return (
    <section className="py-20 bg-slate-50/50">
      <div className="container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            <span className="bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">新闻中心</span>
          </h2>
          <p className="text-lg text-slate-500">
            聚焦行业动态，传播最新资讯
          </p>
        </div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              {/* Category badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200">
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-2">
                {item.description}
              </p>

              {/* Date and link */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Link href="/news">
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-blue-200 bg-white shadow-sm text-blue-600 font-semibold hover:bg-blue-50 hover:border-blue-400 transition-all duration-300">
              查看更多新闻
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
