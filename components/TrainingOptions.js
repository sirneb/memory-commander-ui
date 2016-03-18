import React from 'react'
import { connect } from 'react-redux'
import IntervalOption from '../containers/IntervalOption'
import ElementsCountOption from '../containers/ElementsCountOption'

let TrainingOptions = () => {
  return (
    <div>
      <h3>Options</h3>
      <IntervalOption />
      <ElementsCountOption />
    </div>
  )
}

export default TrainingOptions
