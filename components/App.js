import React from 'react'
import StartTraining from '../containers/StartTraining'
import TrainingOptions from '../components/TrainingOptions'
import TrainingArena from '../containers/TrainingArena'
import TrainingValidate from '../containers/TrainingValidate'
import TrainingResults from '../containers/TrainingResults'
import {
  ProgressStates
} from '../actions/index'

const App = ({ progressState }) => {
  let component;
  switch (progressState) {
    case ProgressStates.IN_PROGRESS:
      return (
        <TrainingArena />
      )
    case ProgressStates.IN_VALIDATION:
      return (
        <TrainingValidate />
      )
    case ProgressStates.RESULTS:
      return (
        <TrainingResults />
      )
    default:
      return (
        <div>
          <TrainingOptions />
          <StartTraining />
        </div>
      )
  }
}

export default App
