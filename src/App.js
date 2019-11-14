import React, { Component } from 'react';
import Quote from './component/Quote';
import Container from 'react-bootstrap/Container'
import './App.css'

class App extends Component {
  render() {
    return (
      <div class="body">
        <Container fluid>

            <section>
              <h4 className="text-center">Generate random quotes<br/> from cultist</h4>
            <Quote/>
            </section>
           
          
          
        
        </Container>
        
        
      </div>
    );
  }
}

export default App;
