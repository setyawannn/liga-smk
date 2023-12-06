import { Roboto, DM_Sans } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700"],
});

export const DMSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-mdsans",
  weight: ["200", "300", "400", "500", "600", "700"],
});
