import React from 'react'

let StartTrainingButton = ({ buttonSubmit }) => {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      buttonSubmit();
    }}>
      <button type="submit">
        Start Training
      </button>
    </form>
  )
}

export default StartTrainingButton
