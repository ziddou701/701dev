import './App.css';
import Homepage from './Components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavBar from './Components/TopNavBar';

function App() {
  return (
    <div className="App">
        <Router>
          <TopNavBar/>
          <Homepage/>
        </Router>
    </div>
  );
}

export default App;
