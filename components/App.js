import React from 'react'
import StartTraining from '../containers/StartTraining'
import TrainingOptions from '../components/TrainingOptions'
import TrainingArena from '../containers/TrainingArena'

const App = () => (
  <div>
    <TrainingOptions />
    <StartTraining />
    <TrainingArena />
  </div>
)

export default App
