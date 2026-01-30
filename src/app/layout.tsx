import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import { LanguageProvider } from "@/components/LanguageProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.shortName,
    template: `%s | ${site.shortName}`,
  },
  description: site.descriptionShort,
  openGraph: {
    title: site.shortName,
    description: site.descriptionShort,
    url: site.url,
    siteName: site.shortName,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans">
        <LanguageProvider>
          <Navbar />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
