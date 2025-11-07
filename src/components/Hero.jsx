import { motion } from 'framer-motion';
import { Github, Rocket, Star } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Glow backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600/30 via-cyan-400/20 to-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* Copy */}
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Star className="h-3.5 w-3.5 text-yellow-400" />
              <span>Futuristic • Interactive • Smooth</span>
            </div>

            <h1 className="font-geist text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Jeyz
              <span className="block bg-gradient-to-r from-cyan-300 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                Android Custom ROM Builder
              </span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              I craft high-performance, stable, and feature-rich Android builds. My focus is clean code, deep device optimization, and developer-first experiences.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#builds"
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 font-medium text-black shadow/50 shadow-cyan-500/10 transition hover:shadow-cyan-500/30"
              >
                <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                View Builds
              </a>
              <a
                href="https://github.com/" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-medium text-white/90 transition hover:border-cyan-400/40 hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        {/* Spline 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative h-[60vh] w-full md:h-[70vh]"
        >
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0" />
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* soft top gradient that doesn't block interaction */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
