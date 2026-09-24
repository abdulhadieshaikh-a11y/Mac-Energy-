import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mac Energy — Network Infrastructure & IT Systems",
  description:
    "Mac Energy delivers network infrastructure, cyber security, IT automation, ERP, IT audit, AI, computer lab setup, and hardware management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-base-900">
      <body className="font-body bg-base-900 text-ink-100 antialiased">
        {children}
      </body>
    </html>
  );
}
