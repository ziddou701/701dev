import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavBar from './Components/TopNavBar';

function App() {
  return (
    <div className="App">
        <Router>
          <TopNavBar/>
            <Routes>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
