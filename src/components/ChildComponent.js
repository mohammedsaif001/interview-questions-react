import React, { memo } from 'react'

const ChildComponent = ({ val, setValue, functionConsole }) => {
    // console.log("Rendering Chil Comp")
    functionConsole()
    return (
        <div style={{ backgroundColor: "blue", color: "white", padding: "20px 0", margin: "10px 0" }}>ChildComponent <h1>{val}</h1>
            <button onClick={() => setValue(prev => prev + 1)}>Change Value of Variable from Child</button>

        </div>
    )
}

export default memo(ChildComponent)