import { Routes, Route } from 'react-router-dom';
import Register from './components/Registro/Registro'
import Nav from './components/NavBar/Nav';
import './App.css'

function App() {

  return (
    <><Nav /><section>
      <Routes>
        <Route path='/' element={<Register />} />
      </Routes>
    </section></>
  );
};

export default App
