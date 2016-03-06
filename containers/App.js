import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter.js'
import * as Actions from '../actions/action.js'

class App extends Component {

  render() {
    const { value, actions } = this.props
    return (
      <div>
        <Counter value={value} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    value: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
