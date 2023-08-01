import React, { useMemo, useState } from "react";

const MemoDemo = () => {
    const [counterOne, setcounterOne] = useState(0);
    const [counterTwo, setcounterTwo] = useState(0);

    const handleIncrementTwo = () => {
        setcounterTwo((prev) => prev + 2)
    }
    const handleIncrementOne = () => {
        setcounterOne((prev) => prev + 1)
    }

    // This function is getting called again again because the state value is changing
    // Which inturn rerenders the component
    // To overcome this we use usememo so that our function calls only one thhis particular state changes
    // Use Memo returns a memoised value
    const isEven = useMemo(() => {
        console.log("Calling isEven")
        for (let i = 0; i < 300000000; i++) { }
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            MemoDemo
            <span>
                <h1>{counterOne}</h1>
                <button onClick={handleIncrementOne}>Increment Counter One</button>
            </span>
            <p>{isEven ? "Even Number" : "Odd Number"}</p>
            <span>
                <h1>{counterTwo}</h1>
                <button onClick={handleIncrementTwo}>Increment Counter two</button>
            </span>
        </div>
    );
};

export default MemoDemo;
