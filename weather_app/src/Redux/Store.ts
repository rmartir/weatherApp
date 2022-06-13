import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import rootSaga from './Saga/weatherSage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducer';
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
