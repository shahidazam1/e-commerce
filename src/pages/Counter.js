import { useReducer } from "react";
import Reducer from "./Reducer";

const Counter = () => {
  const [state, dispatch] = useReducer(Reducer, {
    age: 42,
    name: "shahid",
    addByTen: 50,
  });

  const handleButtonClick = () => {
    dispatch({ type: "incremented_age", name: "pavan", addByTen: 10 });
  };

  return (
    <>
      <button onClick={handleButtonClick}>Increment age</button>
      <p>Hello! You are {state.age}.</p>
      <p>Hello! You are {state.name}.</p>
      <p>Hello! You are {state.addByTen}.</p>
    </>
  );
};

export default Counter;
