import React from 'react'
import { Container, Header } from 'semantic-ui-react'


export default function PastExpressions (props){
  //grab the props sent down from the parent component
  let pastExpressions = props.pastExpressions;
  //Helper function that takes an evaluation method and returns a link to more info on that type
  //of evaluation
  function typeToLink (typeOfEvaluation){
    //Look through all the options and find the one where the key matches the evaluation method
    for (let i = 0; i < props.options.length; i++){
      console.log("props options i", (typeOfEvaluation))
      if (props.options[i].text === typeOfEvaluation){
        return props.options[i].link;
      }
    }
  }
  return (
    <Container fluid>
      <Header>
        Your past expressions:
      </Header>
      <div>
        {pastExpressions.length ?
          pastExpressions.map((expression, index) => {
            let link = typeToLink(expression.type)
            console.log("link", link)
            return (
              <p key={index}>You asked us to find the {expression.type} of {expression.expression}. It was   {expression.result}. Confused how we got that? Learn more about {expression.type} <a href={link}>here!</a> </p>
              )
        }): <p>You don't have any past expressions</p>}
      </div>
    </Container>
  )
}
