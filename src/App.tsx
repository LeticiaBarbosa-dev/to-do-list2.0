import "./styles/main.css";
import logoImg from "./assets/logo-toDo.svg";
import {  PlusCircle } from "phosphor-react";
import { Task } from "./components/Task";

function App() {
  return (
    <>
      <header className="bg-[#0D0D0D] w-full h-[200px] mx-auto flex flex-col justify-center items-center">
        <img src={logoImg} />
      </header>
      <Task />
    </>
  );
}

export default App;
