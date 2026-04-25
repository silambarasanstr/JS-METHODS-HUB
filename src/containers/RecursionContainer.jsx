import React from "react";
import Comment from "../components/recursion/Comment";
import FileItem from "../components/recursion/FileItem";
import Factorial from "../components/recursion/Factorial";
import ReverseString from "../components/recursion/ReverseString";
import FlattenArray from "../components/recursion/FlattenArray";
import SidebarContainer from "./SidebarContainer";

const RecursionContainer = () => {
  return (
    <div className="space-y-3 ">
      <div className="font-bold uppercase text-md">
        JavaScript / React Recursion example
      </div>
      <div className="grid grid-cols-3 gap-3">
        <Comment />
        <FileItem />
        <Factorial />
        <ReverseString />
        <FlattenArray />
        <SidebarContainer />
      </div>
    </div>
  );
};

export default RecursionContainer;
