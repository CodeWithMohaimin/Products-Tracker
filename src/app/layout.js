import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"], // Add the font weights you need
  variable: "--font-roboto-condensed", // Optional: Use in CSS
});

export const metadata = {
  title: "Products Tracker by CodeWithMohaimin",
  description: "This website was created to track how long the products we regularly use in our daily lives have been in use or how long their lifespan has lasted.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={robotoCondensed.variable}>
      <body>{children}</body>
    </html>
  );
}
