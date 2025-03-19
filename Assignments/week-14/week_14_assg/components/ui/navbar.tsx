import React from "react";
import { Button } from "./button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-20 sticky top-0 flex justify-center items-center pt-4">
      <div className="container mx-auto px-4 flex justify-center items-center h-full">
        <ul className="flex gap-x-40 text-white">
          <li>
            <Link href="/">
              <Button label="Home" />
            </Link>
          </li>
          <li>
            <Link href="static-page">
              <Button label="Server Page" />
            </Link>
          </li>
          <li>
            <Link href="/interactive-page">
              <Button label="Client Page" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
