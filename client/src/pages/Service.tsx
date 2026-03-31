import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { HelpCircle, Zap, Shield, Users } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "技术咨询",
    description: "为客户提供专业的技术咨询服务，帮助企业规划信息化建设方案。",
    details: [
      "系统架构设计咨询",
      "技术选型指导",
      "性能优化建议",
      "安全防护方案"
    ]
  },
  {
    icon: Shield,
    title: "系统集成",
    description: "提供完整的系统集成服务，确保各系统之间的无缝协作。",
    details: [
      "系统集成设计",
      "集成开发实施",
      "数据迁移服务",
      "系统测试验收"
    ]
  },
  {
    icon: Users,
    title: "技术支持",
    description: "提供24/7的技术支持服务，确保系统稳定运行。",
    details: [
      "故障排查处理",
      "性能监控维护",
      "定期巡检服务",
      "应急响应支持"
    ]
  },
  {
    icon: HelpCircle,
    title: "培训服务",
    description: "为客户团队提供专业的技术培训，提升团队能力。",
    details: [
      "系统使用培训",
      "管理员培训",
      "开发人员培训",
      "定制化培训方案"
    ]
  }
];

const faqs = [
  {
    question: "鑫恒福科技提供哪些主要产品和服务？",
    answer: "我们主要提供智慧金融、智慧公安、智慧城市和区块链技术四大核心产品，以及完整的系统集成、技术咨询、技术支持等服务。"
  },
  {
    question: "如何联系鑫恒福科技获取技术支持？",
    answer: "您可以通过电话（027-87771732）、邮箱（hbxhf@hbxhf.com.cn）或访问我们的官网联系我们。我们提供24/7的技术支持服务。"
  },
  {
    question: "鑫恒福科技的系统是否支持定制开发？",
    answer: "是的，我们提供完整的定制开发服务。我们的技术团队可以根据您的具体需求，为您设计和开发符合业务需求的解决方案。"
  },
  {
    question: "实施一个项目通常需要多长时间？",
    answer: "项目周期根据项目规模和复杂度而定。小型项目通常需要1-3个月，中型项目3-6个月，大型项目可能需要6-12个月或更长时间。"
  },
  {
    question: "鑫恒福科技提供哪些安全保障？",
    answer: "我们采用业界领先的安全技术和管理措施，包括数据加密、访问控制、安全审计等，确保客户数据的安全性和隐私性。"
  },
  {
    question: "如何获得系统的免费演示或试用？",
    answer: "您可以联系我们的销售团队，我们会为您安排免费的产品演示或试用环境，让您更好地了解我们的产品。"
  }
];

export default function Service() {
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
                <span className="gradient-text">服务支持</span>
              </h1>
              <p className="text-lg text-slate-600">
                专业的技术团队为您提供全方位的服务支持
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="tech-card">
                    <Icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, didx) => (
                        <li key={didx} className="flex items-center gap-2 text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-slate-50/60">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="gradient-text">常见问题</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="tech-card">
                  <details className="group cursor-pointer">
                    <summary className="flex items-center justify-between font-bold text-lg hover:text-blue-600 transition-colors text-slate-900">
                      {faq.question}
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">
                需要帮助？
              </h2>
              <p className="text-lg text-slate-600">
                我们的技术团队随时准备为您服务。请通过以下方式联系我们。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a href="tel:02787771732" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300">
                  电话咨询
                </a>
                <a href="mailto:hbxhf@hbxhf.com.cn" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-blue-200 text-blue-600 font-semibold hover:bg-blue-50 hover:border-blue-400 transition-all duration-300">
                  发送邮件
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
