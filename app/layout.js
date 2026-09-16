import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Valerie Gonzalez",
  description: "Content strategy, taxonomy, and content operations.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
            <body className="min-h-full flex flex-col">
                <nav className="mx-auto flex w-full max-w-2xl justify-between px-6 py-6 text-sm">
          <a href="/" className="font-medium transition-colors hover:text-purple-800">
            Valerie Gonzalez
          </a>
          <span className="space-x-4 text-neutral-600">
            <a href="/work" className="transition-colors hover:text-purple-800">Work</a>
            <a href="/about" className="transition-colors hover:text-purple-800">About</a>
          </span>
        </nav>
        {children}
      </body>
    </html>
  );
}
