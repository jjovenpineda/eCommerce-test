import React from "react";
import Sidebar from "../layout/side-bar";
import CustomCarousel from "../carousel";

export default function Exclusive() {
  return (
    <div className=" flex h-[60vh]">
      <div className="flex-1 border-r">{<Sidebar />}</div>
      <CustomCarousel />
    </div>
  );
}
