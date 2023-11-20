import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Development from './pages/Development/Developmant';
import Tasks from './pages/Tasks/Tasks';

function App() {
  return (
    <div className='Main'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/development" element={<Development />} />
            <Route path='/tasks' element={<Tasks />}></Route>
          </Routes>
        </BrowserRouter>
    </div>

  );
}

export default App;


