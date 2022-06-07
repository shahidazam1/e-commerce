import React from "react";

const FlexPractice = () => {
  return (
    <>
      <div
        class="parent"
        style={{
          display: "flex",
          border: "2px solid yellow",
          width: "500px",
        }}
      >
        <div
          class="child"
          style={{
            border: "2px solid red",
            textAlign: "center",
            flexGrow: "1",
            flexShrink: "1",
          }}
        >
          Child
        </div>
        <div
          class="child"
          style={{
            border: "2px solid blue",
          }}
        >
          :
        </div>

        <div
          class="child"
          style={{
            border: "2px solid green",
            flexGrow: "1",
            flexShrink: "0",
          }}
        >
          Child
        </div>
      </div>
    </>
  );
};

export default FlexPractice;
