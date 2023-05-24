"use client";

import { User } from "@prisma/client";

import Container from "../container";
import Logo from "./logo";
import Search from "./search";
import UserMenu from "./usermenu";

import { SafeUser } from "@/app/types";

// we are using SafeUser because it helps reduce the risk of hydration when passing dateTime details

interface NavbarProps {
  currentUser?: SafeUser | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  console.log("this is the current user", currentUser)

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0
            ">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
