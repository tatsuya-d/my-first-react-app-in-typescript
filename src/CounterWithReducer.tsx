import React, { useReducer } from "react";

const intialState: StateType = { count: 0 };

type StateType = { count: number };
type ActionType = { type: "decrement" | "increment"|"reset" };

function reducer(state: StateType, action: ActionType): StateType | never {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return intialState;
    default:
      throw new Error();
  }
}
function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <>
      Count:{state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}

export default CounterWithReducer;
