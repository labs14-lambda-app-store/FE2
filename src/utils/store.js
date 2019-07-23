import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import smurfsReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
  {}, composeWithDevTools(
    applyMiddleWare(thunk)
  )
)
