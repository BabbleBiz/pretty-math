import React from 'react'
import axios from 'axios'
import {Form} from 'semantic-ui-react'

export default class ComponentForm extends React.Component {
  constructor () {
    super()
    this.state = {
      currentEquation: '',
      typeOfFunction: '',
      pastEquations: []
    }
  }

  async handleSubmit (event) {
    event.PreventDefault()
    //Use selector for the type of equation
    const response = await axios.get()
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
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="Equation" placeholder="Your equation here!" />
          <Form.Select fluid label="Equation Type" options={options} placeholder="Evalution Type"/>
        </Form.Group>
      </Form>

    )

  }


}
