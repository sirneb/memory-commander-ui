import React from 'react'

let StartTrainingButton = ({ count, timerInterval, buttonSubmit }) => {
  return (
    <div id="start-training">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <form onSubmit={e => {
              e.preventDefault();
              buttonSubmit(count, timerInterval);
            }}>
              <button type="submit button" className="btn-primary btn-lg btn-block">
                Start Training
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartTrainingButton
