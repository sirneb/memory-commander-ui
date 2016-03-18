import React from 'react'
import { connect } from 'react-redux'
import { setProgressState, ProgressStates } from '../actions/index'
import StartTrainingButton from '../components/StartTrainingButton'

const mapDispatchToProps = (dispatch) => {
  return {
    buttonSubmit: () => {
      dispatch(setProgressState(ProgressStates.IN_PROGRESS))
    }
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(StartTrainingButton)
