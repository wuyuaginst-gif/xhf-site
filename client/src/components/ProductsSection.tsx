import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Globe, Shield, Building2, TrendingUp, Zap, Coins, ArrowRight, Brain, Cpu, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";

/* 产品与服务分类 */
const productCategories = [
  {
    category: "智能视觉产品",
    items: [
      { name: "YOLO 视觉训练平台", href: "/products" },
      { name: "智能数据标注工具", href: "/products" },
      { name: "模型训练与部署服务", href: "/products" },
    ],
  },
  {
    category: "金融科技产品",
    items: [
      { name: "智慧金融互联网平台", href: "/products" },
      { name: "Points OS 积分运营平台", href: "/products" },
      { name: "金融风控系统", href: "/products" },
    ],
  },
  {
    category: "行业解决方案",
    items: [
      { name: "智慧城市解决方案", href: "/products" },
      { name: "智慧公安大数据平台", href: "/products" },
      { name: "智慧医疗解决方案", href: "/products" },
    ],
  },
  {
    category: "基础技术平台",
    items: [
      { name: "大数据分析平台", href: "/products" },
      { name: "AI 推理引擎", href: "/products" },
      { name: "云原生部署平台", href: "/products" },
    ],
  },
];

/* 核心产品卡片数据 */
const coreProducts = [
  {
    id: 0,
    title: "YOLO 视觉训练平台",
    desc: "基于 YOLO 系列算法的视觉训练平台，支持目标检测、图像分类、实例分割等任务，一站式模型训练、评估与部署服务。",
    icon: Brain,
    tag: "新品",
    color: "#0B3D8C",
    features: ["目标检测", "实例分割", "一键训练", "模型部署"],
    image: "/images/sjpt.jpg",
  },
  {
    id: 1,
    title: "Points OS 积分运营平台",
    desc: "下一代积分忠诚度操作系统，双屏联动，AI 智能推荐、游戏化运营。万物皆可积分，积分即是服务。",
    icon: Coins,
    tag: "新品",
    color: "#0096D6",
    features: ["AI 智能推荐", "游戏化运营", "双屏联动", "多场景通用"],
    image: "/images/jfpt.png",
  },
  {
    id: 2,
    title: "智慧金融平台",
    desc: "实现金融产品、风控、获客、服务的智慧化，建立在金融物联网基础上的完整解决方案。",
    icon: TrendingUp,
    tag: null,
    color: "#1A5BA0",
    features: ["金融风控", "智能获客", "数据分析", "合规管理"],
    image: null,
  },
  {
    id: 3,
    title: "智慧公安大数据平台",
    desc: "以大数据为核心，打造智慧警务平台，为公安信息化建设提供综合服务，全面提升公共安全治理能力。",
    icon: Shield,
    tag: null,
    color: "#062D6E",
    features: ["数据汇聚", "智能研判", "实战应用", "信息安全"],
    image: null,
  },
  {
    id: 4,
    title: "智慧城市解决方案",
    desc: "实现信息化、工业化与城镇化深度融合，打造政务、交通、公共安全一体化的现代智慧城市解决方案。",
    icon: Building2,
    tag: null,
    color: "#0096D6",
    features: ["智慧政务", "交通管理", "市民服务", "城市大脑"],
    image: null,
  },
  {
    id: 5,
    title: "大数据分析平台",
    desc: "提供全链路数据采集、存储、计算、分析能力，支持实时和离线混合处理，助力企业数据驱动决策。",
    icon: Cpu,
    tag: null,
    color: "#1A6BC4",
    features: ["实时计算", "数据湖", "BI 分析", "数据治理"],
    image: null,
  },
];

/* 行业应用 */
const industries = [
  { name: "智慧金融", icon: TrendingUp, desc: "金融科技整体解决方案", color: "from-[#0B3D8C] to-[#1A6BC4]" },
  { name: "智慧政务", icon: Building2, desc: "政府数字化转型服务", color: "from-[#062D6E] to-[#0B3D8C]" },
  { name: "公共安全", icon: Shield, desc: "智慧公安大数据平台", color: "from-[#0D1B3E] to-[#0B3D8C]" },
  { name: "智慧城市", icon: Globe, desc: "城市综合管理平台", color: "from-[#1A5BA0] to-[#0096D6]" },
  { name: "人工智能", icon: Brain, desc: "视觉 AI 训练与部署", color: "from-[#0B3D8C] to-[#0096D6]" },
  { name: "数据安全", icon: Lock, desc: "企业数据合规保护", color: "from-[#004A9E] to-[#1A6BC4]" },
];

