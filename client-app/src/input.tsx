import { FunctionComponent } from "react"


export interface InputProps {
    title?:string,
    type:string,
    state?:boolean
    colorText?:string,
    backgroundColor?:string,
    width?: number,
    heigth?: number,
    cursor?:string,
}

const Input: FunctionComponent<InputProps> = ({title,type,state,colorText,width,heigth,cursor, backgroundColor}) => {
    return(
        <input title={title} type={type} style={{ width: `${width}px`, height: `${heigth}px`, cursor: `${cursor}`, backgroundColor: `${backgroundColor}`,color:`${colorText}`, }} />
    )
}

export default Input;