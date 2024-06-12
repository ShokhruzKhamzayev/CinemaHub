import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/themeProvider";
import { cn } from "@/lib/utils";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import SonnerWithThemes from "@/components/ui/sonnerWithThemes";
import NextTopLoader from "nextjs-toploader";
import AuthProvider from "@/providers/AuthProvider";
import BgEffects from "@/components/shared/bgEffects";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(poppins.className, 'bg-bg dark:bg-bg-dark text-text dark:text-text-dark')}>
        <Providers>
          <AuthProvider>
            <NextTopLoader showSpinner={false} color="#2313f7" />
            <SonnerWithThemes />
            <Header />
            {children}
            <Footer />
          </AuthProvider>
          <BgEffects />
        </Providers>
      </body>
    </html>
  );
}
