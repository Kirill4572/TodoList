import { FunctionComponent } from "react"
import "./button.css"

export interface ButtonProps {
    onClick(e:any): void,
    src?:string,
}


const Button: FunctionComponent<ButtonProps> = ({onClick,src}) => {
    return (
        <button onClick={onClick} >
            <img className="addButton" src={src} alt=""  />
        </button>
    )
}
export default Button;