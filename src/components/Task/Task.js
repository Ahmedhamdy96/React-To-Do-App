import React from "react";
import style from "./Task.module.css";

import Button from "./../UI/Button/Button";

const Task = ({ task, onDeleteTask, onComplete }) => {
  const deleteHandler = (e) => {
    e.stopPropagation();
    onDeleteTask(task.id);
  };

  const markComplete = () => {
    onComplete(task.id);
  };

  return (
    <div className={style.taskContainer} onClick={markComplete}>
      <p className={task.isCompleted ? `${style.complete}` : ""}>
        {task.description}
      </p>

      <Button onClick={deleteHandler} className={style.btn}>
        Delete
      </Button>
    </div>
  );
};

export default Task;
