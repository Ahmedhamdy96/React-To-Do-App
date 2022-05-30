import React from "react";
import NoTasks from "../NoTasks/NoTasks";
import Task from "../Task/Task";

import style from "./TaskList.module.css";

const TaskList = ({ tasks, onDeleteTask, onComplete }) => {
  const displayTasks = () => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onComplete={onComplete}
        />
      );
    });
  };

  return (
    <div className={style.tasksContainer}>
      {tasks.length > 0 ? displayTasks() : <NoTasks />}
    </div>
  );
};

export default TaskList;
