import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0,
      error: ''
    }

    this.handleDepositClick = this.handleDepositClick.bind(this)
    this.handleWithdrawClick = this.handleWithdrawClick.bind(this)
  }

  handleWithdrawClick(e) {
    this.setState({
      error: ''
    })
    e.preventDefault();
    //if the withdraw is less than the balance
    if(this.refs.amount.value < 0 || isNaN(this.refs.amount.value)){
      console.log("Not a positive number");
      this.setState({
        error: 'Not a positive number!',
      })
      this.refs.amount.value = '';
    //if this amount is not a number
    } else if(this.state.balance - this.refs.amount.value < 0){
      console.log("Not enough money!");
      this.setState({
        error: 'Not enough money!',
      })
      this.refs.amount.value = '';
    //GOOD! the withdraw is less than the balance and a number  
    } else {
      let amount = +this.refs.amount.value;
      let newBalance = this.state.balance - amount;
      this.setState({
        balance: newBalance
      })
      this.refs.amount.value = '';
    }
  };

  handleDepositClick(e) {
    this.setState({
      error: ''
    })
    e.preventDefault();
    //if the withdraw is less than the balance
    if(this.refs.amount.value < 0 || isNaN(this.refs.amount.value)){
      console.log("Not a positive number");
      this.setState({
        error: 'Not a positive number!',
      })
      this.refs.amount.value = '';
    //GOOD! the withdraw is less than the balance and a number  
    } else {
      let amount = +this.refs.amount.value;
      let newBalance = this.state.balance + amount;
      this.setState({
        balance: newBalance
      })
      this.refs.amount.value = '';
    }
  };


  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <p>{this.state.error}</p>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawClick} />
      </div>
    )
  }
};
