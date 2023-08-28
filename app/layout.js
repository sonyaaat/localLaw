import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Local Low App",
  description: "Application for goverment",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
