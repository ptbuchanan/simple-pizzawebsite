import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import {BrowserRouter, Route, Routes, Router} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* These routes contain our specific pages */}
          <Route path="/" exact component={Home}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
