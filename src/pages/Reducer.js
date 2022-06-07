import React from "react";
function Reducer(state, action) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
      name: state.name + action.name,
      addByTen: state.addByTen + action.addByTen,
    };
  }
  throw Error("Unknown action.");
}

export default Reducer;
