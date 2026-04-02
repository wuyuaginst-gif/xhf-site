import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, ChevronDown, ChevronUp, X } from "lucide-react";

/* ─────────────────────────────────────────────
   新闻数据
   images：原图路径数组，想加多少张填多少张
───────────────────────────────────────────── */
const allNews = [
  {
    id: 0,
    title: "我公司董事长率领团队参观大数据集团的AI工厂展厅",
    date: "2026年03月12日",
    category: "合作动态",
    description: "2026年3月12日，我公司董事长率领团队参观大数据集团的AI工厂展厅，了解最新AI技术与应用成果。",
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
    title: "公司董事长周会新率领销售以及技术团队参观考察湖北人形机器人创新中心，与武汉东智科技股份有限公司形成初步合作",
    date: "2026年01月27日",
    category: "合作动态",
    description: "公司董事长周会新率领销售以及技术团队参观考察湖北人形机器人创新中心，与武汉东智科技股份有限公司形成初步合作。",
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
    date: "2025年10月28日",
    category: "合作动态",
    description: "公司与神农架林区电信开展深度合作交流，共商发展，双方就相关合作事宜进行了深入探讨。",
    fullContent: `2025年10月28日，湖北鑫恒福科技有限公司与神农架林区电信公司在神农架举行深度合作交流会议。

会议上，双方围绕智慧林区建设、数字化转型、5G+AI 应用等核心议题展开深入探讨。鑫恒福科技就公司在智慧城市、大数据分析、AI 视觉等领域的解决方案进行了详细介绍。

经过友好协商，双方就智慧林区综合管理平台、生态监测 AI 系统等多个项目达成合作意向，并签署战略合作备忘录。`,
    images: [
      "/news_20251028_1.png",
      "/news_20251028_2.png",
    ],
  },
  {
    id: 3,
    title: "公司董事长带队赴湖北大数据集团政务服务公司交流",
    date: "2025年10月15日",
    category: "合作动态",
    description: "公司董事长带队赴湖北大数据集团政务服务公司交流，探讨双方在政务大数据领域的合作机会。",
    fullContent: `2025年10月15日，公司董事长带队赴湖北大数据集团政务服务公司进行交流访问，双方就政务大数据平台建设、数据共享与应用等议题进行了深入探讨。

湖北大数据集团政务服务公司详细介绍了其在政务数据归集、共享交换、开放利用方面的工作成果，鑫恒福科技结合自身在 AI 分析、数据治理方面的技术积累，共同探讨了未来合作方向。`,
    images: [
      "/news_20251015.jpg",
    ],
  },
  {
    id: 4,
    title: "鑫恒福科技与高校合作建立联合研究中心",
    date: "2021年11月08日",
    category: "合作动态",
    description: "鑫恒福科技与国内知名高校合作建立了区块链技术联合研究中心，推动产学研结合。",
    fullContent: `为了加强基础研究和技术创新，鑫恒福科技与国内顶级高校建立了战略合作关系。

双方将在区块链、人工智能等领域开展深入合作，共同推动技术进步和产业发展，实现产学研深度融合。`,
    images: [],
  },
  {
    id: 5,
    title: "智慧金融平台成功上线，服务数百万用户",
    date: "2021年09月22日",
    category: "产品动态",
    description: "鑫恒福科技自主研发的智慧金融平台正式上线，已为数百万用户提供了高效、安全的金融服务。",
    fullContent: `经过两年多的研发和测试，鑫恒福科技的智慧金融平台于2021年9月正式上线。

平台采用了最先进的云计算和大数据技术，为用户提供了全面的金融解决方案。上线以来，已有数百万用户注册使用，获得了用户的高度评价。`,
    images: [],
  },
  {
    id: 6,
      title: '鑫恒福科技荣获"年度最佳技术创新企业"奖',
    date: "2021年06月10日",
    category: "荣誉奖项",
    description: '在中国信息技术创新大会上，鑫恒福科技因其在区块链和大数据领域的创新成果获得了"年度最佳技术创新企业"奖。',
    fullContent: `鑫恒福科技凭借在云计算、大数据、物联网、人工智能、区块链等领域的持续创新和卓越成就，获得了业界的广泛认可。

这一荣誉充分体现了公司在技术创新方面的领先地位和市场影响力，也是对全体员工努力付出的最好肯定。`,
    images: [],
  },
  {
    id: 7,
    title: "鑫恒福科技、浪潮金融举行商务洽谈交流会",
    date: "2020年12月04日",
    category: "合作动态",
    description: "鑫恒福科技与浪潮金融商务洽谈交流会在鑫恒福科技公司5楼会议室举行。双方就合作方向进行了深入探讨。",
    fullContent: `2020年12月4日，鑫恒福科技与浪潮金融在武汉举行商务洽谈交流会。双方高层领导出席会议，就云计算、大数据、人工智能等领域的合作进行了深入交流。

会议认为，双方在技术积累和市场资源方面具有很强的互补性，有很大的合作潜力，后续将推进具体合作项目的落地。`,
    images: [],
  },
  {
    id: 8,
    title: "鑫恒福收到一封抗疫感谢信│携手抗疫，共克时艰",
    date: "2020年03月20日",
    category: "公司新闻",
    description: "3月20日，鑫恒福公司收到了来自湖北省武汉市武昌区大数据中心的感谢信，感谢公司在疫情期间的技术支持和贡献。",
    fullContent: `在新冠疫情防控的关键时期，鑫恒福科技积极响应国家号召，充分发挥自身技术优势，为武昌区大数据中心提供了强有力的技术支持和服务。

公司的技术团队加班加点，确保了疫情防控数据系统的稳定运行，为疫情防控工作做出了重要贡献。武昌区大数据中心特致感谢信，对公司的无私奉献表示诚挚感谢。`,
    images: [],
  },
  {
    id: 9,
    title: "聚焦中国互联网行业商业报道",
    date: "2020年02月15日",
    category: "行业动态",
    description: "专注互联网信息化技术最新动态，发掘新金融最具影响力的商业讯息，传播新金融核心价值。",
    fullContent: `在数字经济时代，互联网技术正在深刻改变各行各业的发展格局。鑫恒福科技作为行业领先者，始终致力于为客户提供最前沿的技术解决方案。

我们关注行业发展动态，把握市场机遇，持续在云计算、大数据、AI 等领域深耕，为客户创造更大价值。`,
    images: [],
  },
];

