import { HeaderBorder } from "@/components/header-border";
import {
  EnvelopeClosedIcon,
  FileTextIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bryan Kang (Designer + Engineer)",
  description: "Bryan Kang's portfolio",
  openGraph: {
    title: "Bryan Kang (Designer + Engineer)",
    description: "Bryan Kang's portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-950 text-gray-50">
      <body className={`pb-20 ${inter.className}`}>
        <header className="fixed z-50 h-12 w-full sm:h-24">
          <div className="pointer-events-none absolute bottom-[-75%] left-0 right-0 top-0 backdrop-blur-md gradient-mask-b-0" />
          <div className="pointer-events-none absolute bottom-[-75%] left-0 right-0 top-0 backdrop-blur-md gradient-mask-b-0" />
          <div className="relative h-full px-5 sm:px-6">
            <div className="relative mx-auto h-full max-w-[960px]">
              <div className="flex h-full items-center justify-between">
                <nav>
                  <Link href="/" className="text-white">
                    Bryan Kang
                  </Link>
                </nav>
                <div className="flex items-center gap-1 sm:gap-3">
                  <Link
                    href="mailto:bryankang33@gmail.com"
                    className="inline-flex items-center justify-center gap-1 p-1 text-xs text-gray-400 transition-colors duration-100 hover:text-gray-200"
                  >
                    <EnvelopeClosedIcon width={11} height={11} />
                    Email
                  </Link>
                  <Link
                    href="https://linkedin.com/in/bryan-kang-178480141"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-1 p-1 text-xs text-gray-400 transition-colors duration-100 hover:text-gray-200"
                  >
                    <LinkedInLogoIcon width={11} height={11} />
                    LinkedIn
                  </Link>
                  <Link
                    href="/bryan_resume.pdf"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-1 p-1 text-xs text-gray-400 transition-colors duration-100 hover:text-gray-200"
                  >
                    <FileTextIcon width={11} height={11} />
                    Resume
                  </Link>
                </div>
              </div>
              <HeaderBorder />
            </div>
          </div>
        </header>
        <div className="pt-12 sm:pt-24">{children}</div>
      </body>
    </html>
  );
}
