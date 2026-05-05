import "./globals.css";
import NavBar from "../components/nav-bar";
import localFont from "next/font/local";
import Footer from "/components/footer";
import ScrollReset from "./scroll-reset";
import ScrollUp from "../components/scroll-up";

export const metadata = {
  title: "Crypto Lab | UCT",
  description: "Research into Cryptococcal meningitis."
};

// Load local fonts
const quicksand = localFont({
  src: "../public/fonts/Quicksand-VariableFont_wght.ttf",
  variable: "--font-quicksand"
});

const montserrat = localFont({
  src: [
    {
      path: "../public/fonts/Montserrat-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal"
    },
    {
      path: "../public/fonts/Montserrat-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic"
    }
  ],
  variable: "--font-montserrat"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${montserrat.variable} antialiased`}>
        <NavBar />
        <ScrollReset />
        <ScrollUp />
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
