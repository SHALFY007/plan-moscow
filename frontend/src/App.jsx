import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Development from './pages/Development/Developmant';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/development" element={<Development />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;


