import './App.css';
import InputForm from './components/InputForm';
import Title from './components/Title';
import TodoList from './components/TodoList';
import React, {useState} from 'react'

function App() {
  const [tasklist, setTaskList] = useState([])

  return (
    <div class="bg_pattern Polka_v2" className="App">
      <Title />
      <InputForm tasklist={tasklist} setTaskList={setTaskList}/>
      <TodoList tasklist={tasklist} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
