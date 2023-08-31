import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Header from "@/components/Header/Header";
import BtnUp from "@/components/BtnUp/BtnUp";

export const metadata = {
  title: "Local Low App",
  description: "Application for goverment",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BtnUp />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
