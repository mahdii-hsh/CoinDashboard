import type { Metadata } from "next";
import "./globals.css";
import { MainQueryClientProvider } from "@/shared/providers";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "CoinDashboard",
  description: "A Coin Dashboard system",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <MainQueryClientProvider>
        <body>{children}</body>
      </MainQueryClientProvider>
    </html>
  );
}
