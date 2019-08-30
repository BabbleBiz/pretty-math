import React from 'react'
import axios from 'axios'
import {Form} from 'semantic-ui-react'
import PastExpressions from './PastExpressions'

//Left this as an array so the options can easily be updated for the dropdown selector
const options = [
  { key: "simplify", text: "Simplify", value: "simplify", link: "https://www.jamesbrennan.org/algebra/intro%20to%20algebra/simplifying_algebraic_expression.htm"},
  { key: "factor", text: "Factor", value: "factor", link: "https://www.shmoop.com/algebraic-expressions/expressions-equations-factoring.html" },
  { key: "derive", text: "Derive", value: "derive", link: "https://www.quora.com/What-does-it-mean-to-derive-a-formula" },
  { key: "integrate", text: "Integrate", value: "integrate", link: "https://www.wyzant.com/resources/lessons/math/calculus/integration" },
  { key: "zeroes", text: "Find Zeros", value: "zeroes", link: "https://courses.lumenlearning.com/ivytech-collegealgebra/chapter/find-zeros-of-a-polynomial-function/" },
  { key: "tangent", text: "Find Tangent", value: "tangent", link: "https://www.wikihow.com/Find-the-Equation-of-a-Tangent-Line" },
  { key: "area", text: "Area Under Curve", value: "area", link: "https://revisionmaths.com/advanced-level-maths-revision/pure-maths/calculus/area-under-curve" },
  { key: "cos", text: "Cosine", value: "cos", link: "https://www.mathsisfun.com/sine-cosine-tangent.html" },
  { key: "sin", text: "Sine", value: "sin", link: "https://www.mathsisfun.com/sine-cosine-tangent.html" },
  { key: "tan", text: "Tangent", value: "tan", link: "https://www.mathsisfun.com/sine-cosine-tangent.html" },
  { key: "arccos", text: "Inverse Cosine", value: "arccos", link: "https://www.mathsisfun.com/algebra/trig-inverse-sin-cos-tan.html" },
  { key: "arcsin", text: "Inverse Sine", value: "arcsin", link: "https://www.mathsisfun.com/algebra/trig-inverse-sin-cos-tan.html" },
  { key: "arctan", text: "Inverse Tangent", value: "arctan", link: "https://www.mathsisfun.com/algebra/trig-inverse-sin-cos-tan.html" },
  { key: "abs", text: "Absolute Value", value: "abs", link: "https://www.wikihow.com/Find-the-Absolute-Value-of-a-Number" },
  { key: "log", text: "Logarithm", value: "log", link: "http://www.mclph.umn.edu/mathrefresh/logs.html" }
]


export default class ComponentForm extends React.Component {
  constructor () {
    super()
    this.state = {
      currentExpression: '',
      typeOfEvaluation: '',
      pastExpressions: []
    }
    //Binding the "this" context of the handlers to the component
    this.handleChangeExpression = this.handleChangeExpression.bind(this)
    this.handleChangeType = this.handleChangeType.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeType(event, data){
    //On change the selector will updated the value for the type of evaluation being used
    this.setState({
      typeOfEvaluation: data.value
    })
  }

  handleChangeExpression(event, data) {
    //On change the selector will updated the value for the equation being evaluated
    this.setState({
      currentExpression: data.value
    })
  }

  async handleSubmit () {
    //Use selector for the type of equation
    const {data} = await axios.get(`https://newton.now.sh/${this.state.typeOfEvaluation}/${this.state.currentExpression}`)
    //This function takes the short hand name of the function that is stored on state and returns the
    //full name of the type of expression executed
    function rename(shortHandType) {
      for (let i = 0; i < options.length; i++) {
        if (options[i].key === shortHandType) {
          return options[i].text
        }
      }
    }
    //Save the full name of the type of action instead of the short-hand version
    let fullTypeName = rename(this.state.typeOfEvaluation)
    const newExpressionSolved = { result: data.result, expression: data.expression, type: fullTypeName }

    let allExpressions = this.state.pastExpressions
    allExpressions.push(newExpressionSolved)
    //Reset state so user can enter another equation
    this.setState({
      currentExpression: '',
      typeOfEvaluation: '',
      pastExpressions: allExpressions
    })
  }

  render(){
    return (
      <div>
      <Form id="form">
        <Form.Group widths="equal">
            <Form.Input fluid label="Expression" placeholder="Your expression here!" onChange={this.handleChangeExpression} value={this.state.currentExpression}/>
          <Form.Select fluid label="Evaluation Type" options={options} placeholder="Evaluation Type" onChange={this.handleChangeType} value={this.state.typeOfEvaluation}/>
        </Form.Group>
        <Form.Button type='inverted' onClick={this.handleSubmit}>Submit</Form.Button>
      </Form>
      <PastExpressions pastExpressions={this.state.pastExpressions} options={options}/>
      </div>
    )
  }
}
