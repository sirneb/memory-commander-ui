import { combineReducers } from 'redux'
import {
  ProgressStates,
  AsyncStates,
  SET_PROGRESS_STATE,
  SET_INITIAL_VALIDATE_LIST,
  SET_VALIDATE_LIST_ITEM,
  SET_ELEMENT_INDEX,
  SET_TIMER_INTERVAL,
  SET_ELEMENTS_COUNT,
  REQUEST_TRAINING_SESSION
} from '../actions/index'

const DEFAULT_TIMER_INTERVAL = 6
const DEFAULT_ELEMENTS_COUNT = 40

const mainInitial = {
  progressState: ProgressStates.NOT_STARTED,
  currentElementIndex: null,
  validateList: [],
  options: {
    timerInterval: DEFAULT_TIMER_INTERVAL,
    elementsCount: DEFAULT_ELEMENTS_COUNT
  }
}

const trainingSessionInitial = {
  isFetching: false,
  fetchSuccess: false,
  elements: [],
  lastUpdated: null
}


const main = function(state = mainInitial, action) {
  switch (action.type) {
    case SET_PROGRESS_STATE:
      return {
        ...state,
        progressState: action.progressState
      }
    case SET_INITIAL_VALIDATE_LIST:
      return {
        ...state,
        validateList: action.list
      }
    case SET_VALIDATE_LIST_ITEM:
      return {
        ...state,
        validateList: [
          ...state.validateList.slice(0, action.index),
          action.value,
          ...state.validateList.slice(action.index + 1)
        ]
      }
    case SET_ELEMENT_INDEX:
      return {
        ...state,
        currentElementIndex: action.index
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

const trainingSessionRequest = function(state = trainingSessionInitial, action) {
  switch (action.type) {
    case REQUEST_TRAINING_SESSION:
      switch (action.status) {
        case AsyncStates.REQUESTED:
        case AsyncStates.IN_PROGRESS:
          return {
            ...state,
            isFetching: true
          }
        case AsyncStates.SUCCESS:
          return {
            ...state,
            isFetching: false,
            fetchSuccess: true,
            elements: action.responseJson.elements,
            lastUpdated: action.responseJson.createdAt
          }
        case AsyncStates.FAILURE:
          return {
            ...state,
            isFetching: false,
            fetchSuccess: false
          }
        default:
          return state
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  main,
  trainingSessionRequest
})

export default rootReducer
