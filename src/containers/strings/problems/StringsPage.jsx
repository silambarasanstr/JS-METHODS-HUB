import { Link, Outlet } from "react-router-dom";

const stringProblems = [
  { name: "Palindrome", path: "palindrome" },
  { name: "Reverse String", path: "reverse" },
  { name: "Anagram", path: "anagram" },
];

const StringsPage = () => {
  return (
    <div>
      {/* Title */}
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        🧵 String Challenges
      </h1>

      {/* Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stringProblems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="p-4 transition bg-white border shadow rounded-xl hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-gray-700">{item.name}</h2>
            <p className="mt-1 text-sm text-gray-500">
              Solve {item.name} problem
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default StringsPage;
