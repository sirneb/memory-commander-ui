import React from 'react'
import { connect } from 'react-redux'
import { setProgressState, ProgressStates } from '../actions/index'

let StartTraining = ({ dispatch }) => {
  return (
    <form onSubmit={e => {
      e.preventDefault()
      dispatch(setProgressState(ProgressStates.IN_PROGRESS))
    }}>
      <button type="submit">
        Start Training
      </button>
    </form>
  )
}

export default connect()(StartTraining)
