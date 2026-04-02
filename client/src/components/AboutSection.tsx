import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Play } from "lucide-react";
import { Link } from "wouter";

const features = [
  "云计算、大数据、物联网、人工智能、区块链等前沿技术",
  "政府、金融、公安、医疗、交通五大领域深度服务",
  "完整的解决方案和专业的行业应用支持",
  "及时的全方位技术支持与售后服务保障",
];

/* 参考力控科技: 2002年创立 / 20+分支机构 / 400+员工 */
const companyStats = [
  { number: "2010", unit: "年", desc: "公司创立" },
  { number: "15", unit: "+", desc: "年行业经验" },
  { number: "200", unit: "+", desc: "企业客户" },
  { number: "50", unit: "+", desc: "成功案例" },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-[0.04]" />

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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D8C]">关于鑫恒福</h2>
            <span className="text-sm text-[#0096D6] font-semibold tracking-widest uppercase mb-1">
              About Us
            </span>
          </div>
          <div className="w-16 h-1 bg-[#0096D6] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* 左侧：文字介绍 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* 副标题 */}
            <p className="text-xl font-semibold text-slate-800 leading-snug">
              工业软件产品及工业自动化解决方案提供商
            </p>

            <p className="text-slate-600 leading-relaxed">
              湖北鑫恒福科技发展有限公司是一家从事计算机信息系统集成、智慧金融互联网平台等自主研发、生产、销售、运营及服务于一体的科技型企业，聚焦智慧金融、智能视觉、智慧城市等领域管控一体化服务。
            </p>
            <p className="text-slate-600 leading-relaxed">
              公司致力于向客户提供完整的解决方案、专业的行业应用、及时的全方位服务，紧跟世界主流先进技术演进方向，深度赋能企业数字化转型与智能化升级，实现成为国内一流、世界领先的 IT 服务提供商的目标。
            </p>

            {/* 特性清单 */}
            <div className="space-y-3 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0096D6] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* 行动按钮 */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/about">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B3D8C] hover:bg-[#062D6E] text-white text-sm font-semibold rounded transition-colors group">
                  了解更多
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-[#0B3D8C] text-[#0B3D8C] hover:bg-blue-50 text-sm font-semibold rounded transition-colors">
                <Play className="w-4 h-4" />
                企业视频
              </button>
            </div>
          </motion.div>

          {/* 右侧：企业数字统计 - 参考力控科技风格 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* 统计数字网格 */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.desc}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-[#F5F7FA] border border-slate-200 rounded-lg p-6 text-center hover:border-[#0096D6] hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-end justify-center gap-1 mb-1">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-unit">{stat.unit}</span>
                  </div>
                  <div className="text-sm text-slate-500 font-medium">{stat.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* 企业核心价值横幅 */}
            <div className="bg-gradient-to-br from-[#0B3D8C] to-[#0D1B3E] rounded-lg p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <p className="text-[#7EC8E3] text-xs font-semibold tracking-widest uppercase mb-3">
                  Our Mission
                </p>
                <h3 className="text-xl font-bold mb-3">
                  立即联系鑫恒福专家团队
                </h3>
                <p className="text-white/70 text-sm mb-6">
                  为您的业务提供量身定制的数字化解决方案
                </p>
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0096D6] hover:bg-[#007AB8] text-white text-sm font-semibold rounded transition-colors">
                    立即注册
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
