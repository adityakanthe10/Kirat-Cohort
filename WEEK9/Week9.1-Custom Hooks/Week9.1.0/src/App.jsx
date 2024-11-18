import React, { useState, useEffect } from "react";

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender(true);
    }, 5000);
  }, []);

  return <>{render ? <MyComponent /> : <div></div>}</>;
}

export default App;

function MyComponent() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.error("component mounted");

    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.log("componenet unmounted");
    };
  }, []);

  // Render UI
  return <div>From inside my component</div>;
}
