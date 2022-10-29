import React from 'react'
import './Counter.css'

function Counter() {
    let [count, setCount] = React.useState(0)

    let onClickPlus = () => {
        setCount(count + 1)
    }
    let onClickMinus = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>Counter:</h1>
            <h2>{count}</h2>
            <div className='buttons'>
                <button onClick={onClickMinus} className='minus'>- Minus</button>
                <button onClick={onClickPlus} className='plus'>+ Plus</button>
            </div>
        </div>
    )
}

export default Counter