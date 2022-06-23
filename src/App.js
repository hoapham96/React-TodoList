import React, { useEffect } from 'react'
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import TodoList from './components/TodoList';
import {useState,useCallback} from 'react';
import {v4} from 'uuid'
// import UserInput from './components/UserInput';

const TODO_APP_STORAGE_KEY = "TODO_APP"

function App() {
  const [todoList,setTodoList] = useState([]); // array
  const [textInput,setTextInput] = useState(""); // array

  useEffect(() =>{
    const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (storagedTodoList) {
      setTodoList(JSON.parse(storagedTodoList))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList))
  }, [todoList]);

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value) 
  },[]);

  const onAddBtnClick = useCallback((e) => {
    // add text input in the todoList
    setTodoList([...todoList, {id: v4() , name: textInput, isCompleted: false }]);
    
    setTextInput('')
  },[textInput, todoList])

  const onCheckBtnClick = useCallback((id) =>{
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ?  { ...todo, isCompleted: true} : todo
      )
    )
  },[])

  return (
    <div>
      {/* <UserInput/> */}
      <h3>List to do</h3>
      <Textfield 
      name='add-todo' 
      placeholder='add to do' 
      elemAfterInput={
        <Button isDisabled={!textInput} appearance='primary' onClick={onAddBtnClick}>
          Add
        </Button>}
        value={textInput}
        onChange={onTextInputChange}
        >
      </Textfield>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} />
    </div>
  );
}

export default App;
