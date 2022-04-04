import * as React from 'react';
import './App.css';
import Typography from 'mui/material/Typography'
import Container from 'mui/material/Container';
import Home from './Components/Home/Home'


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <link color="inherit" href="https://adsolution.co.za/">
     ADS AMANZUNZA DEBT SOLUTION (PTY) LTD
      </link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// Function of our Application
function App() {
  return (
    <div className="Container">
{/* ADS AMANZUNZA DEBT SOLUTIONS (PTY) LTD */} 

<header className="Ads-header" id="Debt__Text">
  <div className='Logo__Header__Container'> Amanzunza
 <span className='Debt__Text'>Debt Solutions (PTY) LTD</span>
  </div>
</header>  
<Container className="Home__Container">
      <Home/> 
</Container>
<Container className="Footer__Container">
  {Copyright}
</Container>
    </div>
  );
}

export default App;
