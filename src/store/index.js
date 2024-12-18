import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from '../reducer';

// Combine middleware and Redux DevTools extension
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(promiseMiddleware))
);

export default store;
