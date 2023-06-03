import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import TaskForm from "./Components/TaskForm/TaskForm";
import S from './app.module.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <main className={S.main}>
      <TaskForm btnText="criar tarefa"/>
      </main>
      <Footer/> 
    </div>
  );
}

export default App;