import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import reducer from './reducers'

const sagaMiddleware = createSagaMiddleware()
const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware))
const store = createStore(reducer, enhancers)

sagaMiddleware.run(rootSaga)

export default store
