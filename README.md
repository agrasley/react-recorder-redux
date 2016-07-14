# react-recorder-redux
Redux actions and bindings for react-recorder

## Installation

`npm install react-recorder-redux`

## Background

This library provides Redux actions and bindings for the [react-recorder](https://github.com/agrasley/react-recorder) library. The library provides a `Recorder` container component that can interact with the reducer provided.

## Example

You can see the Recorder in action [here](https://agrasley.github.io/react-audio-example/). Check out the source code [here](https://github.com/agrasley/react-audio-example).

## Usage

In your root reducer:

```js
import { combineReducers } from 'redux'
import { recorderReducer as recorder } from 'react-recorder-redux'

export default combineReducers({ recorder })
```

In your view components:

```js
import React from 'react'
import { Recorder } from 'react-recorder-redux'

export default () => (
  <div>
    <Recorder />
    <p>Hello world.</p>
  </div>
)
```

## Redux Store

The reducer provided attaches a single object to the main store object via the `recorder` property. This object is reset when the `Recorder` unmounts. This object has the following properties:

### active

Boolean. Whether the recorder is actively recording.

### command

String. Possible values are `['start', 'stop', 'pause', 'resume', 'none']` The most recent method called on the recorder. When the command updates, the corresponding method is called.

### stream

Object. The current stream object obtained by `getUserMedia`.

### blobs

Array. An array which contains `Blob` objects corresponding to all the recordings made. When a new recording is made, it is appended to the end of the array.

## Action Creators

All actions can be imported by `import { actionName } from 'react-recorder-redux/actions'`, where `actionName` is the action you wish to import.

### recorderStart

Starts the recording. Takes no arguments.

### recorderStop

Stops the recording. Takes no arguments.

### recorderPause

Pauses the recording. Takes no arguments.

### recorderResume

Resumes the recording. Takes no arguments.
