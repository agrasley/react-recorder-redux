'use strict'

require('babel-core/register')
require('babel-polyfill')
const describe = require('mocha-sugar-free').describe
const it = require('mocha-sugar-free').it
const expect = require('chai').expect
const reducer = require('../src/reducers').default
const { recorderStart, recorderStop, recorderPause, recorderResume,
        recorderOnStop, recorderGotStream, recorderUnmount } = require('../src/actions')

describe('recorder reducer', () => {
  describe('recorderStart actions', () => {
    it('changes "active" to true and "command" to "start"', () => {
      const newState = {active: true, command: 'start', stream: null, blobs: []}
      expect(reducer(undefined, recorderStart())).to.eql(newState)
    })
  })

  describe('recorderStop actions', () => {
    it('changes "active" to false and "command" to "stop"', () => {
      const origState = {active: true, command: 'start', stream: null, blobs: []}
      const newState = {active: false, command: 'stop', stream: null, blobs: []}
      expect(reducer(origState, recorderStop())).to.eql(newState)
    })
  })

  describe('recorderPause actions', () => {
    it('changes "active" to false and "command" to "pause"', () => {
      const origState = {active: true, command: 'start', stream: null, blobs: []}
      const newState = {active: false, command: 'pause', stream: null, blobs: []}
      expect(reducer(origState, recorderPause())).to.eql(newState)
    })
  })

  describe('recorderResume actions', () => {
    it('changes "active" to true and "command" to "resume"', () => {
      const origState = {active: false, command: 'pause', stream: null, blobs: []}
      const newState = {active: true, command: 'resume', stream: null, blobs: []}
      expect(reducer(origState, recorderResume())).to.eql(newState)
    })
  })

  describe('recorderOnStop actions', () => {
    it('adds a new blob object to the "blobs" array', () => {
      expect(reducer(undefined, recorderOnStop('abcd')).blobs).to.eql(['abcd'])
    })
  })

  describe('recorderGotStream actions', () => {
    it('defines the "stream" object', () => {
      expect(reducer(undefined, recorderGotStream('abcd')).stream).to.equal('abcd')
    })
  })

  describe('recorderUnmount', () => {
    it('resets the state', () => {
      const origState = {active: true, command: 'resume', stream: 'stream', blobs: [1, 2, 3]}
      expect(reducer(origState, recorderUnmount())).to.eql({active: false, command: 'none', stream: null, blobs: []})
    })
  })
})
