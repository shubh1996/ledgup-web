import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LedgUp — Intelligent Expense Management",
  description:
    "Track spending, split family expenses, manage budgets, and stay on top of loans — all in one place. Coming to iOS & Android.",
  openGraph: {
    title: "LedgUp — Intelligent Expense Management",
    description:
      "Track spending, split family expenses, manage budgets, and stay on top of loans — all in one place. Coming to iOS & Android.",
    images: [{ url: "/icon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
