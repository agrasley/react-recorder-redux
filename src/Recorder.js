'use strict'

import { connect } from 'react-redux'
import RecorderComponent from 'react-recorder'
import { recorderOnStop, recorderGotStream, recorderUnmount } from './actions'

const mapStateToProps = (state, ownProps) => {
  return {
    command: state.recorder.command
  }
}

const mapDispatchToProps = {
  onStop: recorderOnStop,
  gotStream: recorderGotStream,
  onUnmount: recorderUnmount
}

const Recorder = connect(mapStateToProps, mapDispatchToProps)(RecorderComponent)
export default Recorder
