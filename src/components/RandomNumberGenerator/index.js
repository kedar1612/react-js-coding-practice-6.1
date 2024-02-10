// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateRandomNumber = () => Math.ceil(Math.random() * 100)

  onGenerate = () => {
    const generateTheRandom = this.generateRandomNumber()
    this.setState(prevState => ({count: prevState.count + generateTheRandom}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="randomContainer">
        <h1 className="heading">Random Number</h1>
        <p className="info">
          Generate a random number in the range of 0 to 100
        </p>
        <button type="button" className="button" onClick={this.onGenerate}>
          Generate
        </button>
        <p className="displayNumber">{count}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
