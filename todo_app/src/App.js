import './App.css';
import InputForm from './components/InputForm';
import Title from './components/Title';
import TodoList from './components/TodoList';

function App() {
  return (
    <div class="bg_pattern Polka_v2" className="App">
      <Title />
      <InputForm />
      <TodoList />
    </div>
  );
}

export default App;
