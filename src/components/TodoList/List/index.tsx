import React from "react";
import { ITodo } from "../typings";
import TdItem from "./Item"

interface IProps{
  todoList: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TdList: React.FC<IProps> = ({
  todoList,
  removeTodo,
  toggleTodo
}): React.ReactElement => {
  return(
    <div>
      {
        todoList && todoList.map((todo: ITodo) => {
          return (
            <TdItem 
              key={ todo.id }
              todo={ todo }
              removeTodo= { removeTodo }
              toggleTodo={ toggleTodo }
            />
          )
        })
      }
    </div>
  )
}

export default TdList