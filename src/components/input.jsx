import { useState } from "react"
import './input.css'

export default function Input({submit}) {
    const [value, setValue] = useState('')
    const onchange = (event) =>{
        setValue(event.target.value)
    }
    const onSubmit = () =>{
        submit(value)
        setValue('')
    }
    return(
        <div className="container">
            <input onChange={onchange} type="text" value={value} />
            <button onClick={onSubmit} className="submit">submit</button>
        </div>
        
    )
}