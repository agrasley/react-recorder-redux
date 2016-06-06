'use strict'

import { connect } from 'react-redux'
import RecorderComponent from 'react-recorder'
import { recorderOnStop, recorderGotStream } from './actions'

const mapStateToProps = (state, ownProps) => {
  return {
    command: state.recorder.command
  }
}

const mapDispatchToProps = {
  onStop: recorderOnStop,
  gotStream: recorderGotStream
}

const Recorder = connect(mapStateToProps, mapDispatchToProps)(RecorderComponent)
export default Recorder
