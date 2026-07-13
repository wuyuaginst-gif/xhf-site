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
    id: 12,
    title: "湖北鑫恒福科技发展有限公司董事长一行赴山东镓数智能科技有限公司考察交流",
    date: "2026年07月13日",
    category: "合作动态",
    description:
      "2026年7月，鑫恒福科技董事长率公司高层一行赴山东镓数智能科技有限公司考察交流，双方围绕氮化镓单晶衬底材料、核心生长装备及产业链协同等议题深入洽谈，并就建立长期战略合作关系达成共识。",
    fullContent: `2026年7月，湖北鑫恒福科技发展有限公司（以下简称"鑫恒福科技"）董事长率公司高层一行，赴山东镓数智能科技有限公司（以下简称"山东镓数"）进行实地考察与商务洽谈。双方围绕氮化镓（GaN）单晶衬底材料、核心生长装备及产业链协同等议题进行了深入交流，并就建立长期战略合作关系达成共识。此次考察标志着鑫恒福科技在业务转型与产业链布局方面迈出了实质性步伐。

鑫恒福科技成立于2005年，总部位于武汉东湖新技术开发区，是一家集信息系统集成服务、智慧金融解决方案及人工智能软件开发于一体的高新技术企业，注册资本5000万元，系湖北省专精特新中小企业及科技型中小企业。公司长期服务于政府、金融、医疗、交通等行业客户，在云计算、大数据、物联网等领域积累了丰富的技术实力与项目经验。

近年来，第三代半导体产业迎来战略发展窗口期。氮化镓作为第三代半导体材料的典型代表，在光电转换效率、击穿电压、热导率及抗辐射能力等方面优势突出，被公认为未来半导体领域的主导材料之一。为把握产业机遇、实现转型升级，鑫恒福科技将第三代半导体材料及核心装备领域作为战略布局的重要方向，主动对接行业优质资源，积极推进产业链延伸。

考察期间，鑫恒福科技董事长一行参观了山东镓数氮化镓单晶衬底项目园区及生产车间。该项目坐落于临沂电创产业园，是集氮化镓单晶衬底材料研发、生产及核心装备制造于一体的战略性新兴产业项目。项目规划200条生产线，全面达产后可实现年产22万片氮化镓单晶衬底，年产值达50亿元。截至目前，已建成10条国际领先的生产线。

在生产车间，山东镓数相关负责人向考察团一行详细介绍了从晶体生长、晶圆加工到衬底成品的全流程生产工艺。据介绍，山东镓数自主研发的大型HVPE氮化镓单晶衬底生长设备已实现三片同时生长，并已具备六片生长的技术储备，设备与工艺水平达到世界一流。公司生产的氮化镓单晶衬底产品XRD摇摆曲线半峰宽均在65角秒以下，位错密度小于5.0×10⁵cm⁻²，技术指标处于世界先进水平。核心产品广泛应用于5G通信基站、6G全面形成、相控阵雷达、激光器、半导体照明等尖端领域。

考察结束后，双方就氮化镓单晶衬底材料在武汉及华中地区的产业化应用、市场拓展及供应链协同等事项进行了深入座谈。鑫恒福科技董事长表示，山东镓数在氮化镓单晶衬底领域拥有从核心装备自主研发到规模化量产的全链条能力，其技术实力与产业规模令人印象深刻。此次考察使公司对第三代半导体材料产业有了更加深入的理解，也为公司转型发展提供了清晰的方向。

山东镓数总经理梁如俭表示，武汉东湖高新区在光电子信息产业领域具有突出的产业基础和平台优势，九峰山实验室等创新载体在氮化镓领域已取得多项全球领先的技术突破。双方合作将有助于推动氮化镓单晶衬底材料在华中地区的产业化应用，进一步完善化合物半导体产业链布局。

双方一致同意，将充分发挥各自在技术研发、产业资源、区域市场等方面的优势，围绕氮化镓单晶衬底材料供应、核心装备制造及下游应用拓展等领域开展深度合作。此次战略合作的达成，标志着鑫恒福科技正式进入第三代半导体材料产业领域，公司业务结构将从传统信息技术服务向"信息技术+先进材料"双轮驱动方向实现重要升级。

第三代半导体材料是我国重点发展的战略性先进电子材料。《中国制造2025》及国家"十四五"规划均明确提出大力发展第三代半导体产业。湖北省及武汉市"十五五"规划纲要亦明确提出，加快氮化镓等化合物半导体技术创新及成果转化，形成先进化合物半导体特色产业集群。

此次鑫恒福科技与山东镓数的战略合作，是响应国家战略性新兴产业发展号召、推动第三代半导体材料国产化替代的具体实践。双方将以此次合作为起点，持续深化在氮化镓单晶衬底及核心装备领域的技术合作与产业协同，为我国第三代半导体产业的高质量发展贡献力量，也为武汉建设具有全球影响力的化合物半导体产业高地增添新的动力。`,
    images: [
      "/news_20260713_1.jpg",
      "/news_20260713_2.jpg",
      "/news_20260713_3.jpg",
      "/news_20260713_4.jpg",
      "/news_20260713_5.jpg",
      "/news_20260713_6.jpg",
      "/news_20260713_7.jpg",
      "/news_20260713_8.jpg",
      "/news_20260713_9.jpg",
      "/news_20260713_10.jpg",
      "/news_20260713_11.jpg",
      "/news_20260713_12.jpg",
    ],
  },
  {
    id: 11,
    title: "湖北鑫恒福科技与苏州天瞳威视、浪潮金融达成战略合作意向",
    date: "2026年06月12日",
    category: "合作动态",
    description:
      "2026年6月12日，湖北鑫恒福科技发展有限公司与苏州天瞳威视电子科技股份有限公司、浪潮金融信息技术有限公司在武汉举行业务合作及转型发展专题交流会，三方就智能驾驶数据服务、金融AI解决方案等方向达成多项初步合作意向。",
    fullContent: `2026年6月12日，湖北鑫恒福科技发展有限公司与苏州天瞳威视电子科技股份有限公司、浪潮金融信息技术有限公司在湖北鑫恒福科技发展有限公司总部对接召开业务合作及转型发展专题交流会。三方围绕智能驾驶数据服务、金融AI解决方案、资本并购等方向达成多项初步合作意向，将共同推动产业协同与创新发展。

作为一家深耕信息系统集成、智慧金融及AI解决方案的高新技术企业，湖北鑫恒福科技拥有近30人的研发团队，业务覆盖医疗AI、金融AI及系统集成等领域，2026年全年营收预计接近1.2亿元。公司在交通数据领域具备独家资源优势——独家承建湖北交投全省300个收费站、150处停车场的智能客服及运维平台，掌握充电、停车、车辆通行、场站运维等全量真实运营数据，并具备从数据采集、清洗、标注到脱敏、分析的闭环处理能力，已取得等保三级等核心资质认证。

苏州天瞳威视电子科技股份有限公司成立于2016年，是一家以软件为核心的智能驾驶解决方案提供商，业务覆盖L2-L4级全栈智能驾驶解决方案，总部位于苏州，在天津、上海、深圳、底特律等全球多地设有研发中心，员工超400人。天瞳威视手握超10亿元意向订单，L4级自动驾驶业务营收占比已跃升至近七成，目前正积极推进港股IPO进程。

浪潮金融信息技术有限公司为浪潮集团全资子公司，主营金融自助终端、信息化集成及行业AI解决方案，在金融智能化领域具备深厚的技术积累与市场优势。

在智能驾驶与交通数据领域，天瞳威视将输出自动驾驶算法及整车厂客户资源（覆盖上汽、蔚来、理想等头部车企）；湖北鑫恒福将输出湖北交通场站运营数据、数据加工能力及本地渠道资源，双方联合打包数据产品向车企变现。在金融AI与智能终端领域，浪潮金融将与我方展开深度协同，将金融AI研发助手、病历AI模型与浪潮金融硬件终端相结合，面向银行、政务网点打造软硬件一体化AI服务方案，同时依托浪潮算力及国产芯片资源，优化行业小模型训练效率。

来访企业一致认为，湖北鑫恒福科技在湖北交通场站数据领域的独家资源具备显著的差异化竞争优势。通过本次对接，三方将充分发挥各自在技术、数据、渠道、算力等方面的互补优势，以项目落地为核心目标，加速湖北鑫恒福科技从传统集成业务向AI数据、智能交通、金融数字化等高附加值领域的战略转型，实现互利共赢的发展格局。`,
    images: [
      "/news_20260612_1.png",
      "/news_20260612_2.png",
      "/news_20260612_3.png",
      "/news_20260612_4.png",
      "/news_20260612_5.png",
    ],
  },
  {
    id: 0,
    title: "鑫恒福科技公司与湖北水发楚禹公司座谈交流会",
    date: "2026年04月15日",
    category: "合作动态",
    description:
      "2026年4月15日，湖北鑫恒福科技有限公司与湖北水发楚禹公司在武汉举行座谈交流会，双方围绕业务协同与项目合作深入交流。",
    fullContent: `2026年4月15日，湖北鑫恒福科技有限公司与湖北水发楚禹公司在武汉举行“鑫恒福科技公司与湖北水发楚禹公司座谈交流会”。双方代表团在会议室开展友好、务实的业务交流。

会上，鑫恒福科技介绍了公司在智能化、数字化及专业技术服务领域的发展情况与典型案例；湖北水发楚禹公司介绍了主营业务布局与合作期待。双方围绕智慧水务、信息化建设和项目协作等方向交换意见，并就下一步深化沟通、推进具体合作达成共识。

此次座谈加强了双方互信，为后续在相关领域的协同落地奠定了良好基础。`,
    images: [
      "/news_20260415_1.png",
      "/news_20260415_2.png",
      "/news_20260415_3.png",
    ],
  },
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
    title: "鑫恒福科技与高校合作建立联合研究中心",
    date: "2021年11月08日",
    category: "合作动态",
    description: "鑫恒福科技与国内知名高校合作建立了区块链技术联合研究中心，推动产学研结合。",
    fullContent: `为了加强基础研究和技术创新，鑫恒福科技与国内顶级高校建立了战略合作关系。

双方将在区块链、人工智能等领域开展深入合作，共同推动技术进步和产业发展，实现产学研深度融合。`,
    images: [],
  },
  {
    id: 6,
    title: "智慧金融平台成功上线，服务数百万用户",
    date: "2021年09月22日",
    category: "产品动态",
    description: "鑫恒福科技自主研发的智慧金融平台正式上线，已为数百万用户提供了高效、安全的金融服务。",
    fullContent: `经过两年多的研发和测试，鑫恒福科技的智慧金融平台于2021年9月正式上线。

平台采用了最先进的云计算和大数据技术，为用户提供了全面的金融解决方案。上线以来，已有数百万用户注册使用，获得了用户的高度评价。`,
    images: [],
  },
  {
    id: 7,
      title: '鑫恒福科技荣获"年度最佳技术创新企业"奖',
    date: "2021年06月10日",
    category: "荣誉奖项",
    description: '在中国信息技术创新大会上，鑫恒福科技因其在区块链和大数据领域的创新成果获得了"年度最佳技术创新企业"奖。',
    fullContent: `鑫恒福科技凭借在云计算、大数据、物联网、人工智能、区块链等领域的持续创新和卓越成就，获得了业界的广泛认可。

这一荣誉充分体现了公司在技术创新方面的领先地位和市场影响力，也是对全体员工努力付出的最好肯定。`,
    images: [],
  },
  {
    id: 8,
    title: "鑫恒福科技、浪潮金融举行商务洽谈交流会",
    date: "2020年12月04日",
    category: "合作动态",
    description: "鑫恒福科技与浪潮金融商务洽谈交流会在鑫恒福科技公司5楼会议室举行。双方就合作方向进行了深入探讨。",
    fullContent: `2020年12月4日，鑫恒福科技与浪潮金融在武汉举行商务洽谈交流会。双方高层领导出席会议，就云计算、大数据、人工智能等领域的合作进行了深入交流。

会议认为，双方在技术积累和市场资源方面具有很强的互补性，有很大的合作潜力，后续将推进具体合作项目的落地。`,
    images: [],
  },
  {
    id: 9,
    title: "鑫恒福收到一封抗疫感谢信│携手抗疫，共克时艰",
    date: "2020年03月20日",
    category: "公司新闻",
    description: "3月20日，鑫恒福公司收到了来自湖北省武汉市武昌区大数据中心的感谢信，感谢公司在疫情期间的技术支持和贡献。",
    fullContent: `在新冠疫情防控的关键时期，鑫恒福科技积极响应国家号召，充分发挥自身技术优势，为武昌区大数据中心提供了强有力的技术支持和服务。

公司的技术团队加班加点，确保了疫情防控数据系统的稳定运行，为疫情防控工作做出了重要贡献。武昌区大数据中心特致感谢信，对公司的无私奉献表示诚挚感谢。`,
    images: [],
  },
  {
    id: 10,
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
      <main className="flex-1 pt-20">

        {/* 页头：与解决方案、关于我们、联系我们等内页同一套样式 */}
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
