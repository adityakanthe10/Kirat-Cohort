import React from "react";
import { Button } from "./button";

const Navbar = () => {
  return (
    <div className="w-full h-20 sticky top-0 flex justify-center items-center pt-4">
      <div className="container mx-auto px-4 flex justify-center items-center h-full">
        <ul className="flex gap-x-40 text-white">
          <li>
            <Button label="Home" />
          </li>
          <li>
            <Button label="Server Page" />
          </li>
          <li>
            <Button label="Client Page" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
