import { Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="font-geist text-xl font-semibold">Work with Jeyz</h3>
            <p className="mt-1 text-white/60">Custom ROMs, kernel tuning, and performance consulting.</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@jeyz.dev"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" /> hello@jeyz.dev
            </a>
            <a
              href="https://twitter.com/" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <Twitter className="h-4 w-4" />
              <span className="hidden sm:inline">Twitter</span>
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Jeyz • Crafted with precision and a love for speed
        </p>
      </div>
    </footer>
  );
}
