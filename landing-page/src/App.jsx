import React from  'react';
import Navbar from './components/Navbar';
import Banner from  './components/Banner';
import './index.css'

function App() {
  return (
    <div className='bg-gradient-to-b from-slate-900 to-slate-700'>
      <Navbar />
      <Banner />
    </div>
  )
}

export default App;
