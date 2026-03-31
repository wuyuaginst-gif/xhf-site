import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Globe, Shield, Building2, Link as LinkIcon, TrendingUp, Zap, ChevronLeft, ChevronRight, Coins, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const products = [
  {
    id: 1,
    title: "智慧金融",
    description: "实现金融产品、风控、获客、服务的智慧化，建立在金融物联网基础上的完整解决方案",
    icon: TrendingUp,
    gradient: "from-blue-600 to-blue-400",
    shadowColor: "rgba(37, 99, 235, 0.3)",
  },
  {
    id: 2,
    title: "Points OS 积分运营平台",
    description: "下一代积分忠诚度操作系统，双屏联动（移动端+城市大脑端），AI智能推荐、游戏化运营。核心理念：万物皆可积分，积分即是服务。",
    icon: Coins,
    gradient: "from-blue-500 to-sky-400",
    shadowColor: "rgba(56, 189, 248, 0.3)",
    tag: "新品",
    features: ["AI智能推荐", "游戏化运营", "双屏联动", "多场景通用"],
  },
  {
    id: 3,
    title: "智慧公安",
    description: "以大数据为核心，打造智慧警务大数据平台，为公安信息化建设提供综合服务",
    icon: Shield,
    gradient: "from-sky-500 to-blue-500",
    shadowColor: "rgba(14, 165, 233, 0.3)",
  },
  {
    id: 4,
    title: "智慧城市",
    description: "实现信息化、工业化与城镇化深度融合，打造现代化城市解决方案",
    icon: Building2,
    gradient: "from-blue-400 to-cyan-400",
    shadowColor: "rgba(56, 189, 248, 0.3)",
  },
  {
    id: 5,
    title: "区块链技术",
    description: "专注基于区块链技术的业务和产品创新，提供智能合约定制开发服务",
    icon: LinkIcon,
    gradient: "from-blue-600 to-sky-300",
    shadowColor: "rgba(37, 99, 235, 0.3)",
  },
];

const technologies = [
  { name: "云计算", icon: Zap },
  { name: "大数据", icon: TrendingUp },
  { name: "物联网", icon: Globe },
  { name: "人工智能", icon: Zap },
  { name: "区块链", icon: LinkIcon },
];

export default function ProductsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="py-24 relative overflow-hidden section-3d bg-gradient-to-b from-white to-slate-50/40">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-100 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-600 font-medium">CORE PRODUCTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-slate-900">
            <span className="hero-title">核心产品</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            <span className="text-slate-500">专业的技术团队为您提供完整的解决方案和优质的服务</span>
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-8 rounded-full" />
        </motion.div>

        {/* Products carousel */}
        <div className="relative mb-16">
          {/* Navigation buttons */}
          <motion.button
            onClick={scrollPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 -ml-4 md:-ml-6 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
          </motion.button>
          <motion.button
            onClick={scrollNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 -mr-4 md:-mr-6 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
          </motion.button>

          {/* Carousel viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] min-w-0"
                  >
                    <Link href="/products" className="block group">
                      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col h-full hover:shadow-lg transition-all duration-300">
                        {/* Icon with 3D effect */}
                        <div className="relative mb-6">
                          <div
                            className={`tech-card-icon`}
                            style={{
                              background: `linear-gradient(135deg, ${product.shadowColor}40, transparent)`,
                              boxShadow: `0 0 30px ${product.shadowColor}30`,
                            }}
                          >
                            <div className={`w-full h-full rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                          </div>
                          {/* Floating badge */}
                          {product.tag && (
                            <span className="absolute -top-2 -right-2 px-3 py-1 text-xs font-bold bg-gradient-to-r from-blue-500 to-sky-400 text-white rounded-full shadow-lg">
                              {product.tag}
                            </span>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                            {product.title}
                          </h3>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          {product.description}
                        </p>

                        {/* Feature tags */}
                        {product.features && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {product.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Arrow indicator */}
                        <div className="flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                          <span className="text-sm font-medium">了解更多</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-3 mt-10">
            {scrollSnaps.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => scrollTo(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-gradient-to-r from-blue-500 to-blue-600"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Technology stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold font-display text-center mb-10">
            <span className="bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">技术支撑</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white shadow-sm rounded-xl p-5 text-center border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group cursor-default"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">{tech.name}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
