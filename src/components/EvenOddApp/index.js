// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  randamNumber = () => {
    this.setState(() => ({
      number: Math.ceil(Math.random() * 100),
    }))
  }

  evenOdd = () => {
    const {number} = this.state
    return number % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {number} = this.state
    const value = this.evenOdd()
    return (
      <div className="math-container">
        <h1 className="main-container">Count {number}</h1>
        <p className="check-heading">Count is {value} </p>
        <button
          className="button-style"
          type="button"
          onClick={this.randamNumber}
        >
          Increment
        </button>
        <p className="contion-para">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}
export default EvenOddApp
