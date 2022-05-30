import React, { useState } from "react";
import style from "./AddTask.module.css";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";

const AddTask = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");
  const [err, setErr] = useState();

  const errHandler = () => {
    setErr(null);
  };
  const addTask = (e) => {
    e.preventDefault();

    // empty task handling ============
    if (inputValue === "") {
      setErr({ msg: "Input shouldn't be empty." });
      return;
    }
    // ================================

    onAddTask({
      id: Math.random(),
      description: inputValue,
      isCompleted: false,
    });
    setInputValue("");
  };

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {err && <Modal errMsg={err} errHandler={errHandler} />}
      <div className={style.addContainer}>
        <form>
          <input
            type="text"
            placeholder="Enter a task"
            className={style.input}
            value={inputValue}
            onChange={inputHandler}
          ></input>
          <Button onClick={addTask} className={style.btn}>
            Add Task
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddTask;
