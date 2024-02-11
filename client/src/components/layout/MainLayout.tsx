import React from "react";
import SideBar from "./SideBar";

type Props = { children: React.ReactNode };

const MainLayout = ({ children }: Props) => {
  return (
    <div className="bg-primary-blue w-screen h-screen overflow-hidden px-6 py-6 flex">
      <SideBar />
      <div className="bg-white rounded-2xl w-full p-12 pb-2 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
