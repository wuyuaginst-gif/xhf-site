import { motion } from "framer-motion";
import { Calendar, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";

/* ─────────────────────────────────────────────
   新闻数据
   images 数组：放原图路径，想加多少张加多少张
───────────────────────────────────────────── */
const news = [
  {
    id: 0,
    title: "我公司董事长率领团队参观大数据集团的AI工厂展厅",
    date: "2026/03/12",
    category: "合作动态",
    hot: true,
    description: "2026年3月12日，我公司董事长率领团队参观大数据集团的AI工厂展厅，了解最新AI技术与应用成果，探讨深度合作可能。",
    fullContent: `2026年3月12日，湖北鑫恒福科技有限公司董事长率领核心团队，赴大数据集团AI工厂展厅开展参观交流活动。

此次参观活动中，代表团深入了解了大数据集团在人工智能领域的最新技术成果与产品应用，重点考察了智能视觉识别、大模型推理部署、工业自动化等核心展区。

双方就智慧城市、智慧金融、AI视觉训练等多个业务领域展开深度交流，并就未来合作方向进行了初步探讨，达成多项合作意向。`,
    images: [
      "/news_20260312_1.png",
      "/news_20260312_2.png",
      "/news_20260312_3.png",
      "/news_20260312_4.png",
    ],
  },
  {
    id: 1,
    title: "公司董事长周会新率领团队参观考察湖北人形机器人创新中心",
    date: "2026/01/27",
    category: "合作动态",
    hot: true,
    description: "公司董事长周会新率领销售及技术团队参观考察湖北人形机器人创新中心，与武汉东智科技股份有限公司形成初步合作。",
    fullContent: `2026年1月27日，公司董事长周会新率领销售及技术核心团队，前往湖北人形机器人创新中心开展参观考察活动。

考察期间，代表团参观了人形机器人整机研发、运动控制、感知系统等核心技术展区，与武汉东智科技股份有限公司研发负责人进行了深入技术交流。

双方就 AI 视觉感知、运动规划算法、智能控制系统等方向的合作展开讨论，并就共同推进人形机器人视觉识别模块研发达成初步合作意向。`,
    images: [
      "/news_20260127_1.png",
      "/news_20260127_2.png",
      "/news_20260127_3.png",
      "/news_20260127_4.png",
      "/news_20260127_5.png",
      "/news_20260127_6.png",
      "/news_20260127_7.png",
    ],
  },
  {
    id: 2,
    title: "公司与神农架林区电信开展深度合作交流，共商发展",
    date: "2025/10/28",
    category: "合作动态",
    hot: false,
    description: "公司与神农架林区电信开展深度合作交流，共商发展，双方就相关合作事宜进行了深入探讨，并达成多项合作意向。",
    fullContent: `2025年10月28日，湖北鑫恒福科技有限公司与神农架林区电信公司在神农架举行深度合作交流会议。

会议上，双方围绕智慧林区建设、数字化转型、5G+AI 应用等核心议题展开深入探讨。鑫恒福科技就公司在智慧城市、大数据分析、AI 视觉等领域的解决方案进行了详细介绍。

经过友好协商，双方就智慧林区综合管理平台、生态监测 AI 系统等多个项目达成合作意向，并签署战略合作备忘录。`,
    images: [
      "/news_20251028_1.png",
      "/news_20251028_2.png",
    ],
  },
];

/* 快讯数据 */
const quickNews = [
  { title: "鑫恒福科技荣获武汉市创新型企业称号", date: "2026/03/20" },
  { title: "公司 YOLO 视觉训练平台正式发布 2.0 版本", date: "2026/02/15" },
  { title: "公司与某大型国有银行签署战略合作协议", date: "2026/01/10" },
  { title: "鑫恒福科技获评湖北省优质科技服务商", date: "2025/12/05" },
  { title: "Points OS 积分平台完成重大功能升级", date: "2025/11/18" },
];

/* ─────────────────────────────────────────────
   单条新闻卡片（点击跳转新闻页）
───────────────────────────────────────────── */
function NewsCard({ item, index }: { item: (typeof news)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href="/news" className="block group">
        <div className="bg-white border border-slate-200 rounded hover:border-[#0096D6] hover:shadow-md transition-all duration-300 p-5 flex gap-5">
          {/* 日期色块 */}
          <div className="flex-shrink-0 w-14 flex flex-col items-center justify-center bg-[#0B3D8C] rounded text-white py-3">
            <span className="text-xl font-bold leading-none">{item.date.slice(5, 7)}</span>
            <span className="text-xs opacity-70 mt-0.5">{item.date.slice(0, 4)}</span>
          </div>

          {/* 内容 */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 text-[10px] font-semibold bg-blue-50 text-[#0B3D8C] border border-blue-200 rounded">
                {item.category}
              </span>
              {item.hot && <span className="badge-hot">hot</span>}
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1.5 line-clamp-1 group-hover:text-[#0B3D8C] transition-colors">
              {item.title}
            </h3>
            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* 箭头 */}
          <div className="flex-shrink-0 flex items-center">
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0096D6] group-hover:translate-x-0.5 transition-all" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   主组件
───────────────────────────────────────────── */
export default function NewsSection() {
  return (
    <section className="py-20 bg-[#F5F7FA] relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-[0.04]" />
      <div className="container relative z-10">

        {/* 版块标题 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <div className="flex items-end gap-4 mb-3">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D8C]">新闻中心</h2>
              <span className="text-sm text-[#0096D6] font-semibold tracking-widest uppercase mb-1">
                News Center
              </span>
            </div>
            <div className="w-16 h-1 bg-[#0096D6] rounded-full" />
          </div>
          <Link href="/news">
            <span className="hidden md:inline-flex items-center gap-1 text-sm text-[#0B3D8C] hover:text-[#0096D6] transition-colors font-medium">
              查看更多
              <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>

        {/* 主新闻 + 快讯 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* 左：新闻卡片列表 */}
          <div className="lg:col-span-2 space-y-4">
            {news.map((item, index) => (
              <NewsCard key={item.id} item={item} index={index} />
            ))}

            <div className="md:hidden text-center pt-2">
              <Link href="/news">
                <span className="inline-flex items-center gap-1 text-sm text-[#0B3D8C] font-semibold">
                  查看更多新闻 <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* 右：快讯列表 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-slate-200 rounded overflow-hidden"
          >
            <div className="bg-[#0B3D8C] px-5 py-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0096D6] animate-pulse" />
              <span className="text-white text-sm font-semibold">公司动态</span>
            </div>

            <div className="divide-y divide-slate-50">
              {quickNews.map((item, index) => (
                <Link key={index} href="/news" className="block group">
                  <div className="px-5 py-3.5 hover:bg-blue-50 transition-colors">
                    <p className="text-xs font-medium text-slate-700 group-hover:text-[#0B3D8C] line-clamp-2 mb-1.5 transition-colors">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="px-5 py-3 border-t border-slate-100">
              <Link href="/news">
                <span className="flex items-center justify-center gap-1 text-xs text-[#0096D6] font-semibold hover:text-[#0B3D8C] transition-colors">
                  查看全部新闻 <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
