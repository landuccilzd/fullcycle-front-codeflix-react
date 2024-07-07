"use client";
import React, { useEffect, useState } from "react";
import { useScroll } from "@/hooks/useScroll";
import Link from "next/link";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserProfile from "./UserProfile";

export default function Header() {
  const isScrolled = useScroll();

  return (
    <header
      className={` ${isScrolled && "bg-pink-700"} fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-all lg:px-10 lg:py-6`}
    >
      <div className="flex items-center space-x-2 md:space-x-8">
        <Link href="/">
          <Logo />
        </Link>
        <NavLinks />
      </div>
      <UserProfile />
    </header>
  );
}
