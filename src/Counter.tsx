import React, { useEffect,useRef,useState } from "react";


const Counter: React.FunctionComponent<{}> = () => {
  const [value, setValue] = useState<number>(0);
  const increment = () =>{setValue((prevState)=> prevState + 1)}
  const decrement = () =>{setValue((prevState)=> prevState - 1)}

  const renderTimes = useRef<number>(0);
  useEffect(() => {
renderTimes.current = renderTimes.current + 1  });
const ref = useRef<HTMLInputElement>(null!);
const focusInput = () => {
  // const current = ref.current;
  // if(current != null) {current.focus()};
  //ref.current?.focus();
  ref.current.focus()

}
  return (
    <div>
      <div>value:{value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type="text" />
      <><button onClick={focusInput}>Click me!</button></>
    </div> 
  );
};

export default Counter;
