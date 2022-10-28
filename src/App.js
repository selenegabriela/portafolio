import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './screens/LandingPage/LandingPage'
import Home from './screens/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPage />}/>
          <Route exact path='/home' element={<Home />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
