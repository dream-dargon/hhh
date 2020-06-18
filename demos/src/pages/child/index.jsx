import React from 'react'

export default class Child extends React.PureComponent {
  shouldComponentUpdate (nextProps, nextState) {
    if(nextProps.name === this.props.name) {
      console.log('不渲染')
      return false
    }else {
      console.log('渲染')
      return true
    }
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        {name}
      </div>
    )
  }
}
