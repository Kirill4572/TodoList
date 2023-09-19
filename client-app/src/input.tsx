import { FunctionComponent } from "react"
import "./input.css"


export interface InputProps {
    onChange?(event:any):void
    type:string,
    checked?:boolean,
}

const Input: FunctionComponent<InputProps> = ({onChange,type,checked}) => {
    return(
        <input className="input" onChange={onChange} type={type} checked={checked} />
    )
}

export default Input;