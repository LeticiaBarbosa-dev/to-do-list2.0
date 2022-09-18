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
        <input className="bg-[#262626] text-[#F2F2F2] p-4 rounded w-[638px] h-[54px] mr-2 border-0 outline-0 focus:border border-[#9747FF]" type="text" placeholder="Adicione uma nova tarefa" />
        <button className="bg-[#1E6F9F] w-[90px] h-[52px] rounded flex justify-between items-center p-4 text-[#F2F2F2] font-bold text-sm hover:bg-[#4EA8DE]" type="submit">
          Criar <PlusCircle size={16} />
        </button>
      </div>
    </>
  );
}

export default App;
