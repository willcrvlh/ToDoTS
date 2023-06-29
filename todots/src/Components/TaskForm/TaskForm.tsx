import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import S from "./TaskForm.module.css";
import { ITask } from "../../Interfaces/Task";
export interface ITaskFormProps {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export default function TaskForm({ btnText, taskList, setTaskList }: ITaskFormProps) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = { id, title, difficulty }
    setTaskList!([...taskList, newTask])

    setTitle("")
    setDifficulty(0)
    console.log(taskList);
  };
  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };
  return (
    <form className={S.form} onSubmit={addTaskHandler}>
      <div className={S.form_container}>
        <label htmlFor="title">O que você vai fazer?</label>
        <input
          type="text"
          name="Title"
          placeholder="Qual titulo da sua tarefa?"
          onChange={handlerChange}
        />
      </div>
      <div className={S.form_container}>
        <label htmlFor="Difficulty">Dificuldade</label>
        <input
          type="text"
          name="dificulty"
          placeholder="Qual é o nível de dificuldade da sua tarefa?"
          onChange={handlerChange}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
}
