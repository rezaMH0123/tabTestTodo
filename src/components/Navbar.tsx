"use client";

import React, { Dispatch, SetStateAction } from "react";

type NavbarProps = {
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
};

const Navbar = ({ tab, setTab }: NavbarProps) => {
  return (
    <nav className="flex gap-x-4 border-b-2 border-gray-300">
      <div
        onClick={() => setTab(1)}
        className={`cursor-pointer p-2 ${tab === 1 && `navActive`}`}
      >
        All
      </div>
      <div
        onClick={() => setTab(2)}
        className={`cursor-pointer p-2 ${tab === 2 && `navActive`}`}
      >
        Active
      </div>
      <div
        onClick={() => setTab(3)}
        className={`cursor-pointer p-2 ${tab === 3 && `navActive`}`}
      >
        Completed
      </div>
    </nav>
  );
};

export default Navbar;
