import React, { useState } from "react";
import FileItemCard from "../common/FileItemCard";

const fileData = [
  {
    name: "src",
    isFolder: true,
    children: [
      {
        name: "components",
        isFolder: true,
        children: [
          { name: "Header.js", isFolder: false },
          { name: "Footer.js", isFolder: false },
        ],
      },
      { name: "App.js", isFolder: false },
    ],
  },
];

const FileItem = () => {
  return (
    <div className="max-w-md p-6 bg-white shadow-md rounded-2xl">
      <div className="font-bold uppercase text-md">File Explorer</div>
      {fileData.map((item, index) => (
        <FileItemCard key={index} item={item} />
      ))}
    </div>
  );
};

export default FileItem;
