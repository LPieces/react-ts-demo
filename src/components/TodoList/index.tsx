import React,{ useCallback, useState, useEffect, useReducer } from 'react'
import TdInput from './Input'
import TdList from './List'
import { todoReducer } from './reducer'
import { ITodo, IState, ACTION_TYPE } from './typings'

const initialState: IState = {
  todoList: []
}

const TodoList: React.FC = (): React.ReactElement => {

  // const [todoList, setTodoList] = useState<ITodo[]>([]);

  const [ state, dispatch ] = useReducer(todoReducer, initialState);

  useEffect(()=>{
    const todoList = JSON.parse(localStorage.getItem('todoList') || '[]');
    dispatch({
      type: ACTION_TYPE.INIT_TODOLIST,
      payload: todoList
    })
  }, []);

  useEffect(()=>{
    localStorage.setItem('todoList', JSON.stringify(state.todoList));
  },[state.todoList])

  const addTodo = useCallback((todo: ITodo): void => {
    // setTodoList(todoList => [...todoList,todo]);
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload: todo
    });
  }, [])

  const removeTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.REMOVE_TODO,
      payload: id
    })
  },[]);

  const toggleTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_TODO,
      payload: id
    })
  },[]);

  return (
    <div>
      <TdInput addTodo={ addTodo } todoList={ state.todoList } />
      <TdList todoList={ state.todoList } 
      removeTodo={ removeTodo } 
      toggleTodo={ toggleTodo }  />
    </div>
  )
}

export default TodoList