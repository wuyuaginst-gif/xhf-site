import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import ImageGallery from "@/components/ImageGallery";
import { AbstractBackground, GlowingOrb, FeatureItem, ProgressBar, StatsCard, SectionDivider } from "@/components/ModernVisual";
import { ArrowRight, Sparkles, Zap, Shield, Globe, Database, Cpu, Layers } from "lucide-react";

const architectureImages = [
  {
    id: 1,
    src: '/images/J1XRScst0LGK.jpeg',
    title: '大数据技术架构',
    description: '完整的大数据技术栈架构设计，包含数据采集、存储、处理、分析等全流程',
    category: '技术架构'
  },
  {
    id: 2,
    src: '/images/DoCpY3NAs91F.png',
    title: '云原生大数据架构',
    description: '基于云计算的现代大数据架构实践，支持弹性扩展和高可用部署',
    category: '技术架构'
  },
  {
    id: 3,
    src: '/images/RFVGThAoUMzh.png',
    title: '腾讯云大数据产品全景',
    description: '企业级大数据产品体系，覆盖数据采集、存储、计算、分析、可视化全链路',
    category: '技术架构'
  }
];

const visualizationImages = [
  {
    id: 4,
    src: '/images/eoetVvkixwgI.png',
    title: '数据可视化仪表盘',
    description: '实时数据监控仪表盘，支持多维度数据分析和交互式可视化展示',
    category: '数据可视化'
  },
  {
    id: 5,
    src: '/images/6EZH0skeG1LN.png',
    title: '高效仪表盘设计',
    description: '专业的数据可视化仪表盘，展示关键业务指标和实时数据分析结果',
    category: '数据可视化'
  },
  {
    id: 6,
    src: '/images/SO7B1KHsFlF0.png',
    title: '交互式分析可视化',
    description: '支持交互式操作的数据分析可视化平台，帮助用户深入洞察数据',
    category: '数据可视化'
  }
];

const applicationImages = [
  {
    id: 7,
    src: '/images/kDBUmTWZd9x5.jpg',
    title: '智慧城市金融科技',
    description: '智慧城市中的金融科技应用，实现城市运作的数字化和智能化',
    category: '应用场景'
  },
  {
    id: 8,
    src: '/images/Z3xdmMf7sd7O.jpg',
    title: '城市规划与智慧城市',
    description: '利用大数据和AI技术进行城市规划和智能管理，提升城市治理效能',
    category: '应用场景'
  }
];

const features = [
  {
    number: "01",
    title: "AI 驱动智能",
    description: "基于深度学习算法，实现智能分析、预测和自动决策，大幅提升业务效率"
  },
  {
    number: "02",
    title: "云原生架构",
    description: "基于 Kubernetes 的容器化部署，支持弹性伸缩和多云混合部署"
  },
  {
    number: "03",
    title: "实时数据流",
    description: "毫秒级数据处理能力，支持千万级并发实时数据分析与可视化"
  },
  {
    number: "04",
    title: "安全合规",
    description: "通过等保三级认证，符合 GDPR 等国际数据安全标准"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050A30] text-white relative overflow-hidden">
      {/* Abstract background */}
      <AbstractBackground />
      <GlowingOrb color="#00D4FF" size={500} delay={0} />
      <GlowingOrb color="#8B5CF6" size={400} delay={1} />

      <div className="relative z-10">
        <Navigation />
        <main className="flex-1">
          <HeroSection />
          <ProductsSection />

          {/* Stats Section */}
          <section className="py-20 relative">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                <StatsCard value="200+" label="企业客户" trend="+25%" />
                <StatsCard value="50+" label="成功案例" trend="+12%" />
                <StatsCard value="99.9%" label="服务可用性" />
                <StatsCard value="24/7" label="技术支持" />
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 relative">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-cyan-400 font-medium">CORE FEATURES</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                    核心优势
                  </span>
                </h2>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                  我们提供端到端的数字化解决方案，助力企业实现智能化转型
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <FeatureItem key={feature.number} {...feature} />
                ))}
              </div>
            </div>
          </section>

          {/* Technology Architecture Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-20 relative"
          >
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                  <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                    技术架构展示
                  </span>
                </h2>
                <p className="text-white/60">完整的大数据技术栈架构设计</p>
              </div>
              <ImageGallery images={architectureImages} title="" />
            </div>
          </motion.section>

          {/* Data Visualization Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="py-20 relative"
          >
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                  <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                    数据可视化
                  </span>
                </h2>
                <p className="text-white/60">实时数据监控与交互式分析</p>
              </div>
              <ImageGallery images={visualizationImages} title="" />
            </div>
          </motion.section>

          {/* Application Scenarios Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="py-20 relative"
          >
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                  <span className="bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent">
                    应用场景
                  </span>
                </h2>
                <p className="text-white/60">智慧城市中的实际应用案例</p>
              </div>
              <ImageGallery images={applicationImages} title="" />
            </div>
          </motion.section>

          {/* Technology Progress Section */}
          <section className="py-20 relative">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                    <Zap className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-400 font-medium">TECHNOLOGY STACK</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                    技术能力
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <ProgressBar value={95} label="AI 机器学习" />
                    <ProgressBar value={90} label="大数据处理" />
                    <ProgressBar value={88} label="云计算架构" />
                    <ProgressBar value={85} label="区块链技术" />
                  </div>
                  <div className="space-y-6">
                    <ProgressBar value={92} label="网络安全" color="#8B5CF6" />
                    <ProgressBar value={87} label="物联网集成" color="#8B5CF6" />
                    <ProgressBar value={94} label="数据分析" color="#8B5CF6" />
                    <ProgressBar value={89} label="自动化运维" color="#8B5CF6" />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <AboutSection />
          <NewsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
