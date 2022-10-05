import React, {useState} from "react";

export default function Time() {
    const [amount, setAmount] = useState("")
    const [flip, setFlip] = useState(false)
    const hourMinChange = (event) => {        
        setAmount(event.target.value)
    }
    // console.log(flip)
    const reset = () => setAmount("")    // 리셋버튼
    const timeChanger = () => {
        reset()   
        setFlip((current) => !current)
        console.log(flip)
    }
        
    return (
    <div>        
        <h2>시간 변환기</h2>
        <div>
            <label htmlFor="hour">시 : </label>
            <input
            placeholder="hour"
            type="number"
            value={flip ? Math.round(amount/60) : amount}
            id="hour"
            onChange={hourMinChange}
            disabled={flip} //ture
            
            />
        </div>
        <br></br>
        <div>            
            <label htmlFor="min">분 : </label>
            <input
            placeholder="min"
            type="number"
            value={flip? amount : amount*60}
            id="min"
            onChange={hourMinChange}
            disabled={!flip} //false
            //초기값이 false => false일때 disabled
            />
        </div>
        <br></br>
        <div>
            <button onClick={reset}>리셋</button>
            <button onClick={timeChanger}>{flip? '"시"를 "분"으로':'"분"을 "시"로'}</button>
        </div>
    </div>
    )
}