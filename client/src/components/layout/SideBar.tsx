"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NextRequest } from "next/server";
import { usePathname } from "next/navigation";

type Props = {};

const SideBar = (props: Props) => {
  const path = usePathname();

  return (
    <div className="flex flex-col gap-24 w-[25%] px-8 mt-10">
      <div className="flex flex-col gap-2">
        <Image
          src={"/images/profile.png"}
          width={100}
          height={100}
          alt="profile"
          className="rounded-lg"
        />
        <p className="text-white font-bold text-xl">Bruno</p>
        <p className="text-white font-bold text-lg">bruno@email.com</p>
      </div>
      <div className="flex flex-col gap-8">
        <Link href={"/expenses"}>
          <p
            className={`text-white font-bold text-2xl hover:cursor-pointer hover:text-gray-300 hover:scale-[1.1] ${
              path === "/expenses" && "underline-offset-8 underline scale-[1.1]"
            } transition-all`}
          >
            Expenses
          </p>
        </Link>
        <Link href={"/category"}>
          <p
            className={`text-white font-bold text-2xl hover:cursor-pointer hover:text-gray-300 hover:scale-[1.1] ${
              path === "/category" &&
              "underline-offset-8  underline scale-[1.1]"
            } transition-all`}
          >
            Category
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
