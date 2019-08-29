import React from 'react'
import { Container, Header } from 'semantic-ui-react'

export default function PastEquations (props){
  //grab the props sent down from the parent component
  let pastEquations = props.pastEquations
  return (
    <Container fluid>
      <Header>
        Your past equations:
      </Header>
      <div>
        {pastEquations.length?
        pastEquations.map(equation => {
         return (<p>{equation.input} {equation.type} {equation.result}</p>)
        }): <p>You don't have any past equations</p>}
      </div>
    </Container>
  )
}
