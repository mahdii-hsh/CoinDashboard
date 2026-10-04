import type { Metadata } from "next";
import "./globals.css";
import { MainQueryClientProvider } from "@/shared/providers";

export const metadata: Metadata = {
  title: "CoinDashboard",
  description: "A Coin Dashboard system",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <MainQueryClientProvider>
        <body>{children}</body>
      </MainQueryClientProvider>
    </html>
  );
}
