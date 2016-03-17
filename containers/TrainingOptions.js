import React from 'react'
import { connect } from 'react-redux'
import IntervalOption from './IntervalOption'
import ElementsCountOption from './ElementsCountOption'

let TrainingOptions = () => {
  return (
    <div>
      <h3>Options</h3>
      <IntervalOption />
      <ElementsCountOption />
    </div>
  )
}

export default connect()(TrainingOptions)
