import * as React from 'react';
import S from './TaskList.module.css'
export default function TaskList () {
  return (
    <div className={S.lista}>
      <h1 className={S.titulo2}>Suas Tarefas</h1>
      <h3 className={S.texto}>Sua lista de tarefas</h3>
    </div>
  );
}