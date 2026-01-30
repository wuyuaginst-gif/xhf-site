import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Globe, Shield, Building2, Link as LinkIcon, TrendingUp, Zap, CheckCircle2 } from "lucide-react";
import ThreeDBackground from "@/components/ThreeDBackground";
import ImageGallery from "@/components/ImageGallery";

const products = [
  {
    id: 1,
    title: "智慧金融",
    description: "建立在金融物联网基础上的完整解决方案",
    fullDescription: "智慧金融是建立在金融物联网基础上，通过金融云，使金融行业在业务流程、业务开拓和客户服务等方面得到全面的智慧提升，实现金融业务、管理、安防的智慧化。",
    icon: TrendingUp,
    color: "from-cyan-400 to-blue-500",
    features: [
      "金融产品智慧化管理",
      "风险控制和预警系统",
      "智能获客和营销平台",
      "全方位客户服务体系",
      "金融数据安全保护",
      "实时监控和分析"
    ]
  },
  {
    id: 2,
    title: "智慧公安",
    description: "大数据警务平台和公安信息化服务",
    fullDescription: "以警用地理信息技术为核心，构建社区警务、应急指挥、情报分析等领域创新型的解决方案，为公安信息化建设提供业务咨询、标准规范制定、治安、内保、系统集成等综合信息化服务。",
    icon: Shield,
    color: "from-blue-400 to-purple-500",
    features: [
      "社区警务管理系统",
      "应急指挥调度平台",
      "情报分析和研判",
      "警用地理信息系统",
      "案件管理和追踪",
      "实时警情监控"
    ]
  },
  {
    id: 3,
    title: "智慧城市",
    description: "信息化、工业化与城镇化深度融合",
    fullDescription: "实现信息化、工业化与城镇化深度融合，打造现代化城市解决方案。通过大数据、云计算等先进技术，为城市管理、公共服务、产业发展提供全面的智能化支撑。",
    icon: Building2,
    color: "from-purple-400 to-pink-500",
    features: [
      "城市大数据平台",
      "智能交通管理系统",
      "公共服务一体化",
      "城市安全监控网络",
      "环境监测和治理",
      "产业发展支持"
    ]
  },
  {
    id: 4,
    title: "区块链技术",
    description: "智能合约定制开发和应用落地",
    fullDescription: "鑫恒福基于区块链底层技术，提供智能合约定制开发服务，并可实现对应区块链应用的落地。根据您不同的业务需求，编写贴合所需应用场景的智能合约，并能通过智能合约构建出执行一定商业逻辑的区块链应用。",
    icon: LinkIcon,
    color: "from-pink-400 to-red-500",
    features: [
      "智能合约开发",
      "区块链应用设计",
      "分布式系统架构",
      "数据安全和隐私保护",
      "链上业务流程优化",
      "跨链互操作方案"
    ]
  }
];

const productImages = [
  {
    id: 1,
    src: '/images/J1XRScst0LGK.jpeg',
    title: '智慧金融架构',
    description: '完整的金融系统技术架构，支持高并发和实时交易处理',
    category: '智慧金融'
  },
  {
    id: 2,
    src: '/images/DoCpY3NAs91F.png',
    title: '金融大数据平台',
    description: '基于云原生的金融大数据分析平台，实现风险预警和智能决策',
    category: '智慧金融'
  },
  {
    id: 3,
    src: '/images/RFVGThAoUMzh.png',
    title: '金融数据全景',
    description: '企业级金融数据管理体系，覆盖采集、存储、分析全流程',
    category: '智慧金融'
  }
];

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative">
      <ThreeDBackground />
      <div className="relative z-10">
      <Navigation />
      <main className="flex-1 pt-20">
        {/* Hero section */}
        <section className="relative py-20 overflow-hidden gradient-tech">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="gradient-text">核心产品</span>
              </h1>
              <p className="text-lg text-foreground/70">
                为政府、金融、公安、医疗、交通等领域提供最前沿的整体解决方案
              </p>
            </div>
          </div>
        </section>

        {/* Products detail section */}
        <section className="py-20 bg-background">
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
                            <div className="w-full h-full bg-slate-900 rounded-md flex items-center justify-center">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <h2 className="text-3xl font-bold">{product.title}</h2>
                        </div>

                        <p className="text-lg text-foreground/80 leading-relaxed">
                          {product.fullDescription}
                        </p>

                        <div className="space-y-3">
                          <h3 className="font-semibold text-cyan-400">主要特性</h3>
                          <ul className="space-y-2">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                <span className="text-foreground/80">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Visual element */}
                    <div className={`relative h-80 hidden md:flex items-center justify-center ${isEven ? "order-2" : "order-1"}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`absolute w-72 h-72 bg-gradient-to-br ${product.color} rounded-full blur-3xl opacity-20 animate-pulse`}></div>
                        <div className={`absolute w-48 h-48 border-2 border-${product.color.split(' ')[1].split('-')[0]}-500/30 rounded-full animate-spin`} style={{ animationDuration: "20s" }}></div>
                      </div>
                      <div className="relative z-10 text-center">
                        <div className={`text-6xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                          {product.id}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Product showcase images */}
        <section className="py-20 bg-slate-900/50">
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
