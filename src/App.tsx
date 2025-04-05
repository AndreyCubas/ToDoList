import React, { useState } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    const task: Task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

     setTasks([...tasks, task]);
    setNewTask("");
  };
  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
        
    ));
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask();
    }
  };
  return (
    <div>
      <h2>To-Do-List</h2>
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
          <li key={task.id} style = {{ textDecoration : task.completed ? "line-through" : "none"}}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
