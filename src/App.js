
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sidebar/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
