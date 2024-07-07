import React from "react";
import Image from "next/image";

const UserProfile = () => (
  <div className="flex items-center space-x-4 md:space-x-8">
    <p className="hidden cursor-not-allowed lg:inline">Kids</p>
    <Image
      src="/icone-kids.png"
      alt="Ícone perfils Kids"
      width={32}
      height={32}
      className="cursor-pointer rounded"
    />
  </div>
);

export default UserProfile;
