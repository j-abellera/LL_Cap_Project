import './App.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';
import Reservations from './components/Reservations/Reservations.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div id='container'>
      <Header />
        <Routes>
          <Route exact strict path='/' element={<Main />} />
          <Route path='/reservations' element={<Reservations />} />
        </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
