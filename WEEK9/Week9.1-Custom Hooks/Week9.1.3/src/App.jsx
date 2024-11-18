import { useState, useEffect } from "react";

function useDebouncedValue(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timeOutNumber = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timeOutNumber);
    };
  }, [value]);

  return debouncedValue;
}

function App() {
  const [value, setValue] = useState(0);
  const debouncedValue = useDebouncedValue(value, 500);

  useEffect(() => {
    fetch("");
  }, [debouncedValue]);

  return (
    <>
      Debounced Value is {debouncedValue}
      <input type="text" onChange={(e) => setValue(e.target.value)}></input>
    </>
  );
}

export default App;
