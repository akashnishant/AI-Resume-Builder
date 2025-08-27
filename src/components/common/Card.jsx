import { motion } from "framer-motion";

function Card({ icon: Icon, title, subtitle, children, actions }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl bg-gray-900/80 p-5 shadow-lg ring-1 ring-white/5"
    >
      <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent blur-2xl" />
      <div className="mb-4 flex items-start gap-3">
        <div className="rounded-xl bg-gray-800 p-2.5">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          {subtitle && <p className="mt-0.5 text-xs text-gray-300">{subtitle}</p>}
        </div>
      </div>
      <div className="space-y-3">{children}</div>
      {actions && <div className="mt-4 flex flex-wrap gap-2">{actions}</div>}
    </motion.div>
  );
}

export default Card;