import React from 'react'
import { connect } from 'react-redux'
import IntervalOption from '../containers/IntervalOption'
import ElementsCountOption from '../containers/ElementsCountOption'

let TrainingOptions = () => {
  return (
    <div id="training-options">
      <div className="container-fluid">
        <div className="row">
          <h3><span className="glyphicon glyphicon-cog"></span> Options</h3>
          <form class="form-horizontal">
            <div class="form-group">
              <IntervalOption />
              <ElementsCountOption />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TrainingOptions
