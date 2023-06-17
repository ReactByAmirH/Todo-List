import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slice/todosSlice";


export default function AddTodo() {
    const [inputTodo, setInputTodo] = useState("")

    const dispatch = useDispatch();
    const inputTodoHandle = (e) => setInputTodo(e.target.value)
     const addTodoHandle=()=>{
        if(inputTodo.length>0){
            dispatch(addTodo({
                id:new Date().getTime(),
                text:inputTodo,
                done:false
            }));
            setInputTodo("");
                            
        }
     }
    return (
        <div>
            <div className="flex mt-4">
                <input onChange={inputTodoHandle} value={inputTodo} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800" placeholder="Add Todo" />
                <button onClick={addTodoHandle} className="p-2 border-2 rounded text-orange-500 border-orange-500  hover:text-white hover:bg-orange-500">Add</button>
            </div>
        </div>
    )
}
