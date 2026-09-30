import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M. Faiez Azam — Senior Backend Engineer",
  description: "Portfolio of M. Faiez Azam, a Senior Backend Engineer in Lahore with 5+ years of experience in Node.js, TypeScript, NestJS, PostgreSQL, and Stripe integrations.",
  authors: [{ name: "M. Faiez Azam" }],
  openGraph: {
    title: "M. Faiez Azam — Senior Backend Engineer",
    description: "Explore my backend engineering projects, experience, skills, and client reviews.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#1A3C5E" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
