import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bryan Kang - Designer + Engineer",
  description: "Bryan Kang's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-950 text-gray-50 ">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
