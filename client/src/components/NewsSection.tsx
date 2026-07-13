import { motion } from "framer-motion";
import { Calendar, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";

/* ─────────────────────────────────────────────
   新闻数据
   images 数组：放原图路径，想加多少张加多少张
───────────────────────────────────────────── */
const news = [
  {
    id: 12,
    title: "湖北鑫恒福科技发展有限公司董事长一行赴山东镓数智能科技有限公司考察交流",
    date: "2026/07/13",
    category: "合作动态",
    hot: true,
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
    date: "2026/06/12",
    category: "合作动态",
    hot: true,
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
    date: "2026/04/15",
    category: "合作动态",
    hot: true,
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
    id: 2,
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
    id: 3,
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
  { title: "鑫恒福科技董事长一行赴山东镓数智能科技考察交流", date: "2026/07/13" },
  { title: "鑫恒福科技与苏州天瞳威视、浪潮金融达成战略合作意向", date: "2026/06/12" },
  { title: "鑫恒福科技与湖北水发楚禹公司举行座谈交流会", date: "2026/04/15" },
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
    <>
      {/* 页头：与 /news 及解决方案、关于我们等内页同一套样式 */}
      <section className="relative py-20 overflow-hidden section-3d bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="gradient-text">新闻中心</span>
            </h2>
            <p className="text-lg text-slate-600">
              聚焦行业动态，传播最新资讯
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F7FA] relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-[0.04]" />
        <div className="container relative z-10">

        {/* 入口链接（与顶栏标题不重复） */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex justify-end mb-12"
        >
          <Link href="/news">
            <span className="inline-flex items-center gap-1 text-sm text-[#0B3D8C] hover:text-[#0096D6] transition-colors font-medium">
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
    </>
  );
}
