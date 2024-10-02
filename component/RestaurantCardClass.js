import React, { Component } from 'react'

export default class RestaurantCardClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'Dummy'
        }
        console.log("contructor")
    }

    componentDidMount() {
        this.setState({
            name:'Shruthi'
        })
        console.log("componentDidMount")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
  render() {
    console.log("render")
    return (
      <div>{this.state.name}</div>
    )
  }
}
