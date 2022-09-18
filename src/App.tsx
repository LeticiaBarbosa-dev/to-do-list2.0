import "./styles/main.css";
import logoImg from "./assets/logo-toDo.svg";
import {  PlusCircle } from "phosphor-react";

function App() {
  return (
    <>
      <header className="bg-[#0D0D0D] w-full h-[200px] mx-auto flex flex-col justify-center items-center">
        <img src={logoImg} />
      </header>

      <div className="w-full flex flex-row justify-center items-center my-[-25px]">
        <input className="bg-[#262626] p-4 rounded  w-[638px] h-[54px] mr-2 " type="text" placeholder="Adicione uma nova tarefa" />
        <button className="bg-[#1E6F9F] w-[90px] h-[52px] rounded flex justify-between items-center p-4" type="submit">
          Criar <PlusCircle />
        </button>
      </div>
    </>
  );
}

export default App;
