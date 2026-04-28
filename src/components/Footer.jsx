import Link from 'next/link';
import Image from 'next/image';
import logo from '@/asesst/logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-950">
      {/* Subtle Gradient Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="pixgen logo"
                width={32}
                height={32}
                className="brightness-200"
              />
              <h2 className="text-xl font-semibold tracking-tight text-white">
                pixgen
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Create production-ready AI visuals in seconds. Built for speed,
              scale, and creativity.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/generate" className="hover:text-white transition">
                  Generate
                </Link>
              </li>
              <li>
                <Link
                  href="/all-photos"
                  className="hover:text-white transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Block */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Start creating</h3>
            <p className="text-sm text-gray-400">
              Generate your first AI image today.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} pixgen. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
