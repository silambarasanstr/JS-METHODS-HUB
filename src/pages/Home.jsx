import { useState } from "react";

const stringProblems = [
  {
    title: "🔹 Basic String Questions",
    items: [
      "Reverse a string",
      "Check palindrome string",
      "Count vowels and consonants",
      "Convert string to uppercase/lowercase",
      "Find length of string (without using .length)",
      "Remove spaces from string",
      "Count number of words",
    ],
  },
  {
    title: "🔹 Intermediate String Questions",
    items: [
      "Find duplicate characters in string",
      "Remove duplicate characters",
      "Find first non-repeating character",
      "Find most frequent character",
      "Check if two strings are anagrams",
      "Replace spaces with %20",
      "Check if string contains only digits",
      "Toggle each character case",
    ],
  },
  {
    title: "🔹 Pattern / Logic Based",
    items: [
      'Reverse words in a sentence ("I am hero" → "hero am I")',
      "Capitalize first letter of each word",
      "Find longest word in sentence",
      "Find shortest word",
      "Count occurrences of a substring",
    ],
  },
  {
    title: "🔹 Advanced String Problems",
    items: [
      'String compression ("aaabb" → "a3b2")',
      "Longest substring without repeating characters",
      'Check rotation of string ("abcde" → "cdeab")',
      "Group anagrams",
      "Minimum deletions to make palindrome",
    ],
  },
  {
    title: "🔹 Coding Interview Special",
    items: [
      "Implement indexOf() manually",
      "Implement substring() manually",
      "Check valid parentheses",
      "Remove special characters",
      "Check valid shuffle of two strings",
    ],
  },
  {
    title: "🔹 Real-world (Frontend Focus 🔥)",
    items: [
      "Validate email",
      "Password strength checker",
      'URL slug generator ("Hello World" → "hello-world")',
      "Trim extra spaces",
      "Highlight search keyword",
    ],
  },
  {
    title: "💡 Bonus (Tricky)",
    items: [
      "Find all permutations",
      "Check isomorphic string",
      "Longest palindromic substring",
      "Roman to Integer",
      "String to integer (atoi)",
    ],
  },
];

const arrayProblems = [
  {
    title: "🔹 Basic Array Questions",
    items: [
      "Find largest element in array",
      "Find smallest element",
      "Reverse an array",
      "Sum of all elements",
      "Find average of array",
      "Count even and odd numbers",
      "Remove duplicates from array",
    ],
  },
  {
    title: "🔹 Intermediate Array Questions",
    items: [
      "Find second largest element",
      "Find missing number in array",
      "Move all zeros to end",
      "Check if array is sorted",
      "Merge two arrays",
      "Find duplicates in array",
      "Rotate array (left/right)",
    ],
  },
  {
    title: "🔹 Pattern / Logic Based",
    items: [
      "Kadane’s Algorithm (Maximum subarray sum)",
      "Two sum problem",
      "Find subarray with given sum",
      "Longest consecutive sequence",
      "Majority element",
    ],
  },
  {
    title: "🔹 Advanced Array Problems",
    items: [
      "Trapping rain water",
      "Container with most water",
      "Merge overlapping intervals",
      "Product of array except self",
      "Maximum product subarray",
    ],
  },
  {
    title: "🔹 Coding Interview Special",
    items: [
      "Implement push/pop manually",
      "Implement map/filter manually",
      "Find intersection of two arrays",
      "Find union of arrays",
      "Check if array is palindrome",
    ],
  },
  {
    title: "🔹 Real-world (Frontend Focus 🔥)",
    items: [
      "Pagination logic (slice)",
      "Search filter in array",
      "Sort products by price",
      "Group items by category",
      "Remove falsy values",
    ],
  },
  {
    title: "💡 Bonus (Tricky)",
    items: [
      "3 sum problem",
      "4 sum problem",
      "Sliding window maximum",
      "Find peak element",
      "Minimum swaps to sort array",
    ],
  },
];

