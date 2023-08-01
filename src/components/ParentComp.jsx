import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComp = () => {
    const [val, setValue] = useState(0)
    const [isBoolean, setIsBoolean] = useState(false)
    // console.log("Rendering Parent Comp")

    // Since we are passing this function as props to child it will re render
    // But this is independent function and need not call everytime so we are memomizing this
    const functionConsole = useCallback(() => {
        console.log("Calling Parent Comp Function", val)
    }, [val])

    return (
        <div>ParentComp
            <div>
                <div>
                    <button onClick={() => setValue(prev => prev + 1)}>Change Value of Variable</button>
                </div>
            </div>
            <ChildComponent val={val} setValue={setValue} functionConsole={functionConsole} />
            <button onClick={() => setIsBoolean(prev => !prev)}>Change Boolean</button> <span>{isBoolean ? "TRUE" : "FALSE"}</span>
        </div>
    )
}

export default ParentComp