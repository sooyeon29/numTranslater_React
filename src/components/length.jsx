import React, {useState} from "react";

export default function Length () {
    const [long, setLong] = useState(0)
    const lengthChanger = (event) => {
        setLong(event.target.value)
    }

    const [inverted,setInverted] = useState(false)

    const reset_but = () => setLong("")
    const invert_but = () => {
        reset_but()
        setInverted((now) => !now)
    }

    return (
    <div>
        <h2>시간 변환기</h2>
        <label htmlFor="cm">cm : </label>
        <input
        id="cm"
        type="number"
        value={inverted? long*100 :long}
        onChange={lengthChanger}
        disabled={inverted}
        //disabled=ture가 되야지 disabled가 발동됨
        />
        <label htmlFor="m">m : </label>
        <input
        id="m"
        type="number"
        value={inverted? long : long/100}
        onChange={lengthChanger}
        disabled={!inverted}
        />
        <div>
            <button onClick={reset_but}>리셋</button>
            <button onClick={invert_but}>반대로</button>
        </div>
    </div>
    )
}