import React from "react";
import { useSelector } from "react-redux";
import AddTodo from "./addTodo";
import TodoItem from "./todoItem";
export default function TodosPart() {
    const todos=useSelector(state=>state.todos.list)
  return( 
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-3xl border">
          <div className="mb-4">
              <h1 className="text-yellow-700 text-3xl font-bold">Todo List</h1>
              <AddTodo/>
          </div>
          <div>
             { todos.map(todo=><TodoItem key={todo.id} todo={todo} />)
              }
          </div>
      </div>
  </div>
  )
}
