import React, { useRef, FC } from "react";
import { ITodo } from "../typings";

interface IProps {
  addTodo: (todo: ITodo) => void;
  todoList: ITodo[];
}

const TdInput: FC<IProps> = ({
  addTodo,
  todoList
}): React.ReactElement => {

  const inputRef = useRef<HTMLInputElement>(null);
  
  const addItem = (): void => {
    console.log("addItem=>",inputRef.current!.value);
    const val: string = inputRef.current!.value.trim();
    if(val.length){
      const isExisst = todoList.find(todo => todo.content === val);
      if(isExisst){
        alert('已存在');
      }else{
        addTodo({
          id: new Date().getTime(),
          content: val,
          completed: false
        });
        inputRef.current!.value = '';
      }
    }
  }


  return(
    <div className="todo-input">
      <input type="text" placeholder="请输入" ref={ inputRef } />
      <button onClick={ addItem }>增加</button>
    </div>
  )
}

/*
  {
    id: number,
    content: string,
    completed: boolean
  }
*/
export default TdInput