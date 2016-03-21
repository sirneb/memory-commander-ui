import React, { Component } from 'react'
import { connect } from 'react-redux'
import TrainingValidateTable from '../components/TrainingValidateTable'
import { setValidateListItem, setProgressState, ProgressStates } from '../actions/index'

const getValidateList = (state) => {
  return {
    inputList: state.main.validateList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDispatch: (value, index) => {
      dispatch(setValidateListItem(value, index))
    },
    checkResultsSubmit: () => {
      dispatch(setProgressState(ProgressStates.RESULTS))
    }
  }
}

export default connect(
  getValidateList,
  mapDispatchToProps
 )(TrainingValidateTable)