/* 产品轮播组件 */
function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((api: any) => setScrollSnaps(api.scrollSnapList()), []);
  const onSelect = useCallback((api: any) => setSelectedIndex(api.selectedScrollSnap()), []);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative">
      {/* 左右箭头 */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 shadow hover:border-[#0096D6] hover:bg-blue-50 transition-all -ml-5 group"
        aria-label="上一个"
      >
        <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:text-[#0B3D8C]" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 shadow hover:border-[#0096D6] hover:bg-blue-50 transition-all -mr-5 group"
        aria-label="下一个"
      >
        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#0B3D8C]" />
      </button>

      {/* 轮播容器 */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {coreProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <Link href="/products" className="block group h-full">
                  <div className="service-card h-full flex flex-col min-h-[260px]">
                    {/* 顶部：图标 + 标签 */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded flex items-center justify-center" style={{ background: `${product.color}18` }}>
                        <Icon className="w-6 h-6" style={{ color: product.color }} />
                      </div>
                      {product.tag && (
                        <span className="px-2 py-0.5 text-[10px] font-bold bg-[#0096D6] text-white rounded">
                          {product.tag}
                        </span>
                      )}
                    </div>

                    {/* 图片（如有） */}
                    {product.image && (
                      <div className="mb-4 rounded overflow-hidden border border-slate-100">
                        <img src={product.image} alt={product.title} className="w-full h-36 object-cover" />
                      </div>
                    )}

                    {/* 标题 */}
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#0B3D8C] transition-colors">
                      {product.title}
                    </h3>

                    {/* 描述 */}
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-3">
                      {product.desc}
                    </p>

                    {/* 特性标签 */}
                    <div className="flex flex-wrap gap-1.5">
                      {product.features.map((f, fi) => (
                        <span key={fi} className="px-2 py-0.5 text-[10px] rounded" style={{ background: `${product.color}12`, color: product.color }}>
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-1 text-xs text-slate-400 group-hover:text-[#0096D6] transition-colors">
                      查看详情 <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 圆点指示器 */}
      <div className="flex justify-center gap-2.5 mt-8">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === selectedIndex ? "bg-[#0096D6] w-6" : "bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`第 ${i + 1} 个`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProductsSection() {
  return (
    <>
      {/* ===== 产品与服务 ===== */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-[0.04]" />
        <div className="container relative z-10">

          {/* 版块标题 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-12"
          >
            <div className="flex items-end gap-4 mb-3">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D8C]">产品与服务</h2>
              <span className="text-sm text-[#0096D6] font-semibold tracking-widest uppercase mb-1">
                Product &amp; Service
              </span>
            </div>
            <div className="w-16 h-1 bg-[#0096D6] rounded-full" />
          </motion.div>

          {/* 产品轮播 */}
          <div className="px-6 mb-16">
            <ProductCarousel />
          </div>

          {/* 产品分类导航（折叠式，放轮播下方） */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {productCategories.map((cat, i) => (
              <div key={i} className="border border-slate-100 rounded overflow-hidden">
                <div className="bg-[#0B3D8C] px-4 py-2.5 text-white text-sm font-semibold">
                  {cat.category}
                </div>
                <div className="bg-white divide-y divide-slate-50">
                  {cat.items.map((item, j) => (
                    <Link key={j} href={item.href}>
                      <span className="flex items-center gap-2 px-4 py-2 text-xs text-slate-600 hover:text-[#0096D6] hover:bg-blue-50 transition-colors group">
                        <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#0096D6] transition-colors flex-shrink-0" />
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== 业务与行业 ===== */}
      <section className="py-20 bg-[#F5F7FA] relative overflow-hidden">
        <div className="container relative z-10">

          {/* 版块标题 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-14"
          >
            <div className="flex items-end gap-4 mb-3">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D8C]">业务与行业</h2>
              <span className="text-sm text-[#0096D6] font-semibold tracking-widest uppercase mb-1">
                Business &amp; Industry
              </span>
            </div>
            <div className="w-16 h-1 bg-[#0096D6] rounded-full" />
          </motion.div>

          {/* 行业卡片网格 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, index) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`bg-gradient-to-br ${ind.color} rounded-lg p-6 text-white cursor-pointer group relative overflow-hidden`}
                >
                  {/* 装饰圆 */}
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-white/8" />

                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base font-bold mb-1">{ind.name}</h3>
                  <p className="text-xs text-white/70 leading-relaxed">{ind.desc}</p>

                  <Link href="/cases">
                    <span className="mt-4 inline-flex items-center gap-1 text-xs text-white/60 hover:text-white transition-colors group-hover:gap-2">
                      了解更多 <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
