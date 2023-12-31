import { Navbar } from "@/components/navbar/Navbar@";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/Footer@";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "myGASstation",
  description: "an app to organize fx pedals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
