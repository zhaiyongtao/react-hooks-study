/**
 * Counter - 计数
 * @Author: BuzzLightyear.Z
 * @Email: whoami_Z@outlook.com
 * @Date: 2021/10/8 3:25 下午
 * @LastEditTime: 2021/10/8 3:25 下午
 */
import React, {useState} from "react";


function CountLabel(props) {
    const {counter} = props
    const color = counter > 10 ? 'red' : 'blue'
    return <span style={{color: color}}>
        {counter}
    </span>
}

function Counter() {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <CountLabel counter={counter}/>
            <button onClick={() => setCounter(counter + 1)}>点击 +1</button>
        </div>
    )
}

export default Counter