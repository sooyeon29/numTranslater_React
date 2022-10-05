import React, { useState } from "react"
import Time from "./components/time"
import Length from "./components/length"

export default function App() {
  const [change, setChange] = useState("")
  const changeSelect = (event) => {
    
    setChange(event.target.value)
  }
  
  return (
  <div>
    <h3>단위 변환기</h3>
    <select value={change} onChange={changeSelect}>
      <option value="0">변환기 사용하기</option>
      <option value="1">시간 (시/분)</option>
      <option value="2">길이 (m/cm)</option>
    </select>
    {change === "1" ? <Time/>: null}
    {change === "2" ? <Length/>: null}
    
    
    
  </div>
  )
}
