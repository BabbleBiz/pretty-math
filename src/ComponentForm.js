import React from 'react'
import axios from 'axios'
import {Form} from 'semantic-ui-react'
import PastEquations from './PastEquations'

export default class ComponentForm extends React.Component {
  constructor () {
    super()
    this.state = {
      currentEquation: '',
      typeOfEvaluation: '',
      pastEquations: []
    }
    //Binding the "this" context of the handlers to the component
    this.handleChangeEquation = this.handleChangeEquation.bind(this)
    this.handleChangeType = this.handleChangeType.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeType(event, data){
    //On change the selector will updated the value for the type of evaluation being used
    this.setState({
      typeOfEvaluation: data.value
    })
  }

  handleChangeEquation(event, data) {
    //On change the selector will updated the value for the equation being evaluated
    console.log("data", data.value)
    this.setState({
      currentEquation: data.value
    })
  }

  async handleSubmit () {
    //Use selector for the type of equation
    const response = await axios.get(`https://newton.now.sh/${this.state.typeOfEvaluation}/${this.state.currentEquation}`)
    console.log("Your data", response.data)
    //Reset state so user can enter another equation
    this.setState({
      currentEquation: '',
      typeOfEvaluation: '',
    })
  }
  render(){
    //Left this as an array so the options can easily be updated for the dropdown selector
    const options = [
      {key: "simplify", text: "Simplify", value: "simplify"},
      { key: "factor", text: "Factor", value: "factor" },
      { key: "derive", text: "Derive", value: "derive" },
      { key: "integrate", text: "Integrate", value: "integrate" },
      { key: "zeroes", text: "Find Zeros", value: "zeroes" },
      { key: "tangent", text: "Find Tangent", value: "tangent" },
      { key: "area", text: "Area Under Curve", value: "area" },
      { key: "cos", text: "Cosine", value: "cos" },
      { key: "sin", text: "Sine", value: "sin" },
      { key: "tan", text: "Sine", value: "tan" },
      { key: "arccos", text: "Inverse Cosine", value: "arccos" },
      { key: "arcsin", text: "Inverse Sine", value: "arcsin" },
      { key: "arctan", text: "Inverse Tangent", value: "arctan" },
      { key: "abs", text: "Absolute Value", value: "abs" },
      { key: "log", text: "Logarithm", value: "log" }
    ]
    return (
      <div>
      <Form>
        <Form.Group widths="equal">
            <Form.Input fluid label="Equation" placeholder="Your equation here!" onChange={this.handleChangeEquation}/>
          <Form.Select fluid label="Equation Type" options={options} placeholder="Evaluation Type" onChange={this.handleChangeType}/>
        </Form.Group>
        <Form.Button type='inverted' onClick={this.handleSubmit}>Submit</Form.Button>
      </Form>
      <PastEquations pastEquations={this.state.pastEquations}/>
      </div>
    )
  }
}
