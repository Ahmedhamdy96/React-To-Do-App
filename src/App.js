import React, { useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  const deleteTaskHandler = (id) => {
    const remainTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(remainTasks);
  };

  const markCompleteHandler = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div className="container">
      <AddTask onAddTask={addTaskHandler} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTaskHandler}
        onComplete={markCompleteHandler}
      />
    </div>
  );
};

export default App;
