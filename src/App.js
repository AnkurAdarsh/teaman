import "./App.css";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Home} from './components/Index';
import { Menu } from './components/Menu';
import { Aboutus } from './components/Aboutus';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/*' element={<Navigate to="/"/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/Aboutus' element={<Aboutus/>}/>
          <Route path='/Gallery' element={<Gallery/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
