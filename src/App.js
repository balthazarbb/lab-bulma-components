import React from 'react';
// import Navbar
import Navbar from './navbar/Navbar.js'
import 'bulma/css/bulma.css'
import FormField from './formfield/FormField.js';
import CoolButton from './coolbutton/CoolButton.js';

const App = (props) => {
  return (
    <div>
    <Navbar />
    <FormField label="Name" type="text" placeholder="Alex Smith"/>
    <FormField label="Email" type="text" placeholder="asmith@gmail.com"/>
    <CoolButton/>
  
  </div>
  )
};

export default App;
