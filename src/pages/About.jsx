import React, { useState } from "react";
import ProblemGrid from "../components/common/ProblemGrid";

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
    ],
  },
];

const About = () => {
   const [activeTab, setActiveTab] = useState("strings");

 const tabData = {
    strings: {
      title: "String Problems",
      data: stringProblems,
      color: "text-blue-600",
    },
    arrays: {
      title: "Array Problems",
      data: arrayProblems,
      color: "text-green-600",
    },
    object: {
      title: "Object Problems",
      data: objectProblems,
      color: "text-purple-600",
    },
  };


  return (
      <div className="min-h-screen p-6">
      {/* Header */}
      <h1 className="mb-10 text-4xl font-extrabold tracking-tight text-center">
        {tabData[activeTab].title} Interview Questions
      </h1>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="flex p-1 bg-white rounded-full shadow-md">
          {Object.keys(tabData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === key
                  ? "bg-blue-500 text-white shadow"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tabData[key].title.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <ProblemGrid
        data={tabData[activeTab].data}
        color={tabData[activeTab].color}
      />
    </div>
  );
};

export default About;
