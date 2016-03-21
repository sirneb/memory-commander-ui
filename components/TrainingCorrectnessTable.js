import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { setValidateListItem } from '../actions/index'
import TrainingValidateInput from '../containers/TrainingValidateInput'
import _ from 'lodash'

const CORRECT_ICON = 'glyphicon glyphicon-ok'
const WRONG_ICON = 'glyphicon glyphicon-remove'

let TrainingCorrectnessTable = ({ inputList, correctList, startOverButton }) => {
  let totalCorrect = _.reduce(inputList, (memo, item, index) => {
    if (item == correctList[index]) {
      memo += 1;
    }
    return memo;
  }, 0)
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Your Answer</th>
            <th>Actual</th>
            <th>Results <span className="correct-ratio pull-right">{totalCorrect} / {correctList.length} Correct</span></th>
          </tr>
        </thead>
        <tbody>

          {
            inputList.map((item, index) => {
              let resultIcon, resultClass;
              if (item == correctList[index]) {
                resultIcon = CORRECT_ICON;
                resultClass = 'correct'
              } else {
                resultIcon = WRONG_ICON;
                resultClass = 'wrong'
              }
              return (
                <tr className={resultClass}>
                  <td>
                    {index + 1}
                  </td>
                  <td>
                    {item}
                  </td>
                  <td>
                    {correctList[index]}
                  </td>
                  <td>
                    <span className={resultIcon}></span>
                  </td>
                </tr>
                )
            })
          }
        </tbody>
      </table>
      <button type="button"
        className="btn-default btn-lg btn-block"
        onClick={e => {
          startOverButton();
        }}
        >
        Start Over
      </button>
    </div>
  )
}

export default TrainingCorrectnessTable
