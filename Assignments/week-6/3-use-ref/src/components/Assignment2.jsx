import  { useState } from 'react';
import {useRef} from "react"

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    // eslint-disable-next-line no-unused-vars
    const [count,setCount] = useState(0);

    const numberOfTimesRendered = useRef(0);

    const handleReRender = () => {
        // Update state to force re-render
        setCount(Math.random());
    };

    numberOfTimesRendered.current = numberOfTimesRendered.current + 1;

    return (
        <div>
            <p>This component has rendered {0} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};