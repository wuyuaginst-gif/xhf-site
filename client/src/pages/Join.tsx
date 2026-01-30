import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Briefcase, Users } from "lucide-react";

const positions = [
  {
    id: 1,
    title: "高级Java开发工程师",
    department: "技术部",
    location: "武汉",
    type: "全职",
    salary: "15k-25k",
    requirements: [
      "5年以上Java开发经验",
      "精通Spring、MyBatis等框架",
      "有大型项目开发经验",
      "熟悉微服务架构"
    ]
  },
  {
    id: 2,
    title: "Python数据分析师",
    department: "大数据部",
    location: "武汉",
    type: "全职",
    salary: "12k-20k",
    requirements: [
      "3年以上Python开发经验",
      "精通数据分析和可视化",
      "有机器学习项目经验",
      "熟悉Spark或Hadoop"
    ]
  },
  {
    id: 3,
    title: "区块链开发工程师",
    department: "区块链部",
    location: "武汉",
    type: "全职",
    salary: "18k-30k",
    requirements: [
      "3年以上区块链开发经验",
      "精通Solidity或其他智能合约语言",
      "有DApp开发经验",
      "了解共识机制和密码学"
    ]
  },
  {
    id: 4,
    title: "产品经理",
    department: "产品部",
    location: "武汉",
    type: "全职",
    salary: "15k-25k",
    requirements: [
      "5年以上产品经理经验",
      "有B2B或B2C产品经验",
      "优秀的沟通和协调能力",
      "了解金融或政务行业优先"
    ]
  },
  {
    id: 5,
    title: "前端开发工程师",
    department: "技术部",
    location: "武汉",
    type: "全职",
    salary: "12k-20k",
    requirements: [
      "3年以上前端开发经验",
      "精通React或Vue框架",
      "有大型项目开发经验",
      "了解性能优化和SEO"
    ]
  },
  {
    id: 6,
    title: "系统架构师",
    department: "技术部",
    location: "武汉",
    type: "全职",
    salary: "20k-35k",
    requirements: [
      "8年以上系统开发经验",
      "有架构设计经验",
      "精通分布式系统设计",
      "有大型项目交付经验"
    ]
  }
];

const benefits = [
  { title: "竞争力薪酬", description: "行业竞争力的薪资待遇和绩效奖励" },
  { title: "完善福利", description: "五险一金、带薪年假、节日福利等" },
  { title: "发展空间", description: "清晰的职业发展路径和晋升机制" },
  { title: "学习机会", description: "定期培训、技术分享和外部交流" },
  { title: "工作环境", description: "现代化办公环境和舒适的工作氛围" },
  { title: "团队文化", description: "开放包容的团队文化和良好的人际关系" }
];

export default function Join() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
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
                <span className="gradient-text">加入我们</span>
              </h1>
              <p className="text-lg text-foreground/70">
                与我们一起创造科技未来，共同成长
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="gradient-text">员工福利</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="tech-card text-center">
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-foreground/70 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Positions */}
        <section className="py-20 bg-slate-900/50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="gradient-text">招聘职位</span>
            </h2>
            <div className="space-y-4">
              {positions.map((position) => (
                <div key={position.id} className="tech-card group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <div className="flex items-center gap-1 text-sm text-foreground/70">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-foreground/70">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                        <span className="px-2 py-1 rounded text-xs bg-cyan-500/20 text-cyan-300">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{position.salary}</div>
                      <p className="text-xs text-foreground/60">月薪</p>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="border-t border-cyan-500/10 pt-4">
                    <h4 className="font-semibold text-sm mb-3">岗位要求：</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply button */}
                  <div className="mt-4 flex justify-end">
                    <button className="px-6 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 hover:border-cyan-400 transition-all">
                      立即申请
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">
                对我们感兴趣？
              </h2>
              <p className="text-lg text-foreground/70">
                如果您没有找到合适的职位，欢迎向我们投递简历。我们期待与优秀的人才合作！
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a href="mailto:hbxhf@hbxhf.com.cn" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-accent text-background font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                  投递简历
                </a>
                <a href="tel:02787771732" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-cyan-500/50 text-foreground font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300">
                  联系我们
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
