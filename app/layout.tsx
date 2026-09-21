import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoinDashboard",
  description: "A Coin Dashboard system",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body >{children}</body>
    </html>
  );
}
