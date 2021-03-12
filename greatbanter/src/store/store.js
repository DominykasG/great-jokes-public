import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/reducer';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

export function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
};