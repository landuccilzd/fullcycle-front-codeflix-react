import React from "react";
import Image from "next/image";

const Logo = () => (
  <Image
    src="/logo.svg"
    alt="Codeflix logo"
    width={150}
    height={150}
    className="cursor-pointer"
  />
);

export default Logo;
