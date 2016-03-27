import React, { Component } from 'react'
import { connect } from 'react-redux'
import TrainingCorrectnessTable from '../components/TrainingCorrectnessTable'
import { setProgressState, setInitialValidateList, ProgressStates } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    inputList: state.main.validateList,
    correctList: state.main.elements
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startOverButton: () => {
      dispatch(setProgressState(ProgressStates.NOT_STARTED))
    },
    tryAgainButton: (inputList) => {
      dispatch(setInitialValidateList());
      dispatch(setProgressState(ProgressStates.IN_VALIDATION))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingCorrectnessTable)
