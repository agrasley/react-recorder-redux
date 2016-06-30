'use strict'

import { RECORDER_START, RECORDER_STOP, RECORDER_PAUSE, RECORDER_RESUME,
         RECORDER_ON_STOP, RECORDER_GOT_STREAM, RECORDER_UNMOUNT } from './TYPES'

export const recorderStart = () => {
  return { type: RECORDER_START }
}

export const recorderStop = () => {
  return { type: RECORDER_STOP }
}

export const recorderPause = () => {
  return { type: RECORDER_PAUSE }
}

export const recorderResume = () => {
  return { type: RECORDER_RESUME }
}

export const recorderOnStop = (blob) => {
  return {
    type: RECORDER_ON_STOP,
    blob: blob
  }
}

export const recorderGotStream = (stream) => {
  return {
    type: RECORDER_GOT_STREAM,
    stream: stream
  }
}

export const recorderUnmount = (stream) => {
  return {
    type: RECORDER_UNMOUNT,
    stream: stream
  }
}
