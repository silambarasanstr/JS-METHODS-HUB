// components/sidebar/SidebarItem.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="text-gray-600">
      <div
        onClick={() => hasChildren && setOpen(!open)}
        style={{
          cursor: hasChildren ? "pointer" : "default",
          padding: "1px",
        }}
      >
        {hasChildren ? "📂" : "📄"}{" "}
        
        {item.path ? (
          <Link to={item.path}>{item.name}</Link>
        ) : (
          item.name
        )}
      </div>

      {/* 🔥 recursion */}
      {open &&
        hasChildren &&
        item.children.map((child, index) => (
          <SidebarItem key={index} item={child} />
        ))}
    </div>
  );
};

export default SidebarItem;