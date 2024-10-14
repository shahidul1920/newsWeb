import { Navbar } from "@/components/Shared/Navbar";
import "./globals.css";
import { Footer } from "@/components/Shared/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <div className="container max-w-[1170px] mx-auto">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
