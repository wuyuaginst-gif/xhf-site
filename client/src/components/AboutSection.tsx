import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Award, Users, TrendingUp } from "lucide-react";

const features = [
  "云计算、大数据、物联网、人工智能、区块链等前沿技术",
  "政府、金融、公安、医疗、交通五大领域深度服务",
  "完整的解决方案和专业的行业应用",
  "及时的全方位技术支持和服务",
];

const stats = [
  { value: "15+", label: "年行业经验", icon: Award },
  { value: "200+", label: "企业客户", icon: Users },
  { value: "50+", label: "成功案例", icon: TrendingUp },
];

export default function AboutSection() {
  return (
    <section className="py-24 relative overflow-hidden section-3d">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">ABOUT US</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                <span className="hero-title">关于鑫恒福</span>
              </h2>
              <div className="accent-line w-24" />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted leading-relaxed"
            >
              湖北鑫恒福科技发展有限公司是一家从事计算机信息系统集成、智慧金融互联网平台等自主研发、生产、销售、运营及服务于一体的科技型企业。
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted leading-relaxed"
            >
              公司致力于向客户提供完整的解决方案、专业的行业应用、及时的全方位服务，将紧跟世界主流先进技术演进方向，不断开拓创新，实现成为国内一流、世界领先的IT服务提供商的目标。
            </motion.p>

            {/* Features list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4 pt-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Stats cards */}
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.15 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="glass rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold font-display bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative circles */}
            <div className="absolute -z-10 inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute w-96 h-96 border border-cyan-500/10 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                }}
                className="absolute w-72 h-72 border border-purple-500/10 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 },
                }}
                className="absolute w-48 h-48 border border-cyan-400/10 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
