import React, { useReducer } from "react";
import Card from "./Card";
import Reducer from "./Reducer";

const Child = () => {
  const [state, dispatch] = useReducer(Reducer);

  return (
    <Card>
      <p>name is {state.age}</p>
      <p>child</p>
    </Card>
  );
};

export default Child;
