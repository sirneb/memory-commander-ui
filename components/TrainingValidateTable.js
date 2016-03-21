import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { setValidateListItem } from '../actions/index'

let TrainingValidateTable = ({ inputList, changeDispatch, checkResultsSubmit }) => {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Your Answer</th>
          </tr>
        </thead>
        <tbody>
          {
            inputList.map((item, index) => {
              return (
                <tr>
                  <td>
                  {index + 1}
                  </td>
                  <td>
                    <input type="text"
                      value={item}
                      onChange={e => {
                        changeDispatch(e.target.value, index);
                      }} />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <form onSubmit={e => {
        e.preventDefault();
        checkResultsSubmit();
      }}>
        <button type="submit button" className="btn-primary btn-lg btn-block">
          Check Answers
        </button>
      </form>
    </div>
  )
}

export default TrainingValidateTable
