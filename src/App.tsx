import React from "react";
//import Counter from "./Counter";
import CounterWithReducer from "./CounterWithReducer";

interface Props {
  message?: string;
  name?: string;
}

const App = ({
  message = "値が渡って来なかったからデフォルト",
  name = "達也！",
}: Props) => {
  return (
    <div>
      {/* <Counter /> */}
      <CounterWithReducer/>
    </div>
  );
};

export default App;
