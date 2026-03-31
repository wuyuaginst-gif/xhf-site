import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Layers, Zap, Target, Brain, Sparkles, ChevronRight, Code2 } from "lucide-react";
import { Link } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";

const slides = [
  {
    id: 1,
    title: "YOLO 视觉训练平台",
    subtitle: "基于 Ultralytics YOLO 的新一代 AI 视觉解决方案",
    description: "提供从数据标注到模型训练的一站式服务，快速构建高精度视觉模型",
    icon: Brain,
    gradient: "from-blue-600 via-blue-500 to-sky-400",
    accentColor: "cyan",
  },
  {
    id: 2,
    title: "智能数据标注",
    subtitle: "高效精准的标注工具链",
    description: "支持图像分割、目标检测、关键点标注等多种标注模式，AI 辅助标注效率提升 10 倍",
    icon: Layers,
    gradient: "from-blue-500 via-sky-500 to-blue-400",
    accentColor: "purple",
  },
  {
    id: 3,
    title: "模型训练与部署",
    subtitle: "端到端的 MLOps 流程",
    description: "一键训练、自动调参、模型优化，支持云端和边缘设备灵活部署",
    icon: Cpu,
    gradient: "from-sky-500 via-blue-400 to-blue-600",
    accentColor: "teal",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const current = slides[currentSlide];
  const Icon = current.icon;

  return (
    <section className="relative min-h-screen pt-16 overflow-hidden section-3d">
      {/* Dynamic background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[100px] animate-pulse-slow delay-2000" />

        {/* Tech grid */}
        <div className="absolute inset-0 tech-grid opacity-20" />

        {/* Neural network animation */}
        <NeuralNetworkAnimation />
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center min-h-screen pt-20">
        {/* Left content */}
        <motion.div
          className="flex-1 py-12 lg:pr-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo and badge */}
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm border border-blue-100">
              <img src={APP_LOGO} alt={APP_TITLE} className="h-8 w-8 rounded-xl" />
              <span className="text-sm font-medium text-slate-600 hidden sm:inline">{APP_TITLE}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200">
              <Code2 className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs text-blue-600 font-medium">YOLO Powered</span>
            </div>
          </motion.div>

          {/* Main content with slide animation */}
          <div className={`transition-all duration-500 ${isAnimating ? "opacity-0 translate-x-8" : "opacity-100 translate-x-0"}`}>
            {/* Animated icon */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${current.gradient} mb-8 shadow-lg shadow-blue-500/20`}
            >
              <Icon className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold font-display leading-tight mb-4 text-slate-900"
            >
              <span className="hero-title">{current.title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-medium mb-4 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent"
            >
              {current.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed"
            >
              {current.description}
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <FeaturePill icon={Target} text="目标检测" />
              <FeaturePill icon={Layers} text="图像分割" />
              <FeaturePill icon={Brain} text="关键点识别" />
              <FeaturePill icon={Zap} text="实时推理" />
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/products" className="bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 group transition-all">
                立即体验
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="bg-white text-slate-700 border border-slate-200 shadow-sm hover:bg-blue-50 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition-all">
                了解更多
                <ChevronRight className="w-5 h-5 opacity-60" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          className="flex-1 flex items-center justify-center py-12 lg:pl-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <div className={`relative w-full max-w-lg transition-all duration-500 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
            {/* Main card with glass effect */}
            <div className="bg-white/80 backdrop-blur-md shadow-xl border border-blue-100 p-8 relative overflow-hidden rounded-2xl">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-100 via-sky-50 to-blue-100 opacity-50" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-transparent" />

              {/* Content */}
              <div className="relative z-10">
                {/* Status indicators */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-slate-600">系统运行中</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-50 border border-blue-200">
                    <Cpu className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-xs text-blue-600 font-mono">GPU: 98%</span>
                  </div>
                </div>

                {/* Training visualization */}
                <TrainingVisualization />

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200">
                  <StatCard value="99.8%" label="准确率" />
                  <StatCard value="10x" label="效率提升" />
                  <StatCard value="50ms" label="推理延迟" />
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 w-24 h-24 bg-white shadow-lg rounded-2xl border border-blue-100 flex items-center justify-center"
            >
              <Brain className="w-10 h-10 text-blue-500" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -left-5 w-20 h-20 bg-white shadow-lg rounded-xl border border-sky-200 flex items-center justify-center"
            >
              <Layers className="w-8 h-8 text-sky-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentSlide(index);
                setIsAnimating(false);
              }, 500);
            }}
            className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gradient-to-r from-blue-500 to-blue-600"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`View slide ${index + 1}`}
          >
            {index === currentSlide && (
              <motion.div
                layoutId="activeDot"
                className="absolute inset-0 rounded-full bg-blue-500"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 writing-vertical">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
}

function FeaturePill({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-blue-100 hover:border-blue-300 transition-all duration-300 group cursor-default">
      <Icon className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
      <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{text}</span>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold font-display bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  );
}

function TrainingVisualization() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1.5));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">模型训练进度</span>
          <span className="text-blue-600 font-mono">{progress.toFixed(0)}%</span>
        </div>
        <div className="h-2 bg-blue-50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Training stages */}
      <div className="grid grid-cols-4 gap-2 text-xs">
        {["数据加载", "模型编译", "迭代训练", "模型保存"].map((stage, i) => {
          const stageProgress = (progress / 100) * 4;
          const active = stageProgress > i;
          const isCurrent = Math.floor(stageProgress) === i;

          return (
            <div
              key={stage}
              className={`px-2 py-2 rounded-lg text-center transition-all duration-300 ${
                active
                  ? isCurrent
                ? "bg-gradient-to-r from-blue-100 to-sky-100 text-blue-700 border border-blue-300 animate-pulse"
                : "bg-slate-50 text-slate-700"
              : "bg-slate-50 text-slate-400"
              }`}
            >
              {stage}
            </div>
          );
        })}
      </div>

      {/* Loss curve */}
      <div className="h-20 bg-blue-50/50 rounded-lg p-3 relative overflow-hidden border border-blue-100">
        <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lossGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,50 Q25,45 50,35 T100,10"
            fill="none"
            stroke="url(#lossGradient)"
            strokeWidth="1.5"
            className="opacity-80"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute top-2 right-2 text-xs text-slate-500 font-mono">
          Loss: {(0.1 + (100 - progress) / 500).toFixed(4)}
        </div>
      </div>
    </div>
  );
}

function NeuralNetworkAnimation() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15">
      <defs>
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="1" />
          <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {[...Array(6)].map((_, i) => (
        <g key={i}>
          {[...Array(4)].map((_, j) => (
            <motion.circle
              key={`${i}-${j}`}
              cx={15 + i * 17 + Math.random() * 5}
              cy={20 + j * 20 + Math.random() * 10}
              r={1.5 + Math.random() * 1.5}
              fill="url(#nodeGradient)"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: (i + j) * 0.3,
              }}
            />
          ))}
        </g>
      ))}
      {/* Connecting lines */}
      <g className="opacity-20">
        {[...Array(3)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={30 + i * 30}
            y1={30}
            x2={30 + i * 30}
            y2={90}
            stroke="url(#nodeGradient)"
            strokeWidth="0.5"
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </g>
    </svg>
  );
}
