import { useState, useEffect } from "react";
import "./App.css";
import Button from "./button";
import Input from "./input";
export interface Task {
  id: string;
  title: string;
  state: boolean;
}
let todo = [
  { title: "Покушать ягоды", state: true },
  { title: "Покушать дыни", state: true },
  { title: "Покушать яблоки", state: true },
  { title: "Покушать груши", state: true },
];

// let todoWithId = todo.map((x, index) => {
//   return { id: (index + 1).toString(), title: x.title, state: x.state };
// });
let todoWithId: Task[] = [];
for (let i = 0; i < todo.length; i++) {
  const task = todo[i];
  todoWithId.push({
    id: (i + 1).toString(),
    ...task,
  });
}

const App = () => {
  const [change, setChange] = useState("");
  const [tasks, setTasks] = useState<Task[]>(todoWithId);
  const [checked, setChecked] = useState(true);

  const changeInput = (event: any) => {
    return setChange(event.target.value);
  };
  const renderTasks = () => {
    return tasks.map((task,i) => (
      <div>
        {task.id}
        <Input
          type="checkbox"
          onChange={() => {
          task.id += 1;
          const newTasks = [...tasks]
          newTasks[i] = {id:newTasks[i].id + 1, ...newTasks[i]};
          setTasks(newTasks);
            setChecked((state) => !state);
          }}
        />
        {task.title}
        {task.state}
        <Button onClick={() => {}}></Button>
        <Button onClick={() => {}}></Button>
        <Button onClick={() => {}} src="delete.avif"></Button>
      </div>
    ));
  };

  const add = () => {};
  return (
    <div className="App">
      <div className="block">
        <Input onChange={changeInput} type="text" checked={true} />
        <Button onClick={add} src={"plus.jpg"} />
      </div>
      <div>{renderTasks()}</div>
    </div>
  );
};

export default App;
