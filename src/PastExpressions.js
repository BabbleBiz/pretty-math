import React from 'react'
import { Container, Header } from 'semantic-ui-react'

export default function PastExpressions (props){
  //grab the props sent down from the parent component
  let pastExpressions = props.pastExpressions
  console.log('props', props)
  return (
    <Container fluid>
      <Header>
        Your past equations:
      </Header>
      <div>
        {pastExpressions.length ?
          pastExpressions.map((expression, index) => {
            console.log("expression", expression)
            return (<p key={index}>{expression.expression} {expression.type} {expression.result}</p>)
        }): <p>You don't have any past equations</p>}
      </div>
    </Container>
  )
}
