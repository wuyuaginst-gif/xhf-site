import { motion } from "framer-motion";

// Abstract Tech Background Component
export function AbstractBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient mesh */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 20% 30%, #3B82F615 0%, transparent 50%),
                       radial-gradient(circle at 80% 70%, #38BDF815 0%, transparent 50%),
                       radial-gradient(circle at 50% 50%, #ffffff 0%, transparent 70%)`,
        }}
      />

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,100 Q400,50 800,100 T1600,100"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          animate={{
            d: [
              "M0,100 Q400,50 800,100 T1600,100",
              "M0,120 Q400,80 800,120 T1600,120",
              "M0,100 Q400,50 800,100 T1600,100",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            y: [null, Math.random() * -100 + "px"],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}

// Tech Pattern Overlay
export function TechPattern() {
  return (
    <div
      className="absolute inset-0 opacity-5 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
      }}
    />
  );
}

// Glowing Orb Effect
export function GlowingOrb({
  color = "#3B82F6",
  size = 400,
  delay = 0,
}: {
  color?: string;
  size?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay }}
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
        filter: "blur(60px)",
      }}
    />
  );
}

// Minimal Card Image Placeholder
export function CardPlaceholder({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm p-8 hover:border-blue-300 hover:shadow-md transition-all duration-500">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-sky-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon container */}
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-sky-100 rounded-2xl blur-xl" />
        <div className="relative w-full h-full rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500">{description}</p>

      {/* Hover arrow */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute bottom-8 right-8"
      >
        <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
          <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

// Abstract Image Component with hover effect
export function AbstractImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
    </motion.div>
  );
}

// Stats Card Component (Figma style)
export function StatsCard({
  value,
  label,
  trend,
}: {
  value: string;
  label: string;
  trend?: string;
}) {
  return (
    <div className="group relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-all duration-300 hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
          {value}
        </span>
        {trend && (
          <span className="text-xs text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full">
            {trend}
          </span>
        )}
      </div>
      <p className="text-sm text-slate-500">{label}</p>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-sky-50/0 group-hover:from-blue-50/30 group-hover:to-sky-50/30 transition-all duration-500" />
    </div>
  );
}

// Modern Button (Figma style)
export function ModernButton({
  children,
  variant = "primary",
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative px-6 py-3 rounded-xl font-medium transition-all duration-300
        ${
          variant === "primary"
            ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
            : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-blue-600"
        }
      `}
    >
      {children}
    </motion.button>
  );
}

// Section Divider
export function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-12">
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent flex-1 max-w-xs" />
      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent flex-1 max-w-xs" />
    </div>
  );
}

// Feature Grid Item
export function FeatureItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative p-6 rounded-2xl bg-white shadow-sm border border-slate-200 hover:border-blue-300 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <span className="text-5xl font-bold text-slate-100 group-hover:text-blue-100 transition-colors">
          {number}
        </span>
        <div>
          <h4 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h4>
          <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Animated Progress Bar
export function ProgressBar({
  value,
  max = 100,
  label,
  color = "#3B82F6",
}: {
  value: number;
  max?: number;
  label: string;
  color?: string;
}) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-slate-600">{label}</span>
        <span className="text-slate-500">{value}%</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}
