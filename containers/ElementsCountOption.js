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
      <label for="elements-count">Number of elements:</label>
      <input type="text"
        name="elements-count"
        value={elementsCount}
        onChange={e =>
          { dispatch(setElementsCount(e.target.value)) }
        } />
    </div>
  )
}

export default connect(getCountOption)(ElementsCountOption)
