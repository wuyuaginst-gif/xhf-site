import { Calendar, ArrowRight } from "lucide-react";

const news = [
  {
    id: 1,
    title: "鑫恒福科技、浪潮金融举行商务洽谈交流会",
    date: "2020年12月04日",
    description: "鑫恒福科技与浪潮金融商务洽谈交流会在鑫恒福科技公司5楼会议室举行。双方就合作方向进行了深入探讨。",
    category: "合作动态",
  },
  {
    id: 2,
    title: "鑫恒福收到一封抗疫感谢信│携手抗疫，共克时艰",
    date: "2020年03月20日",
    description: "3月20日，鑫恒福公司收到了来自湖北省武汉市武昌区大数据中心的感谢信，感谢公司在疫情期间的技术支持。",
    category: "公司新闻",
  },
  {
    id: 3,
    title: "聚焦中国互联网行业商业报道",
    date: "2020年02月15日",
    description: "专注互联网信息化技术最新动态，发掘新金融最具影响力的商业讯息，传播新金融核心价值。",
    category: "行业动态",
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
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-blue-200 bg-white shadow-sm text-blue-600 font-semibold hover:bg-blue-50 hover:border-blue-400 transition-all duration-300">
            查看更多新闻
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
