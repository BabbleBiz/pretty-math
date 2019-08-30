import React from 'react';
import './App.css';
import {Button, Header, Modal, Divider, List} from 'semantic-ui-react'
import ComponentForm from './ComponentForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Solve equations!
        </p>
        <h3>
          Use this interface to solve anything from numerical calculation to symbolic math parsing
        </h3>
        <Modal trigger={<Button id="modalbutton">Help! I'm still confused</Button>} >
          <Modal.Header>How does this work?</Modal.Header>
          <Modal.Content >
            <Modal.Description>
              <Header>Expressions and Evaluation Methods</Header>
              <p>
                This webpage can help you evaluate expressions. An expression can range from a just a single number to a whole equation that you want to find the tangent of. Here are two examples of how you might use this application:
                <Divider fitted />
                <List bulleted>
                  <List.Item>
                    Input "-1" and select Absolute value, you will get the absolute value of the -1 which is 1.
                  </List.Item>
                  <List.Item>
                    Input x^2+2x and select Find Zeroes, it will return when that graph hits the y axis, which is [-2, 0].
                  </List.Item>
                </List>
              </p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </header>
      <div>
        <ComponentForm />
      </div>
    </div>
  );
}

export default App;
