import React, { Component } from 'react'
import Child from '@/pages/child'

export default class Date extends Component {
  state = {
    name: '小华'
  }
  constructor (props) {
    super(props)
    console.log(props.match.params)
  }

  componentWillReceiveProps (nextProps, nextState) {
    console.log(nextProps, 1)
  }

  onClick = () => {
    this.setState({
      name: '小白'
    })
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <Child name={name} />
        <button onClick={this.onClick}>点击</button>
      </div>
    )
  }
}
