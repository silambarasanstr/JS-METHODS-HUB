import React from "react";

// Real-Life Example
// 👉 Remote control (Child)
// 👉 TV (Parent)
// Remote button press பண்ணா → TV react ஆகும்
// 👉 அதே மாதிரி callback 😄

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("bye");
}

greet("silambarasan", sayBye);

// ✅ With Callback

const arr = [1, 2, 3];
const result = arr.map((num) => num * 2);
console.log(result);

// ❌ Without Callback (manual loop)
const arr2 = [1, 2, 3];
const result2 = [];

for (let i = 0; i < arr2.length; i++) {
  result2.push(arr2[i] * 2);
}

console.log(result2);

const Callback = () => {
  return <div>Callback is</div>;
};

export default Callback;
