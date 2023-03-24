import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import UpdateContact from './Components/UpdateContact';

// in this project i am using bootstrap for styling components 

const App = () => {
  return (
   
    // Routing all the Component 
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={ <AddContact />} /> 
          <Route path='/read' element={<ContactList />} />
          <Route path='/update' element={<UpdateContact/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;

