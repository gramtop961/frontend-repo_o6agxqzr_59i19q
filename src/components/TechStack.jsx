import { motion } from 'framer-motion';
import { Cpu, Database, GitBranch, ShieldCheck, Terminal } from 'lucide-react';

const tools = [
  { name: 'Android AOSP', icon: Cpu, note: 'ROM base & frameworks' },
  { name: 'KernelSU', icon: ShieldCheck, note: 'Kernel mods & security' },
  { name: 'Git & Gerrit', icon: GitBranch, note: 'Code review & CI' },
  { name: 'Clang/LLVM', icon: Terminal, note: 'Optimized toolchains' },
  { name: 'MongoDB', icon: Database, note: 'Telemetry & stats' },
];

export default function TechStack() {
  return (
    <section id="stack" className="w-full bg-gradient-to-b from-black to-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="font-geist text-3xl font-semibold tracking-tight md:text-4xl">Build Stack</h2>
          <p className="mt-2 max-w-2xl text-white/60">
            A tight toolkit focused on reproducible, high-performance Android builds.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-fuchsia-500/0 to-indigo-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-black">
                  <t.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{t.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{t.note}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
