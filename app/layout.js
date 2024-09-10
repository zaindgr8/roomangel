import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Header from "./components/header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Room Angel Foundation",
  description:
    "Empowering communities through sustainable housing and welfare initiatives. Join Room Angel Foundation in making a lasting impact by providing homes, support, and hope to those in need.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
