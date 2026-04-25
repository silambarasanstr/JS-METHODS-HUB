// containers/SidebarContainer.jsx
import React from "react";
import SidebarItem from "../components/common/SidebarItem";
import { menuData } from "../data/menuData";

const SidebarContainer = () => {
  return (
    <div className="max-w-md p-6 bg-white shadow-md rounded-2xl">
      <h2 className="font-bold uppercase text-md">Recursion Sidebar</h2>

      {menuData.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default SidebarContainer;
