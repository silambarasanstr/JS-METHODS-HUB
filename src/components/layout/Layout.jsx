import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}
      >
        <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      {/* Main Section */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mx-auto max-w-8xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
