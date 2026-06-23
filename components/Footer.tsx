import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/6 px-6 py-10 mt-auto">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image src="/icon.png" alt="LedgUp" width={28} height={28} className="rounded-lg opacity-80" />
          <span className="text-brand-gold font-semibold text-base">LedgUp</span>
        </div>

        <p className="text-brand-muted text-sm text-center">
          © {new Date().getFullYear()} LedgUp. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a href="/pricing" className="text-brand-subtle text-sm hover:text-white transition-colors">
            Pricing
          </a>
          <a href="/privacy" className="text-brand-subtle text-sm hover:text-white transition-colors">
            Privacy
          </a>
          <a href="/terms" className="text-brand-subtle text-sm hover:text-white transition-colors">
            Terms
          </a>
          <a
            href="mailto:hello@ledgup.app"
            className="text-brand-subtle text-sm hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
