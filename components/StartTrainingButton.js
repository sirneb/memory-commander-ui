import React from 'react'

let StartTrainingButton = ({ count, buttonSubmit }) => {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      buttonSubmit(count);
    }}>
      <button type="submit">
        Start Training
      </button>
    </form>
  )
}

export default StartTrainingButton
