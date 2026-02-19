import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './pages/Menu';
import { Breakfast } from './pages/Breakfast';


function App() {
  return (
    <>
 <main className='container mt-3'>
      <h1 className="title">Restaurant Menu</h1>
        <BrowserRouter>
            <Routes>
                <Route path='/breakfast' element={<Breakfast />} />
            </Routes>
        </BrowserRouter>
       
  </main>

    </>

  )
}

export default App;
