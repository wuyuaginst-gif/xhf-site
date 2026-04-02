import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";

/* ─────────────────────────────────────────────
   轮播数据
   bgImage: 背景图路径（填 null 则用 bgGradient）
   bgGradient: 无图时的备用渐变色
───────────────────────────────────────────── */
const slides = [
  {
    id: 1,
    num: "01",
    badge: "AI Vision",
    title: "AI 视觉\n智能平台",
    subtitle: "基于 Ultralytics YOLO 的新一代智能视觉解决方案",
    description: "融合 AI 驱动的数据标注、模型训练与部署，快速构建高精度视觉模型，赋能各行业智能升级",
    stats: [
      { value: "99.8%", label: "识别准确率" },
      { value: "10x", label: "效率提升" },
      { value: "50ms", label: "推理延迟" },
    ],
    bgImage: "/hero-bg.png",
    bgGradient: "linear-gradient(135deg, #062D6E 0%, #0B3D8C 100%)",
    cta: "/products",
  },
  {
    id: 2,
    num: "02",
    badge: "AI Annotation",
    title: "智能数据\n标注平台",
    subtitle: "高效精准的标注工具链",
    description: "支持图像分割、目标检测、关键点标注等多种标注模式，AI 辅助标注效率提升 10 倍",
    stats: [
      { value: "10x", label: "标注提速" },
      { value: "98%", label: "标注精度" },
      { value: "20+", label: "标注类型" },
    ],
    bgImage: "/hero-bg.png",
    bgGradient: "linear-gradient(135deg, #0A1F4E 0%, #1A5BA0 100%)",
    cta: "/products",
  },
  {
    id: 3,
    num: "03",
    badge: "MLOps",
    title: "模型训练\n与部署",
    subtitle: "端到端的 MLOps 流程",
    description: "一键训练、自动调参、模型优化，支持云端和边缘设备灵活部署",
    stats: [
      { value: "3x", label: "训练提速" },
      { value: "云 + 端", label: "部署方式" },
      { value: "<100ms", label: "推理响应" },
    ],
    bgImage: "/hero-bg.png",
    bgGradient: "linear-gradient(135deg, #061828 0%, #0D4A9E 100%)",
    cta: "/products",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const goTo = (i: number) => {
    setDir(i > current ? 1 : -1);
    setCurrent(i);
  };
  const goPrev = () => goTo((current - 1 + slides.length) % slides.length);
  const goNext = () => goTo((current + 1) % slides.length);

  /* 自动轮播 */
  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setCurrent((p) => (p + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden flex items-center"
      style={{ minHeight: "calc(100vh - 64px)", marginTop: "64px" }}
    >
      {/* ── 背景层（切换动画） ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {slide.bgImage ? (
            <img
              src={slide.bgImage}
              alt=""
              className="w-full h-full object-cover object-right"
              draggable={false}
            />
          ) : (
            <div className="w-full h-full" style={{ background: slide.bgGradient }} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* 无遮罩，直接显示背景图 */}

      {/* 遮住右下角水印 */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: 120,
          height: 40,
          background: "linear-gradient(to top left, rgba(230,242,255,0.95) 40%, transparent 100%)",
        }}
      />

      {/* ── 主内容（切换动画） ── */}
      {/* 底部留出足够空间，避免被控制栏遮挡（控制栏约 52px + 向下箭头区域） */}
      <div className="relative z-10 w-full container pt-20 pb-36">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={`content-${current}`}
            custom={dir}
            variants={{
              enter: (d: number) => ({ opacity: 0, x: d * 40 }),
              center: { opacity: 1, x: 0 },
              exit: (d: number) => ({ opacity: 0, x: d * -30 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* 标签 */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0096D6] animate-pulse" />
              <span className="text-xs text-[#0096D6] font-semibold tracking-[0.2em] uppercase">
                {slide.badge}
              </span>
              <span className="text-[#0096D6]/30 mx-1">·</span>
              <span className="text-xs text-[#062D6E]/50 tracking-widest uppercase">湖北鑫恒福科技</span>
            </div>

            {/* 主标题 */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#062D6E] leading-tight tracking-tight mb-5 whitespace-pre-line">
              {slide.title.split("\n")[0]}{"\n"}
              <span className="text-[#0096D6]">{slide.title.split("\n")[1]}</span>
            </h1>

            {/* 副标题 */}
            <p className="text-lg text-[#062D6E]/75 mb-3 font-medium">{slide.subtitle}</p>
            <p className="text-sm text-[#062D6E]/55 mb-10 leading-relaxed max-w-lg">{slide.description}</p>

            {/* 统计 */}
            <div className="flex items-center gap-8 mb-10">
              {slide.stats.map((s, i, arr) => (
                <div key={s.label} className="flex items-start gap-8">
                  <div>
                    <div className="text-3xl font-black text-[#062D6E] leading-none">{s.value}</div>
                    <div className="text-xs text-[#062D6E]/45 mt-1">{s.label}</div>
                  </div>
                  {i < arr.length - 1 && <div className="w-px h-9 bg-[#0096D6]/20 mt-0.5" />}
                </div>
              ))}
            </div>

            {/* 按钮 */}
            <div className="flex flex-wrap gap-3">
              <Link href={slide.cta}>
                <span className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-semibold text-sm text-white bg-[#0096D6] hover:bg-[#007BB5] transition-colors group shadow-lg">
                  了解产品
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-semibold text-sm text-[#062D6E]/70 border border-[#0096D6]/30 hover:bg-[#0096D6]/10 transition-colors">
                  立即咨询
                </span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── 底部轮播控制：左箭头 · 圆点 · 右箭头 ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-5">
        {/* 左箭头 */}
        <button
          onClick={goPrev}
          className="w-8 h-8 flex items-center justify-center rounded-full text-[#062D6E]/50 hover:text-[#0096D6] transition-colors"
          aria-label="上一张"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* 圆点指示器 */}
        <div className="flex items-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`跳转到第 ${i + 1} 张`}
              className="transition-all duration-300 rounded-full"
              style={
                i === current
                  ? { width: 20, height: 8, background: "#0096D6" }
                  : { width: 8, height: 8, background: "rgba(6,45,110,0.25)" }
              }
            />
          ))}
        </div>

        {/* 右箭头 */}
        <button
          onClick={goNext}
          className="w-8 h-8 flex items-center justify-center rounded-full text-[#062D6E]/50 hover:text-[#0096D6] transition-colors"
          aria-label="下一张"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
