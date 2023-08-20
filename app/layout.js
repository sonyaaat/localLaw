import './globals.css'
import {Poppins,Merriweather} from 'next/font/google'


const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500","600"] })
const merriweather=Merriweather({ subsets: ['latin'], weight: ["400", "700"] })
export const metadata = {
  title: 'Local Low App',
  description: 'Application for goverment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${merriweather.variable}`}>{children}</body>
    </html>
  )
}
