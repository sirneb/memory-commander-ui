import fetch from 'isomorphic-fetch'

import { BACKEND_DOMAIN } from '../initializers/environment'

export const SET_PROGRESS_STATE = 'SET_PROGRESS_STATE'
export const SET_TIMER_INTERVAL = 'SET_TIMER_INTERVAL'
export const SET_ELEMENTS_COUNT = 'SET_ELEMENTS_COUNT'
export const REQUEST_TRAINING_SESSION = 'REQUEST_TRAINING_SESSION'

export const ProgressStates = {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS'
}

export const AsyncStates = {
  NOT_STARTED: 'NOT_STARTED',
  REQUESTED: 'REQUESTED',
  IN_PROGRESS: 'IN_PROGRESS',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
}

export const setProgressState = (progressState) => {
  return {
    type: SET_PROGRESS_STATE,
    progressState
  }
}

export const requestTrainingSession = () => {
  return {
    type: REQUEST_TRAINING_SESSION,
    status: AsyncStates.REQUESTED
  }
}

export const fetchTrainingSession = (count) => {
  return dispatch => {
    dispatch(requestTrainingSession)
    return fetch(`http://${BACKEND_DOMAIN}/training-sessions`,
                 {
                   headers: { 'Content-Type': 'application/json' },
                   method: 'post',
                   body: JSON.stringify({ count: count }),
                 })
                 .then(response => response.json())
                 .then(json => dispatch(receiveSession(json)))
  }
}

export const receiveSession = (json) => {
  return {
    type: REQUEST_TRAINING_SESSION,
    status: AsyncStates.SUCCESS,
    responseJson: json
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
