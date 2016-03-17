import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { setTimerInterval } from '../actions/index'

const getIntervalOption = (state) => {
  return {
    timerInterval: state.options.timerInterval
  }
}
let IntervalOption = ({ dispatch, timerInterval }) => {
  return (
    <div>
      <label for="timer-interval">Time interval:</label>
      <input type="text" name="timer-interval" value={timerInterval} onChange={e => { dispatch(setTimerInterval(e.target.value)) }} />
    </div>
  )
}

export default connect(getIntervalOption)(IntervalOption)
