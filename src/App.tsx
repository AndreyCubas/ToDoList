import React, { useState } from "react";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    if (tasks.includes(newTask)) return; // Evita duplicação de tarefas
    setTasks([...tasks, newTask]);
    setNewTask(""); // Limpa o campo de entrada
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter"){
      addTask();
    }
  }
  return (
    <div>
      <h2>
        To-Do-List
      </h2>
      <input 
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="Digite uma Tarefa"
        onKeyUp={handleKeyDown}
        
      />
      <button onClick={addTask}>Adicionar</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

/*Nessas linhas acima o codigo esta criando um componente funcional denomidado App, apos isso ele cria um estado chamado tasks que é um array de strings, e por fim ele retorna um elemento div com um h2 dentro dele com o texto To-Do-List*/
