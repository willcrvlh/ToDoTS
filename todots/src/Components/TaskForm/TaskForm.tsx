import React,{useState, useEffect, ChangeEvent, FormEvent} from 'react';
import S from './TaskForm.module.css'
import { ITask } from '../../Interfaces/Task';
export interface ITaskFormProps {
    btnText: string;
}

export default function TaskForm ({btnText}: ITaskFormProps) {
  return (
    <form className={S.form}>
        <div className={S.form_container}>
            <label htmlFor='title'>O que você vai fazer?</label>
            <input type="text" name='Title' placeholder='Qual titulo da sua tarefa?'/>
        </div>
        <div className={S.form_container}>
            <label htmlFor='Difficulty'>Dificuldade</label>
            <input type="text" name='dificulty' placeholder='Qual é o nível de dificuldade da sua tarefa?'/>
        </div>
        <input type="submit" value={btnText} />
    </form>
  );
}
