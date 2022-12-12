import logo from './logo.svg';
import './App.css';

import Home from './Pages/Home/Home/Home';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';

function App() {

  // const[dark,setDark]=useState(true)
  return (
    <div className='bg-gray-200'>


      <RouterProvider router={router}></RouterProvider>
      
     
    </div>
  );
}

export default App;
