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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('mdsami-theme');var l=localStorage.getItem('mdsami-locale');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}if(l==='en'||l==='de'||l==='bn'){document.documentElement.lang=l;}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
