import { Poppins, Merriweather } from "next/font/google";
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
});
export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

