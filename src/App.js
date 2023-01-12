import './App.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div id='container'>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
