import React, { Component } from "react";

export default class Dice extends Component {
  state = {
    diceOne: null,
    diceTwo: null,
    diceThree: null,
  };

  randNum = (e) => {
    if (e.key === " ") {
      this.setState({
        diceOne: Math.ceil(Math.random() * 10),
        diceTwo: Math.ceil(Math.random() * 10),
        diceThree: Math.ceil(Math.random() * 10),
      });
    }
  };

  clickDiceOne = (e) => {
    this.setState({ diceOne: Math.ceil(Math.random() * 10) });
  };

  clickDiceTwo = (e) => {
    this.setState({ diceTwo: Math.ceil(Math.random() * 10) });
  };

  clickDiceThree = (e) => {
    this.setState({ diceThree: Math.ceil(Math.random() * 10) });
  };

  componentDidMount() {
    window.addEventListener("keyup", this.randNum);
  }

  render() {
    let { diceOne, diceTwo, diceThree } = this.state;
    return (
      <div className="diceDiv">
        <div className="dice diceOne" onClick={this.clickDiceOne}>
          {diceOne}
        </div>
        <div className="dice diceTwo" onClick={this.clickDiceTwo}>
          {diceTwo}
        </div>
        <div className="dice diceThree" onClick={this.clickDiceThree}>
          {diceThree}
        </div>
      </div>
    );
  }
}
