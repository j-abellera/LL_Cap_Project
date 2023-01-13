import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';
import Reservations from './components/Booking Form/Reservations.js';
import SuccessPage from './components/SuccessPage/SucessPage.js';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [form, setForm] = useState({
    name: '',
    guests: '',
    date: '',
    time: '',
    phone: '',
    comments: '',
    disabled: ''
  })
  const navigate = useNavigate();

  const onChange = e => {
    const {name, value} = e.target;
    setForm({...form, [name]: value})
}

  const onSubmit = e => {
  e.preventDefault();
  navigate('/reservations/submitted')
  // setForm({
  //   name: '',
  //   guests: '',
  //   date: '',
  //   time: '',
  //   phone: '',
  //   comments: ''
  // })
  }
  return (
    <>
    <div id='container'>
      <Header />
        <Routes>
          <Route exact strict path='/' element={<Main />} />
          <Route exact strict path='/reservations' element={<Reservations form={form} setForm={setForm} onChange={onChange} onSubmit={onSubmit} />} />
          <Route path='/reservations/submitted' element={<SuccessPage form={form} />} />
        </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
