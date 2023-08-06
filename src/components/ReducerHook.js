import { useReducer } from "react"

const ReducerHook = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCR": {
                return { ...state, count: state.count + 1 }
            }
            case "DECR": {
                return { ...state, count: state.count - 1 }

            }
            case "CUSTOM": {
                return { ...state, count: state.count + action.payload }
            }
            default: return state
        }
    }

    const initialState = {
        count: 0
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>UseReducerHook
            <div>
                <button onClick={() => dispatch({ type: "INCR" })}>Increment</button>
                <div>{state.count}</div>
                <button onClick={() => dispatch({ type: "DECR" })}>Decrement</button>
                <button onClick={() => dispatch({ type: "CUSTOM", payload: 10 })}>Add 10 Custom Value</button>
            </div>
        </div>
    )
}
export default ReducerHook