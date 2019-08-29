import React from 'react'
import axios from 'axios'
import {Form} from 'semantic-ui-react'
import PastEquations from './PastEquations'

export default class ComponentForm extends React.Component {
  constructor () {
    super()
    this.state = {
      currentEquation: '',
      typeOfFunction: '',
      pastEquations: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      typeOfFunction: event.value
    })
  }

  async handleSubmit (event) {
    event.PreventDefault()
    //Use selector for the type of equation
    console.log("In submit")
    const response = await axios.get('https://newton.now.sh/abs/-1')
    console.log("Your data", response.data)
  }
  render(){
    //Left this as an array so the options can easily be updated
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
          <Form.Input fluid label="Equation" placeholder="Your equation here!" />
          <Form.Select fluid label="Equation Type" options={options} placeholder="Evalution Type"onChange={this.handleChange}/>
        </Form.Group>
        <Form.Button onSubmit={this.handleSubmit}>Submit</Form.Button>
      </Form>
      <PastEquations pastEquations={this.state.pastEquations}/>
      </div>
    )
  }
}
