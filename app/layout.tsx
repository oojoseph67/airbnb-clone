import { Nunito } from "next/font/google";
import "./globals.css";

import Navbar from "./components/narbar/navbar";
import ClientOnly from "./components/clientOnly";
import Modals from "./components/modals/modals";
import RegisterModal from "./components/modals/registerModal";
import ToasterProvider from "./providers/toasterProvider";

export const metadata = {
  title: "AirBnB",
  description: "AirBnB Clone By mcQu33n",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/> 
          <RegisterModal/>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
