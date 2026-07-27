"use client";

import css from "./TestButton.module.css";

const TestButton = () => {
  return (
    <div className={css["testButton"]}>
      <button
        onClick={() => {
          console.log("Hello world");
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default TestButton;
