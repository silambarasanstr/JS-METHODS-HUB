import React, { useState } from "react";

const FileItemCard = ({ item }) => {
    const [open, setOpen] = useState(false);
  return (
   <div className="text-gray-600">
      <div onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
        {item.isFolder ? "📁" : "📄"} {item.name}
      </div>

      {/* recursion */}
      {open &&
        item.children?.map((child, index) => (
          <FileItemCard key={index} item={child} />
        ))}
    </div>
  )
}

export default FileItemCard
