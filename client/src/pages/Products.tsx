import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Bot, Eye, BarChart3, MessageSquare, Cpu, Sparkles, Layers, Database, CheckCircle2 } from "lucide-react";
import ThreeDBackground from "@/components/ThreeDBackground";
import ImageGallery from "@/components/ImageGallery";

const products = [
  
  {
    id: 1,
    title: "模型推理服务",
    description: "高性能 / 低延迟 / 弹性扩展",
    fullDescription: "提供高性能AI模型推理服务，支持多种大模型的快速部署与调用，具备低延迟、高吞吐量的特点，支持弹性扩展，满足企业级AI应用需求。",
    icon: Cpu,
    color: "from-green-400 to-teal-500",
    features: [
      "多模型支持",
      "弹性扩展能力",
      "低延迟推理",
      "API快速调用",
      "高并发处理",
      "私有化部署"
    ],
        image: "/mxtl.png"
  },
  {
    id: 2,
    title: "模型训练服务",
    description: "分布式训练 / 自动调参 / 定制化",
    fullDescription: "提供一站式AI模型训练服务，支持分布式训练与自动超参数调优，覆盖从数据预处理到模型上线的全流程，帮助企业高效构建专属AI模型。",
    icon: Sparkles,
    color: "from-orange-400 to-amber-500",
    features: [
      "分布式训练",
      "自动超参调优",
      "数据预处理",
      "模型评估优化",
      "多框架支持",
      "训练过程可视化"
    ],
        image: "/mxxl.png"
  },
  {
    id: 3,
    title: "智能方案",
    description: "目标计数 | 热力图 | 速度估算 | 距离计算 | 目标模糊 | 目标裁剪 | 队列管理 | 停车管理 | 视觉安防 | 健身监测",
    fullDescription: "基于计算机视觉技术的智能分析方案，提供目标计数、热力图生成、速度估算、距离计算、目标模糊、目标裁剪、队列管理、停车管理、视觉安防、健身监测等十余种功能，支持图片和视频两种输入方式，广泛应用于安防监控、城市治理、智慧交通、健身运动等多个场景。",
    icon: Layers,
    color: "from-indigo-400 to-blue-500",
    features: [
      "目标计数",
      "热力图生成",
      "速度估算",
      "距离计算",
      "目标模糊",
      "目标裁剪",
      "队列管理",
      "停车管理",
      "视觉安防",
      "健身监测"
    ],
    image: "/product_znfa.png"
  },
  {
    id: 4,
    title: "数据标注",
    description: "多类型 / 高质量 / 规模化",
    fullDescription: "提供专业的数据标注服务，涵盖图像、文本、语音、视频等多种数据类型，由专业标注团队执行，严格质量管控，确保数据标注的高准确率。",
    icon: Database,
    color: "from-violet-400 to-purple-500",
    features: [
      "多类型数据标注",
      "专业标注团队",
      "严格质量审核",
      "大规模产能",
      "数据隐私保护",
      "快速交付"
    ],
        image: "/znbz.png"

  }
];

const productImages = [
  // {
  //   id: 1,
  //   src: '/products.png',
  //   title: 'AI产品体系',
  //   description: '四大AI核心产品，覆盖资产核验、监控稽核、视觉分析、智能对话',
  //   category: 'AI应用'
  // },
  // {
  //   id: 2,
  //   src: '/product_znfa.png',
  //   title: '智能方案',
  //   description: '',
  //   category: '智能方案'
  // }
];

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 relative">
      <ThreeDBackground />
      <div className="relative z-10">
      <Navigation />
      <main className="flex-1 pt-20">
        {/* Hero section */}
        <section className="relative py-20 overflow-hidden section-3d bg-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="gradient-text">核心产品</span>
              </h1>
              <p className="text-lg text-slate-600">
                4大AI产品系统
              </p>
            </div>
          </div>
        </section>

        {/* Products detail section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="space-y-20">
              {products.map((product, index) => {
                const Icon = product.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={product.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className={isEven ? "order-1" : "order-2"}>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${product.color} p-0.5`}>
                            <div className="w-full h-full bg-white rounded-md flex items-center justify-center">
                              <Icon className="w-8 h-8 text-blue-600" />
                            </div>
                          </div>
                          <h2 className="text-3xl font-bold text-slate-900">{product.title}</h2>
                        </div>

                        <p className="text-lg text-slate-600 leading-relaxed">
                          {product.fullDescription}
                        </p>

                        <div className="space-y-3">
                          <h3 className="font-semibold text-blue-600">主要特性</h3>
                          <ul className="space-y-2">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                <span className="text-slate-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Visual element */}
                    <div className={`relative h-80 hidden md:flex items-center justify-center ${isEven ? "order-2" : "order-1"}`}>
                      {product.image ? (
                        <img src={product.image} alt={product.title} className="w-full h-full object-contain rounded-lg" />
                      ) : (
                        <>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`absolute w-72 h-72 bg-gradient-to-br ${product.color} rounded-full blur-3xl opacity-20 animate-pulse`}></div>
                            <div className={`absolute w-48 h-48 border-2 border-${product.color.split(' ')[1].split('-')[0]}-500/30 rounded-full animate-spin`} style={{ animationDuration: "20s" }}></div>
                          </div>
                          <div className="relative z-10 text-center">
                            <div className={`text-6xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                              {product.id}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Product showcase images */}
        <section className="py-20 bg-slate-50/60">
          <div className="container">
            <ImageGallery images={productImages} title="产品技术展示" />
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </div>
  );
}
