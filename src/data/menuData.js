// data/menuData.js
export const menuData = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Users",
    children: [
      {
        name: "All Users",
        path: "/users/all",
      },
      {
        name: "Add User",
        path: "/users/add",
      },
    ],
  },
  {
    name: "Settings",
    children: [
      {
        name: "Profile",
        path: "/settings/profile",
      },
      {
        name: "Security",
        children: [
          {
            name: "Change Password",
            path: "/settings/security/password",
          },
        ],
      },
    ],
  },
];