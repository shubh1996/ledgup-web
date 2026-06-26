import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Terms of Service — LedgUp",
  description: "Terms and conditions for using LedgUp.",
};

export default function TermsPage() {
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
        <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-brand-muted text-sm mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-brand-subtle text-sm leading-7">

          <section>
            <h2 className="text-white font-semibold text-base mb-3">1. Acceptance</h2>
            <p>By using LedgUp ("the app" or "the service"), you agree to these Terms of Service. If you do not agree, do not use the service. The service is operated by Shubh Mehta, India.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">2. Description of service</h2>
            <p>LedgUp is a personal finance management app that helps you track expenses, manage budgets, split bills, and monitor loans. The app does not connect to banks, read bank statements, or provide financial advice.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">3. Accounts</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You must provide a valid email address to create an account.</li>
              <li>You are responsible for maintaining the security of your account.</li>
              <li>You must be at least 13 years old to use LedgUp.</li>
              <li>One person may not maintain more than one free account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">4. Free trial and subscription</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>New users receive a free trial — 3 months for everyone, 6 months for waitlist members.</li>
              <li>After the trial, continued access to premium features requires a subscription at ₹99/month.</li>
              <li>Subscriptions are billed monthly and renew automatically until cancelled.</li>
              <li>You may cancel at any time. Access continues until the end of the current billing period.</li>
              <li>Payments are processed by Razorpay. We do not store your payment details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">5. Refunds</h2>
            <p>If you are not satisfied within the first 7 days of a paid subscription, contact us at <a href="mailto:hello@ledgup.app" className="text-brand-gold hover:underline">hello@ledgup.app</a> for a full refund. After 7 days, refunds are issued at our discretion.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">6. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Use the service for any unlawful purpose.</li>
              <li>Attempt to gain unauthorised access to any part of the service.</li>
              <li>Reverse engineer or attempt to extract the source code.</li>
              <li>Use the service to store or transmit malicious code.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">7. Your data</h2>
            <p>You own all financial data you enter into LedgUp. We do not claim any rights to it. See our <Link href="/privacy" className="text-brand-gold hover:underline">Privacy Policy</Link> for full details on how your data is handled.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">8. Disclaimers</h2>
            <p>LedgUp is provided "as is." We do not guarantee uninterrupted availability. The app provides financial tracking tools only — it does not constitute financial advice. Always consult a qualified financial advisor for investment decisions.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">9. Limitation of liability</h2>
            <p>To the maximum extent permitted by law, LedgUp shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service. Our total liability shall not exceed the amount you paid us in the 3 months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">10. Governing law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Mumbai, Maharashtra.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">11. Changes</h2>
            <p>We may update these terms. Continued use of the service after changes constitutes acceptance of the new terms.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">12. Contact</h2>
            <p>Questions? Email us at <a href="mailto:hello@ledgup.app" className="text-brand-gold hover:underline">hello@ledgup.app</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
