import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { setElementsCount } from '../actions/index'

const getCountOption = (state) => {
  return {
    elementsCount: state.main.options.elementsCount
  }
}
let ElementsCountOption = ({ dispatch, elementsCount }) => {
  return (
    <div>
      <label for="elements-count" className="col-sm-2 control-label">Number of elements:</label>
      <div className="col-md-3 col-sm-10">
        <input type="text"
          className="form-control"
          name="elements-count"
          value={elementsCount}
          onChange={e =>
            { dispatch(setElementsCount(e.target.value)) }
          } />
        </div>
    </div>
  )
}

export default connect(getCountOption)(ElementsCountOption)
