import { ProgressStates, SET_PROGRESS_STATE, SET_TIMER_INTERVAL, SET_ELEMENTS_COUNT } from '../actions/index'

const initialState = {
  progressState: ProgressStates.NOT_STARTED,
  elements: [],
  currentElement: null,
  options: {
    timerInterval: 6,
    elementsCount: 40
  }
}


const memoryApp = function(state = initialState, action) {
  switch (action.type) {
    case SET_PROGRESS_STATE:
      return {
        ...state,
        progressState: action.progressState
      }
    case SET_TIMER_INTERVAL:
      return {
        ...state,
        options: {
          ...state.options,
          timerInterval: action.seconds
        }
      }
    case SET_ELEMENTS_COUNT:
      return {
        ...state,
        options: {
          ...state.options,
          elementsCount: action.count
        }
      }
    default:
      return state
  }
}

export default memoryApp
