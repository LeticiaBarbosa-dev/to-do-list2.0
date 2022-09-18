import { FormEvent, useState } from "react";

import { PlusCircle, Trash } from "phosphor-react";
import "../styles/main.css";

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function Task() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitleTask, setNewTitleTask] = useState("");
  const [tasksCompleted, setTasksCompleted] = useState<Task[]>([]);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    console.log(tasks.length);

    if (!newTitleTask) {
      return;
    }
    const newTask = {
      id: Math.random(),
      title: newTitleTask,
      isComplete: false,
    };

    setTasks([...tasks, newTask]);
    setNewTitleTask("");
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id != id);

    countTasksComplete();
    setTasks(filteredTasks);
  }

  function handleToggleTaskComplete(id: number) {
    const newTask = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task
    );
    countTasksComplete();

    setTasks(newTask);
  }

  function countTasksComplete() {
    const filteredTasksCompleted = tasks.filter((task) => task.isComplete === true);

    setTasksCompleted(filteredTasksCompleted);
  }
  

  return (
    <>
      <div className="w-full flex flex-row justify-center items-center my-[-25px]">
        <input
          className="bg-[#262626] text-[#F2F2F2] p-4 rounded-lg w-[638px] h-[54px] mr-2 border-0 outline-0 focus:border border-[#9747FF]"
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={(e) => setNewTitleTask(e.target.value)}
          value={newTitleTask}
        />
        <button
          className="bg-[#1E6F9F] w-[90px] h-[52px] rounded-lg flex justify-between items-center p-4 text-[#F2F2F2] font-bold text-sm hover:bg-[#4EA8DE]"
          type="submit"
          onClick={handleCreateNewTask}
        >
          Criar <PlusCircle size={16} />
        </button>
      </div>
      <div className="w-full flex justify-center">
        <header className="flex items-center mt-16 mb-3 w-[736px] justify-between">
          <div className="flex">
            <span className="text-[#4EA8DE] font-bold text-sm mr-2">
              Tarefas criadas
            </span>
            <span className="bg-[#333333] font-bold rounded-lg flex flex-wrap flex-col justify-center items-center text-[#D9D9D9] text-xs px-2 py-1/2">
              {tasks.length}
            </span>
          </div>

          <div className="flex">
            <span className="text-[#4EA8DE] font-bold text-sm mr-2">
              Concluídas
            </span>
            <span className="bg-[#333333] font-bold rounded-lg flex flex-wrap flex-col justify-center items-center text-[#D9D9D9] text-xs px-2 py-1/2">
              {`${tasksCompleted.length} de ${tasks.length}`}
            </span>
          </div>
        </header>
      </div>

      <div className="w-full flex justify-center">
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="bg-[#262626] my-3 p-4 rounded-lg w-[736px]"
            >
              <div className="flex flex-auto items-center">
                <div className="mr-3">
                  <label>
                    <input
                      type="checkbox"
                      className="w-4 h-4 cursor-pointer"
                      readOnly
                      checked={task.isComplete}
                      onClick={() => handleToggleTaskComplete(task.id)}
                    />
                    <span className="inline-block text-gray-800"></span>
                  </label>
                </div>
                <div className="flex items-center flex-initial">
                  <p className="text-sm w-[632px] mr-3 text-[#F2F2F2]">
                    {task.title}
                  </p>
                  <button
                    className="text-[#808080] p-[6px] hover:bg-[#333333] hover:text-[#E25858] hover:rounded"
                    type="button"
                    onClick={() => handleRemoveTask(task.id)}
                  >
                    <Trash size={24} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
