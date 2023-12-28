import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import initialState from './intialState';
import isloadingReducer from './isLoadingRedux';
import adsReducer from './adsRedux';
import usersReducer from './usersRedux';

const subreducers = {
  loading: isloadingReducer,
  ads: adsReducer,
  user: usersReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;