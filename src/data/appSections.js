export const appSections = [
  {
    id: "day-1",
    label: "Day 1 - Strings Basics",
    icon: "🧵",
    type: "section",
    children: [
      {
        id: "strings-basic",
        label: "String Problems",
        icon: "🔤",
        children: [
          {
            id: "palindrome",
            label: "Palindrome Check",
            icon: "🔁",
            href: "/strings/palindrome",
            difficulty: "easy",
            done: false,
          },
          {
            id: "count-chars",
            label: "String Reversal",
            icon: "🔄",
            href: "/strings/reverse",
            difficulty: "easy",
            done: false,
          },
          {
            id: "remove-spaces",
            label: "Remove Spaces",
            icon: "✂️",
            href: "/strings/remove-spaces",
            difficulty: "easy",
            done: false,
          },
        ],
      },
    ],
  },

  {
    id: "day-2",
    label: "Day 2 - Arrays Basics",
    icon: "📦",
    type: "section",
    children: [
      {
        id: "array-basic",
        label: "Array Problems",
        icon: "📊",
        children: [
          {
            id: "max-element",
            label: "Find Max Element",
            icon: "⬆️",
            href: "/arrays/max",
            difficulty: "easy",
            done: false,
          },
        ],
      },
    ],
  },
];