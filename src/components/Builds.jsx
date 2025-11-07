import { motion } from 'framer-motion';
import { Download, Shield, Zap } from 'lucide-react';

const builds = [
  {
    name: 'NebulaOS 15 (Pixel 6 Pro) ',
    date: 'Oct 2025',
    features: ['Kernel optimizations', 'Battery deep-tuning', 'SafetyNet pass'],
    link: '#',
  },
  {
    name: 'QuantumDroid 14 (Poco F5) ',
    date: 'Aug 2025',
    features: ['Bloatless system', 'GPU governors', 'Thermal profiles'],
    link: '#',
  },
  {
    name: 'AuroraUI 14.1 (OnePlus 7T) ',
    date: 'May 2025',
    features: ['Smooth animations', 'Audio DSP tweaks', 'High FPS unlock'],
    link: '#',
  },
];

export default function Builds() {
  return (
    <section id="builds" className="relative w-full bg-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-geist text-3xl font-semibold tracking-tight md:text-4xl">
              Signature Builds
            </h2>
            <p className="mt-2 text-white/60">Stable. Fast. Built with love for power users.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {builds.map((b, i) => (
            <motion.article
              key={b.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-fuchsia-500/0 to-indigo-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

              <h3 className="text-lg font-semibold">{b.name}</h3>
              <p className="mt-1 text-sm text-white/50">{b.date}</p>

              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {b.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-cyan-400" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href={b.link}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-black transition hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <Download className="h-4 w-4" /> Download
                </a>
                <span className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-xs text-white/60">
                  <Shield className="h-3.5 w-3.5 text-green-400" /> Verified
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
