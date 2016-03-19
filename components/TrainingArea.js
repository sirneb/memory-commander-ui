import React from 'react'
import { connect } from 'react-redux'

let TrainingArea = ({ element }) => {

  return (
    <div id="training-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <span id='training-element'>{element}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingArea
