import { FunctionComponent } from "react"

export interface ButtonProps {
    onClick(): void,
    width?:number,
    heigth?:number,
    cursor?:string,
    backgroundColor?:string,
    colorText?:string,
    src?:string,
}


const Button: FunctionComponent<ButtonProps> = ({onClick,width,heigth,cursor,backgroundColor,colorText,src}) => {
    return (
        <button onClick={onClick} >
            <img className="addButton" src={src} alt="" style={{width: `${width}px`, height: `${heigth}px`, cursor: `${cursor}`,backgroundColor: `${backgroundColor}`,color:`${colorText}`}} />
        </button>
    )
}
export default Button;