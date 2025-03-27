import React, {useState, useEffect} from 'react'
import { ProgressBar } from './ProgressBar'

export const ProgressBars = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="wrapper">
        <button onClick={() => setCount(count => count + 1)}>Add</button>
        <button onClick={() => setCount(count => count - 1)}>Remove</button>
        <div>{count}</div>
        <div  className="progress-bar-container">
            {Array.from({length: count}).map((_, index) => (
                <ProgressBar key={index}/>
            ))}
        </div>
        </div>
    )
}
