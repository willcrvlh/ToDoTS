import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import TaskForm from "./Components/TaskForm/TaskForm";
import TaskList from "./Components/TaskList/TaskList";
import { ITask } from "./Interfaces/Task";
import S from "./app.module.css";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  return (
    <div className="App">
      <Header />
      <main className={S.main}>
        <TaskForm
          btnText="criar tarefa"
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <TaskList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
