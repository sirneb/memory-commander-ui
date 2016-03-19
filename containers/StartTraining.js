import React from 'react'
import { connect } from 'react-redux'
import { setProgressState, ProgressStates, fetchTrainingSession } from '../actions/index'
import StartTrainingButton from '../components/StartTrainingButton'

const mapStateToProps = (state) => {
  return {
    count: state.main.options.elementsCount,
    timerInterval: state.main.options.timerInterval
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buttonSubmit: (count, timerInterval) => {
      dispatch(fetchTrainingSession(count, timerInterval))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartTrainingButton)
