import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy — LedgUp",
  description: "How LedgUp collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">
      <header className="px-6 py-5 flex items-center justify-between max-w-3xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/icon.png" alt="LedgUp" width={28} height={28} className="rounded-lg" />
          <span className="text-brand-gold font-bold text-base">LedgUp</span>
        </Link>
        <Link href="/" className="text-brand-subtle text-sm hover:text-white transition-colors">← Back</Link>
      </header>

      <main className="flex-1 px-6 py-12 max-w-3xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-brand-muted text-sm mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-brand-subtle text-sm leading-7">

          <section>
            <h2 className="text-white font-semibold text-base mb-3">1. Who we are</h2>
            <p>LedgUp is a personal finance app built and operated by Shubh Mehta ("we", "us", "our"). We are based in India. You can contact us at <a href="mailto:hello@ledgup.app" className="text-brand-gold hover:underline">hello@ledgup.app</a>.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">2. What data we collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-white">Account data:</strong> Your name and email address when you sign up.</li>
              <li><strong className="text-white">Financial data:</strong> Expense transactions, account balances, budgets, and loans that you manually enter into the app. We do not connect to your bank or read your bank statements.</li>
              <li><strong className="text-white">Usage data:</strong> App interactions to improve the product (no third-party analytics SDKs).</li>
              <li><strong className="text-white">Device data:</strong> Device type and OS version for crash diagnostics only.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">3. How we use your data</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and operate the LedgUp service.</li>
              <li>To send transactional emails (magic link sign-in, waitlist confirmation).</li>
              <li>To process subscription payments via Razorpay.</li>
              <li>To respond to support requests.</li>
            </ul>
            <p className="mt-3">We do <strong className="text-white">not</strong> sell your data. We do <strong className="text-white">not</strong> use your data for advertising. We do <strong className="text-white">not</strong> share your financial data with any third party except as required to operate the service.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">4. Third-party services</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-white">Supabase</strong> — database and authentication (data stored in AWS ap-south-1, India region).</li>
              <li><strong className="text-white">Resend</strong> — transactional email delivery.</li>
              <li><strong className="text-white">Razorpay</strong> — payment processing. We do not store card details.</li>
              <li><strong className="text-white">Vercel</strong> — website hosting.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">5. Data retention</h2>
            <p>We retain your data for as long as your account is active. When you delete your account, all your data (expenses, accounts, budgets, loans, family data) is permanently deleted within 30 days.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">6. Your rights</h2>
            <p>You can request a copy of your data, correction of inaccurate data, or deletion of your account at any time by emailing <a href="mailto:hello@ledgup.app" className="text-brand-gold hover:underline">hello@ledgup.app</a> or using the Delete Account option in the app.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">7. Security</h2>
            <p>All data is encrypted in transit (TLS) and at rest. The app supports Face ID / Touch ID to prevent unauthorised access on your device.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">8. Children</h2>
            <p>LedgUp is not directed at children under 13. We do not knowingly collect data from children.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">9. Changes</h2>
            <p>We may update this policy. We will notify you via email or in-app notice for material changes.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">10. Contact</h2>
            <p>Questions? Email us at <a href="mailto:hello@ledgup.app" className="text-brand-gold hover:underline">hello@ledgup.app</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
