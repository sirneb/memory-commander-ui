import React, { Component } from 'react'
import { connect } from 'react-redux'
import App from '../components/App.js'

const mapStateToProps = (state) => {
  return {
    progressState: state.main.progressState
  }
}

export default connect(mapStateToProps)(App)
