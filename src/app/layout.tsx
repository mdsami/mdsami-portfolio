import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/app/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Sami | Software Engineer & DevOps Architect",
  description:
    "Md Sami — Software Engineer, Founder & CEO at AppifyDevs, and DevOps/Cloud Architect. Building AI-driven SaaS, resilient Kubernetes infrastructure, and modern full-stack applications.",
  keywords: [
    "Md Sami",
    "Software Engineer",
    "DevOps Architect",
    "Cloud Engineer",
    "Founder AppifyDevs",
    "Next.js",
    "Kubernetes",
    "AWS",
    "Azure",
    "Flutter",
    "SaaS",
  ],
  openGraph: {
    title: "Md Sami | Software Engineer & DevOps Architect",
    description:
      "Building AI-driven SaaS, resilient Kubernetes infrastructure, and modern full-stack applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-zinc-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
