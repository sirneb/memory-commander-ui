import fetch from 'isomorphic-fetch'
import _ from 'lodash'

import { BACKEND_DOMAIN } from '../initializers/environment'

export const SET_PROGRESS_STATE = 'SET_PROGRESS_STATE'
export const SET_INITIAL_VALIDATE_LIST = 'SET_INITIAL_VALIDATE_LIST'
export const SET_VALIDATE_LIST_ITEM = 'SET_VALIDATE_LIST_ITEM'
export const SET_ELEMENT_LIST = 'SET_ELEMENT_LIST'
export const SET_ELEMENT_INDEX = 'SET_ELEMENT_INDEX'
export const SET_TIMER_INTERVAL = 'SET_TIMER_INTERVAL'
export const SET_ELEMENTS_COUNT = 'SET_ELEMENTS_COUNT'
export const REQUEST_TRAINING_SESSION = 'REQUEST_TRAINING_SESSION'

export const ProgressStates = {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  IN_VALIDATION: 'IN_VALIDATION',
  RESULTS: 'RESULTS'
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

export const fetchTrainingSession = (count, timerInterval) => {
  return dispatch => {
    dispatch(requestTrainingSession())
    return fetch(`http://${BACKEND_DOMAIN}/training-sessions`,
                 {
                   headers: { 'Content-Type': 'application/json' },
                   method: 'post',
                   body: JSON.stringify({ count: count }),
                 })
                 .then(response => response.json())
                 .then(json => {
                   dispatch(receiveSession(json))
                   dispatch(setElementList(json.elements))
                   dispatch(startTrainingSession(json.elements.length, timerInterval))
                 })
  }
}

export const startTrainingSession = (count, timerInterval) => {
  return dispatch => {
    dispatch(setProgressState(ProgressStates.IN_PROGRESS))

    // start as soon as ready
    dispatch(setElementIndex(0));

    var index = 1;
    var intervalId = setInterval(() => {
      if (index < count) {
        dispatch(setElementIndex(index));
        index++;
      } else {
        clearInterval(intervalId);
        dispatch(setElementIndex(null));
        dispatch(setInitialValidateList());
        dispatch(setProgressState(ProgressStates.IN_VALIDATION));
      }
    }, timerInterval * 1000)
  }
}

export const receiveSession = (json) => {
  return {
    type: REQUEST_TRAINING_SESSION,
    status: AsyncStates.SUCCESS,
    responseJson: json
  }
}

export const setElementList = (list) => {
  return {
    type: SET_ELEMENT_LIST,
    list
  }
}

export const setElementIndex = (index) => {
  return {
    type: SET_ELEMENT_INDEX,
    index
  }
}

export const setInitialValidateList = () => {
  return {
    type: SET_INITIAL_VALIDATE_LIST
  }
}

export const setValidateListItem = (value, index) => {
  return {
    type: SET_VALIDATE_LIST_ITEM,
    value,
    index
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
