'use strict'

import { RECORDER_START, RECORDER_STOP, RECORDER_PAUSE, RECORDER_RESUME,
         RECORDER_ON_STOP, RECORDER_GOT_STREAM, RECORDER_UNMOUNT } from './actions/TYPES'

const reducer = (state = {active: false, command: 'none', stream: null, blobs: []}, action) => {
  switch (action.type) {
    case RECORDER_START:
      return Object.assign({}, state, {active: true, command: 'start'})
    case RECORDER_STOP:
      return Object.assign({}, state, {active: false, command: 'stop'})
    case RECORDER_PAUSE:
      return Object.assign({}, state, {active: false, command: 'pause'})
    case RECORDER_RESUME:
      return Object.assign({}, state, {active: true, command: 'resume'})
    case RECORDER_ON_STOP:
      return Object.assign({}, state, {blobs: state.blobs.concat(action.blob)})
    case RECORDER_GOT_STREAM:
      return Object.assign({}, state, {stream: action.stream})
    case RECORDER_UNMOUNT:
      return {active: false, command: 'none', stream: null, blobs: []}
    default:
      return state
  }
}

export default reducer
