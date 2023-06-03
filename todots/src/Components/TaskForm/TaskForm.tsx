import * as React from 'react';

export interface ITaskFormProps {
    btnText: string;
}

export default function TaskForm ({btnText}: ITaskFormProps) {
  return (
    <form>
        <div>
            <label htmlFor='title'>Titulo</label>
            <input type="text" name='Title' placeholder='Qual titulo da sua tarefa?'/>
        </div>
        <div>
            <label htmlFor='Difficulty'>Tarefa</label>
            <input type="text" name='dificulty' placeholder='Qual é o nível de dificuldade da sua tarefa?'/>
        </div>
        <input type="button" value={btnText} />
    </form>
  );
}
