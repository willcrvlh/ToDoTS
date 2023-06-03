import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import S from './app.module.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <main className={S.main}>
      <p>CONTEUDO EM DESENVOLVIMENTO</p>
      </main>
      <Footer/> 
    </div>
  );
}

export default App;