import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

import Navigation from './Components/nav'
import Mainpage from './Components/mainpage'
import Practice from './Components/practice'
import Buisness from './Components/buisness'

function App() {
  return (
    <div className="App">
      
      <Container style={{width:'88%'}}>
        
        <Navigation></Navigation>
        <Mainpage></Mainpage>
        <Practice></Practice>
        <Buisness></Buisness>
       
      </Container>
      
      
       </div>

  );
}

export default App;
