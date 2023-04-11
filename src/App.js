import Header from './components/Header';
import './App.css';
import TodosLogic from './components/TodosLogic';

function App() {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
}

export default App;
