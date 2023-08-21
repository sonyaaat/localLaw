import './globals.css'
import {Poppins,Merriweather} from 'next/font/google'

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
      >{children}</body>
    </html>
  )
}
