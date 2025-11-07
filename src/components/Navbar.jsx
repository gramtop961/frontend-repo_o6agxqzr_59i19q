import { Github, Home, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-4 py-2.5 backdrop-blur-xl">
          <a href="#" className="inline-flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-black">
              <Star className="h-4 w-4" />
            </div>
            <span className="font-semibold tracking-tight text-white">Jeyz</span>
            <span className="ml-1 text-xs text-white/50">ROMs</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#stack" className="transition hover:text-white">Stack</a>
            <a href="#builds" className="transition hover:text-white">Builds</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              <span className="hidden md:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
