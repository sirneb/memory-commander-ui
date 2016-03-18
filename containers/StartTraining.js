import React from 'react'
import { connect } from 'react-redux'
import { setProgressState, ProgressStates, fetchTrainingSession } from '../actions/index'
import StartTrainingButton from '../components/StartTrainingButton'

const mapStateToProps = (state) => {
  return {
    count: state.main.options.elementsCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buttonSubmit: (count) => {
      dispatch(setProgressState(ProgressStates.IN_PROGRESS))
      dispatch(fetchTrainingSession(count))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartTrainingButton)
