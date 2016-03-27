import React, { Component } from 'react'
import { connect } from 'react-redux'
import TrainingArea from '../components/TrainingArea'
import Spinner from 'spin'

class TrainingArena extends Component {
  constructor(props, context) {
    super(props, context)
    this.spinner = new Spinner();
  }

  render() {
    const { isFetching, fetchSuccess, currentElement } = this.props
    if (!fetchSuccess && isFetching) {
      var target = document.getElementById('training-area');
      this.spinner.spin(target);
    } else {
      this.spinner.stop();
    }
    return (
      <div>
        <TrainingArea element={currentElement} />
      </div>
    )
  }
}

const getElement = (state) => {
  var index = state.main.currentElementIndex;
  return {
    isFetching: state.trainingSessionRequest.isFetching,
    fetchSuccess: state.trainingSessionRequest.fetchSuccess,
    currentElement: state.main.elements[index]
  }
}

export default connect(getElement)(TrainingArena)
