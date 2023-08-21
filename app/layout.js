import "./globals.css";
import { Poppins, Merriweather } from "next/font/google";
<link
  href="https://fonts.cdnfonts.com/css/sweet-sans-pro"
  rel="stylesheet"
></link>;
import { Header } from "../components/Header/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });
// const sweetsanspro = SweetSansPro({ subsets: ["heavy"], weight: [""] });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const metadata = {
  title: "Local Low App",
  description: "Application for goverment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${merriweather.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
