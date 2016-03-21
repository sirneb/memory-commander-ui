import React, { Component } from 'react'
import { connect } from 'react-redux'
import TrainingCorrectnessTable from '../components/TrainingCorrectnessTable'
import { setProgressState, ProgressStates } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    inputList: state.main.validateList,
    correctList: state.trainingSessionRequest.elements
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startOverButton: () => {
      dispatch(setProgressState(ProgressStates.NOT_STARTED))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingCorrectnessTable)
