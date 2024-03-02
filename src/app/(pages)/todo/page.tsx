"use client"

import { useState } from "react"
import  "./todo.scss";
// import InputTodo from "@/features/todo/components/InputTodo";
// import IncompleteTodos from "@/features/todo/components/IncompleteTodos";
// import CompleteTodos from "@/features/todo/components/CompleteTodos";
import * as TodoComponents from "@/features/todo/components/Index";

export default function Todo() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event: any) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos:any = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
    // console.log("incompleteTodos:", incompleteTodos);
    // console.log("todoText:", todoText);
  }
  const onClickDelete = (index: any) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }
  const onClickComplete = (index: any) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  }
  const onClickBack = (index: any) => {
    const newcompleteTodos = [...completeTodos];
    newcompleteTodos.splice(index, 1);
    setCompleteTodos(newcompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  }

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;
  
  return (
    <main>
      <TodoComponents.InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxLimitIncompleteTodos}
      />
      {isMaxLimitIncompleteTodos && (
        <div>
          <p className={`colorRed`}>5個以上のTODOは登録できません</p>
        </div>
      )}
      <TodoComponents.IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <TodoComponents.CompleteTodos 
        todos={completeTodos}
        onClickBack={onClickBack}
      />
    </main>
  );
} 