/* ─────────────────────────────────────────────
   图片灯箱（点击原图全屏查看）
───────────────────────────────────────────── */
function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
        onClick={onClose}
      >
        <X className="w-7 h-7" />
      </button>
      <img
        src={src}
        alt="原图"
        className="max-w-[95vw] max-h-[90vh] object-contain rounded shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   单条新闻卡片
───────────────────────────────────────────── */
function NewsCard({ item }: { item: (typeof allNews)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  /* 取第一张图作为缩略图 */
  const thumb = item.images[0] ?? null;

  return (
    <>
      <AnimatePresence>
        {lightboxSrc && (
          <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
        )}
      </AnimatePresence>

      <div className="bg-white border border-slate-200 rounded-lg hover:border-[#0096D6] hover:shadow-md transition-all duration-300">
        {/* 摘要行 */}
        <div className="flex flex-col md:flex-row gap-5 p-5">
          {/* 文字内容 */}
          <div className="flex-1 space-y-2.5">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-50 text-[#0B3D8C] border border-blue-200">
                {item.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                {item.date}
              </div>
            </div>

            <h3 className="text-base font-bold text-slate-900 leading-snug">
              {item.title}
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed">
              {item.description}
            </p>

            {/* 阅读全文按钮 */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0096D6] hover:text-[#0B3D8C] transition-colors pt-1"
            >
              {expanded ? (
                <><ChevronUp className="w-4 h-4" />收起</>
              ) : (
                <><ChevronDown className="w-4 h-4" />阅读全文</>
              )}
            </button>
          </div>

          {/* 缩略图（仅有图时显示） */}
          {thumb && (
            <div
              className="hidden md:block flex-shrink-0 w-36 h-28 rounded-lg overflow-hidden border border-slate-100 cursor-zoom-in"
              onClick={() => setLightboxSrc(thumb)}
            >
              <img
                src={thumb}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
        </div>

        {/* 展开区域：正文 + 全部原图 */}
        {expanded && (
          <div className="px-5 pb-6 border-t border-slate-100">
            {/* 正文段落 */}
            <div className="pt-4 mb-5">
              {item.fullContent.trim().split("\n\n").map((para, i) => (
                <p key={i} className="text-sm text-slate-600 leading-relaxed mb-3 last:mb-0">
                  {para.trim()}
                </p>
              ))}
            </div>

            {/* 原图网格 */}
            {item.images.length > 0 && (
              <div
                className={`grid gap-3 ${
                  item.images.length === 1
                    ? "grid-cols-1"
                    : item.images.length === 2
                    ? "grid-cols-2"
                    : "grid-cols-2 md:grid-cols-3"
                }`}
              >
                {item.images.map((src, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded border border-slate-100 cursor-zoom-in group"
                    onClick={() => setLightboxSrc(src)}
                  >
                    <img
                      src={src}
                      alt={`${item.title} 图${i + 1}`}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                      style={{
                        maxHeight: item.images.length === 1 ? "520px" : "280px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs bg-black/50 px-2 py-1 rounded">
                        点击查看原图
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   页面主体
───────────────────────────────────────────── */
export default function News() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navigation />
      <main className="flex-1 pt-16">

        {/* 页头 */}
        <section className="py-16 bg-[#0B3D8C] relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="container relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">新闻中心</h1>
            <p className="text-white/60 text-base">聚焦行业动态，传播最新资讯</p>
            <div className="mt-4 w-12 h-0.5 bg-[#0096D6] mx-auto rounded-full" />
          </div>
        </section>

        {/* 新闻列表 */}
        <section className="py-14 bg-[#F5F7FA]">
          <div className="container max-w-4xl space-y-4">
            {allNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
