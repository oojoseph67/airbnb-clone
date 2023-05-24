import { Nunito } from "next/font/google";
import "./globals.css";

import Navbar from "./components/narbar/navbar";
import ClientOnly from "./components/clientOnly";
import Modals from "./components/modals/modals";
import RegisterModal from "./components/modals/registerModal";
import LoginModal from "./components/modals/loginModal";
import ToasterProvider from "./providers/toasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
  title: "AirBnB",
  description: "AirBnB Clone By mcQu33n",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  
  const currentUser = await getCurrentUser()
  
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
