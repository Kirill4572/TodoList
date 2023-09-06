import { useState } from "react";
import "./App.css";
import Button from "./button";
import Input from "./input"

const App = () => {
  const [count,setCount] = useState("")
  const changeInput = (event:any) => {
setCount(event.target.value)
console.log(setCount((event.target.value)))
  }
  return (
    <div className="App">
      <a className="header">Мои дела:</a>
      <div className="block">
        <Input onChange={changeInput} type='text' cursor={'pointer'} title={"Введите ваше дело"} colorText='white' backgroundColor="black" />
        <Button onClick={()=>{}} src={"plus.jpg"} width={15} heigth={15} cursor={'pointer'}  />
      </div>
    </div>
  );
};

export default App;
