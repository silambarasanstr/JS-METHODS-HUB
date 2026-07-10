import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { appSections } from "../../data/appSections";
import { Home, ChevronsLeft, ChevronDown } from "lucide-react";

const SideBar = ({ collapsed, setCollapsed }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const location = useLocation();

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // 🔥 ICON FIX (emoji + component support)
  const renderIcon = (Icon) => {
    if (!Icon) return null;
    return typeof Icon === "string" ? (
      <span className="text-lg">{Icon}</span>
    ) : (
      <Icon size={16} />
    );
  };

  const renderMenu = (items, level = 0) => {
    return items.map((item) => {
      const Icon = item.icon;
      const isExpanded = expandedSections[item.id];
      const paddingLeft = 12 + level * 16;

      // ✅ Parent item
      if (item.children && item.children.length > 0) {
        return (
          <div key={item.id}>
            <button
              onClick={() => toggleSection(item.id)}
              className="flex items-center w-full gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
              style={{ paddingLeft: `${paddingLeft}px` }}
            >
              {renderIcon(Icon)}

              {!collapsed && (
                <span className="flex-1 text-xs font-medium text-left">
                  {item.label}
                </span>
              )}

              {!collapsed && (
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    isExpanded ? "rotate-0" : "-rotate-90"
                  }`}
                />
              )}
            </button>

            {isExpanded && !collapsed && (
              <div className="space-y-1">
                {renderMenu(item.children, level + 1)}
              </div>
            )}
          </div>
        );
      }

      // ✅ Leaf item
      return (
        <Link
          key={item.id}
          to={item.href || "#"}
          className={`flex items-center justify-between gap-3 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 ${
            location.pathname === item.href
              ? "text-blue-600 bg-blue-50"
              : "text-gray-600"
          }`}
          style={{ paddingLeft: `${paddingLeft}px` }}
        >
          <div className="flex items-center gap-2 text-xs">
            ✅{!collapsed && <span>{item.label}</span>}
          </div>
        </Link>
      );
    });
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-white border-r transition-all duration-300 flex flex-col z-50 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        {!collapsed && <h2 className="text-sm font-semibold">Navigation</h2>}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded hover:bg-gray-100"
        >
          <ChevronsLeft size={18} className={collapsed ? "rotate-180" : ""} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <Link
          to="/"
          className={`flex items-center gap-3 px-3 py-3 text-sm rounded-lg hover:bg-gray-100 ${
            location.pathname === "/"
              ? "text-blue-600 bg-blue-50"
              : "text-gray-600"
          }`}
        >
          {renderIcon(Home)}
          {!collapsed && <span className="text-xs font-medium">Home</span>}
        </Link>

        {/* Sections */}
        <div className="space-y-1">
          {appSections.map((section) => {
            const isExpanded = expandedSections[section.id];
            const Icon = section.icon;

            return (
              <div key={section.id}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center w-full gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                >
                  {renderIcon(Icon)}

                  {!collapsed && (
                    <span className="flex-1 text-xs font-medium text-left">
                      {section.label}
                    </span>
                  )}

                  {!collapsed && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        isExpanded ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                  )}
                </button>

                {isExpanded && !collapsed && (
                  <div className="space-y-1 ">
                    {renderMenu(section.children, 1)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <Link
          to="/closure"
          className={`flex items-center gap-3 px-3 py-3 text-sm rounded-lg hover:bg-gray-100 ${
            location.pathname === "/"
              ? "text-blue-600 bg-blue-50"
              : "text-gray-600"
          }`}
        >
          {renderIcon(Home)}
          {!collapsed && <span className="text-xs font-medium">Closure</span>}
        </Link>

        <Link
          to="/recursion"
          className={`flex items-center gap-3 px-3 py-3 text-sm rounded-lg hover:bg-gray-100 ${
            location.pathname === "/"
              ? "text-blue-600 bg-blue-50"
              : "text-gray-600"
          }`}
        >
          {renderIcon(Home)}
          {!collapsed && <span className="text-xs font-medium">Recursion</span>}
        </Link>

        <Link
          to="/callback"
          className={`flex items-center gap-3 px-3 py-3 text-sm rounded-lg hover:bg-gray-100 ${
            location.pathname === "/"
              ? "text-blue-600 bg-blue-50"
              : "text-gray-600"
          }`}
        >
          {renderIcon(Home)}
          {!collapsed && <span className="text-xs font-medium">Callback</span>}
        </Link>

        <Link
          to="/hoc"
          className={`flex items-center gap-3 px-3 py-3 text-sm rounded-lg hover:bg-gray-100 ${
            location.pathname === "/"
              ? "text-blue-600 bg-blue-50"
              : "text-gray-600"
          }`}
        >
          {renderIcon(Home)}
          {!collapsed && <span className="text-xs font-medium">HOC</span>}
        </Link>

        <Link
          to="/currying"
          className={`flex items-center gap-3 px-3 py-3 text-sm rounded-lg hover:bg-gray-100 ${
            location.pathname === "/"
              ? "text-blue-600 bg-blue-50"
              : "text-gray-600"
          }`}
        >
          {renderIcon(Home)}
          {!collapsed && <span className="text-xs font-medium">Currying</span>}
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
