import Header from "@/components/Header/Header";
import "./globals.css";

export const metadata = {
  title: 'Local Low App',
  description: 'Application for goverment',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
     // className={`${poppins.className} ${merriweather.variable}`}
    //  className={poppins.className}
      >
         <Header/>
        {children}</body>
    </html>
  );
}