const objectProblems = [
  {
    title: "🔹 Basic Object Questions",
    items: [
      "Find value by key",
      "Check if key exists",
      "Count properties in object",
      "Merge two objects",
      "Deep clone an object",
      "Convert object to array",
      "Convert array to object",
    ],
  },
  {
    title: "🔹 Intermediate Object Questions",
    items: [
      "Iterate over object keys and values",
      "Remove a property from object",
      "Add new property dynamically",
      "Check if object is empty",
      "Compare two objects (shallow)",
      "Get all keys and values",
      "Freeze and seal object",
    ],
  },
  {
    title: "🔹 Nested Object Problems",
    items: [
      "Access nested object value",
      "Update nested object property",
      "Flatten nested object",
      "Deep merge two objects",
      "Find key in nested object",
    ],
  },
  {
    title: "🔹 Logic Based Object Problems",
    items: [
      "Group objects by property",
      "Count frequency using object",
      "Find duplicate values in object",
      "Sort object by values",
      "Filter object based on condition",
    ],
  },
  {
    title: "🔹 Advanced Object Problems",
    items: [
      "Deep comparison of objects",
      "Object destructuring with defaults",
      "Create immutable object update",
      "Implement Object.assign manually",
      "Convert object keys to camelCase",
    ],
  },
  {
    title: "🔹 Coding Interview Special",
    items: [
      "Implement deep clone manually",
      "Find difference between two objects",
      "Remove undefined/null values",
      "Validate object schema",
      "Object to query string",
    ],
  },
  {
    title: "🔹 Real-world (Frontend Focus 🔥)",
    items: [
      "Form data handling using object",
      "API response normalization",
      "Store user preferences in object",
      "Dynamic table rendering from object",
      "Search/filter in object list",
    ],
  },
  {
    title: "💡 Bonus (Tricky)",
    items: [
      "Circular reference handling",
      "Memoization using object",
      "Object key collision handling",
      "Proxy usage in object",
      "Build custom map using object",
    ],
  },
];

export default function Home() {
  const [tab, setTab] = useState("strings");

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <h1 className="mb-10 text-4xl font-extrabold tracking-tight text-center">
        {
          {
            strings: "String Problems ",
            arrays: "Array Problems ",
            object: "Object Problems ",
          }[tab]
        }
         - Interview Questions
      </h1>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="flex p-1 bg-white rounded-full shadow-md">
          {/* Object */}
          <button
            onClick={() => setTab("object")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              tab === "object"
                ? "bg-purple-500 text-white shadow"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Object
          </button>

          {/* Strings */}
          <button
            onClick={() => setTab("strings")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              tab === "strings"
                ? "bg-blue-500 text-white shadow"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Strings
          </button>

          {/* Arrays */}
          <button
            onClick={() => setTab("arrays")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              tab === "arrays"
                ? "bg-green-500 text-white shadow"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Arrays
          </button>
        </div>
      </div>

      {/* OBJECT */}
      {tab === "object" && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {objectProblems.map((section, index) => (
            <div
              key={index}
              className="p-5 transition-all duration-300 border border-gray-200 shadow-sm bg-white/80 backdrop-blur rounded-2xl hover:shadow-xl hover:-translate-y-1"
            >
              <h2 className="mb-3 text-lg font-semibold text-purple-600">
                {section.title}
              </h2>

              <ul className="space-y-2 text-sm text-gray-700">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 px-2 py-1 transition-all duration-200 rounded-md cursor-pointer hover:bg-gray-100 hover:text-black"
                  >
                    <span className="text-purple-500">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* STRING */}
      {tab === "strings" && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stringProblems.map((section, index) => (
            <div
              key={index}
              className="p-5 transition-all duration-300 border border-gray-200 shadow-sm bg-white/80 backdrop-blur rounded-2xl hover:shadow-xl hover:-translate-y-1"
            >
              <h2 className="mb-3 text-lg font-semibold text-blue-600">
                {section.title}
              </h2>

              <ul className="space-y-2 text-sm text-gray-700">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 px-2 py-1 transition-all duration-200 rounded-md cursor-pointer hover:bg-gray-100 hover:text-black"
                  >
                    <span className="text-blue-500">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* ARRAY */}
      {tab === "arrays" && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {arrayProblems.map((section, index) => (
            <div
              key={index}
              className="p-5 transition-all duration-300 border border-gray-200 shadow-sm bg-white/80 backdrop-blur rounded-2xl hover:shadow-xl hover:-translate-y-1"
            >
              <h2 className="mb-3 text-lg font-semibold text-green-600">
                {section.title}
              </h2>

              <ul className="space-y-2 text-sm text-gray-700">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 px-2 py-1 transition-all duration-200 rounded-md cursor-pointer hover:bg-gray-100 hover:text-black"
                  >
                    <span className="text-green-500">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
