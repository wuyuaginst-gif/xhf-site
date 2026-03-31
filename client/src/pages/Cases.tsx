import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import ImageGallery from "@/components/ImageGallery";

const cases = [
  // {
  //   id: 1,
  //   title: "智慧金融平台建设",
  //   category: "金融科技",
  //   description: "为某大型金融机构打造的智慧金融平台，实现了金融产品的全面数字化管理和风险控制的智能化。",
  //   results: ["风险预警准确率提升85%", "业务处理效率提升60%", "客户满意度提升75%"],
  //   image: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
  // },
  // {
  //   id: 2,
  //   title: "公安大数据平台",
  //   category: "公安信息化",
  //   description: "为某省级公安部门建设的大数据平台，整合了全省警务数据，实现了情报分析和案件追踪的智能化。",
  //   results: ["案件破获率提升45%", "警情响应时间减少70%", "数据查询效率提升80%"],
  //   image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
  // },
  // {
  //   id: 3,
  //   title: "智慧城市管理系统",
  //   category: "城市管理",
  //   description: "为某地级市打造的智慧城市管理系统，涵盖城市管理、公共服务、产业发展等多个领域。",
  //   results: ["城市管理效率提升55%", "公众满意度提升68%", "产业发展支持力度提升40%"],
  //   image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
  // },
  // {
  //   id: 4,
  //   title: "区块链应用落地",
  //   category: "区块链",
  //   description: "为某企业开发的区块链应用系统，实现了供应链的全面透明化和交易的安全化。",
  //   results: ["交易成本降低30%", "交易安全性提升99%", "供应链透明度提升90%"],
  //   image: "bg-gradient-to-br from-pink-500/20 to-red-500/20"
  // },
  // {
  //   id: 5,
  //   title: "医疗信息化建设",
  //   category: "医疗健康",
  //   description: "为某医疗机构建设的信息化系统，实现了患者信息的数字化管理和医疗服务的智能化。",
  //   results: ["患者就诊效率提升50%", "医疗质量提升35%", "患者满意度提升72%"],
  //   image: "bg-gradient-to-br from-green-500/20 to-cyan-500/20"
  // },
  // {
  //   id: 6,
  //   title: "交通运输管理平台",
  //   category: "交通运输",
  //   description: "为某城市交通部门打造的管理平台，实现了交通流量的实时监控和智能调度。",
  //   results: ["交通拥堵时间减少40%", "出行效率提升55%", "安全事故减少65%"],
  //   image: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
  // }
];

export default function Cases() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
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
                <span className="gradient-text">解决方案</span>
              </h1>
              <p className="text-lg text-slate-600">
                为各行业客户提供的创新解决方案和卓越成果
              </p>
            </div>
          </div>
        </section>

        {/* Cases grid */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map((caseItem) => (
                <div key={caseItem.id} className="tech-card flex flex-col group">
                  {/* Image placeholder */}
                  <div className={`w-full h-48 rounded-lg ${caseItem.image} mb-4 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <span className="relative text-3xl font-bold text-white/30">{caseItem.id}</span>
                  </div>

                  {/* Category badge */}
                  <div className="mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                      {caseItem.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {caseItem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-4 flex-grow">
                    {caseItem.description}
                  </p>

                  {/* Results */}
                  <div className="space-y-2 pt-4 border-t border-blue-100">
                    {caseItem.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        {result}
                      </div>
                    ))}
                  </div>

                  {/* View more */}
                  <div className="mt-4 flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                    <span className="text-sm font-medium">了解详情</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case showcase images */}
        <section className="py-20 bg-slate-50/60">
          <div className="container">
            <ImageGallery images={[
              // {
              //   id: 1,
              //   src: '/images/eoetVvkixwgI.png',
              //   title: '金融案例数据可视化',
              //   description: '为金融客户打造的数据可视化仪表盘，实时展示业务指标和风险预警',
              //   category: '金融科技'
              // },
              // {
              //   id: 2,
              //   src: '/images/6EZH0skeG1LN.png',
              //   title: '公安大数据分析',
              //   description: '公安部门的大数据分析平台，支持情报研判和案件追踪',
              //   category: '公安信息化'
              // },
              // {
              //   id: 3,
              //   src: '/images/Z3xdmMf7sd7O.jpg',
              //   title: '智慧城市规划',
              //   description: '城市规划和管理的智能化解决方案，提升城市治理效能',
              //   category: '智慧城市'
              // }
              {
                id: 1,
                src: '/images/68.png',
                title: 'AI资产核验与风控证据链系统',
                description: 'AI资产核验与风控证据链系统',
                category: '金融'
              },
              {
                id: 2,
                src: '/images/70.png',
                title: 'AI监控与合规稽核平台',
                description: 'AI监控与合规稽核平台',
                category: '电商'
              },
              {
                id: 3,
                src: '/images/71.png',
                title: 'AI智能视觉分析监督系统',
                description: 'AI智能视觉分析监督系统，提升城市治理效能',
                category: '智慧城市'
              }
            ]} title="案例展示" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
