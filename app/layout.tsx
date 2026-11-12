import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

export const viewport: Viewport = {
  themeColor: "#06080d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://denuwansandeepa.me"),
  title: `${profile.displayName} | Full-Stack Web & Mobile Developer`,
  description: profile.tagline,
  keywords: [
    "Denuwan Sandeepa",
    "Full-Stack Developer",
    "Mobile Developer",
    "Next.js Developer",
    "React",
    "Flutter",
    "TypeScript",
    "Sri Lanka Developer",
    "Software Engineer",
    "Bright Solutions",
    "Dearo IT Solutions"
  ],
  authors: [{ name: profile.displayName, url: "https://github.com/denuwansandeepa" }],
  creator: profile.displayName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://denuwansandeepa.me",
    title: `${profile.displayName} | Full-Stack Web & Mobile Developer`,
    description: profile.tagline,
    siteName: `${profile.displayName} Portfolio`,
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: `${profile.displayName} - Full-Stack Developer`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.displayName} | Full-Stack Web & Mobile Developer`,
    description: profile.tagline,
    images: ["/images/hero.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen selection:bg-primary-500/30 selection:text-white font-sans">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
