'use strict'

require('babel-core/register')
require('babel-polyfill')
const describe = require('mocha-sugar-free').describe
const it = require('mocha-sugar-free').it
const expect = require('chai').expect
const { recorderStart, recorderStop, recorderPause, recorderResume,
        recorderOnStop, recorderGotStream, recorderUnmount } = require('../src/actions')

describe('recorder actions', () => {
  describe('recorderStart', () => {
    it('returns an action of type "@@react-recorder/START"', () => {
      expect(recorderStart()).to.eql({type: '@@react-recorder/START'})
    })
  })

  describe('recorderStop', () => {
    it('returns an action of type "@@react-recorder/STOP"', () => {
      expect(recorderStop()).to.eql({type: '@@react-recorder/STOP'})
    })
  })

  describe('recorderPause', () => {
    it('returns an action of type "@@react-recorder/PAUSE"', () => {
      expect(recorderPause()).to.eql({type: '@@react-recorder/PAUSE'})
    })
  })

  describe('recorderResume', () => {
    it('returns an action of type "@@react-recorder/RESUME"', () => {
      expect(recorderResume()).to.eql({type: '@@react-recorder/RESUME'})
    })
  })

  describe('recorderOnStop', () => {
    it('returns an action with the resulting Blob object', () => {
      expect(recorderOnStop('abcd')).to.eql({type: '@@react-recorder/ON_STOP', blob: 'abcd'})
    })
  })

  describe('recorderGotStream', () => {
    it('returns an action with the resulting stream object', () => {
      expect(recorderGotStream('abcd')).to.eql({type: '@@react-recorder/GOT_STREAM', stream: 'abcd'})
    })
  })

  describe('recorderUnmount', () => {
    it('returns and action that clears the state', () => {
      expect(recorderUnmount()).to.eql({type: '@@react-recorder/UNMOUNT'})
    })
  })
})
