export const SET_PROGRESS_STATE = 'SET_PROGRESS_STATE'
export const SET_TIMER_INTERVAL = 'SET_TIMER_INTERVAL'
export const SET_ELEMENTS_COUNT = 'SET_ELEMENTS_COUNT'

export const ProgressStates = {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS'
}

export const setProgressState = (progressState) => {
  return {
    type: SET_PROGRESS_STATE,
    progressState
  }
}

export const setTimerInterval = (seconds) => {
  return {
    type: SET_TIMER_INTERVAL,
    seconds
  }
}

export const setElementsCount = (count) => {
  return {
    type: SET_ELEMENTS_COUNT,
    count
  }
}
