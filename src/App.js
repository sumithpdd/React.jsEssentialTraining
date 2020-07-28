import React from "react";
import "./styles.css";
import Library from "./Library";

// let skiData = {
//   total: 50,
//   powder: 20,
//   backcountry: 10,
//   goal: 100
// };
let bookList = [
  { title: "The sun also rises", author: "Ernest Hemingway", pages: "260" },
  { title: "White Teeth", author: "Zadie Smith", pages: "480" },
  { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: "260" }
];
export default function App() {
  return (
    <div className="App">
      <Library books={bookList} />
      {/* <SkiDayCounter
        total={skiData.total}
        powder={skiData.powder}
        backcountry={skiData.backcountry}
        goal={skiData.goal}
      /> */}
    </div>
  );
}
