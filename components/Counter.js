import React, { Component, PropTypes } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { value, actions } = this.props

    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={actions.doIncrement}>
          +
        </button>
        {' '}
        <button onClick={actions.doDecrement}>
          -
        </button>
      </p>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
/*  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired */
}

export default Counter
