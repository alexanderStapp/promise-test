import './App.css';
import Promises from './components/Promises';
import AsyncAwait from './components/AsyncAwait'
import Throw from './components/Throw'

function App() {
  return (
    <div className="App">
      <Promises />
      <AsyncAwait />
      <Throw />
    </div>
  );
}

export default App;
