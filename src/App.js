import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OurStory from './Pages/OurStory/OurStory';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/ourstory" element={<OurStory/>}/>
      </Routes>
    </div>
  );
}

export default App;
