import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { setTimerInterval } from '../actions/index'

const getIntervalOption = (state) => {
  return {
    timerInterval: state.main.options.timerInterval
  }
}
let IntervalOption = ({ dispatch, timerInterval }) => {
  return (
    <div>
      <label for="timer-interval" className="col-sm-2 control-label">Time interval:</label>
      <div className="col-md-3 col-sm-10">
        <input
          className="form-control"
          type="text"
          name="timer-interval"
          value={timerInterval}
          onChange={e =>
            { dispatch(setTimerInterval(e.target.value)) }
          } />
      </div>
    </div>
  )
}

export default connect(getIntervalOption)(IntervalOption)
