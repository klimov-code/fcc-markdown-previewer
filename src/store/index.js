import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { INITIAL_STATE } from '../constants/initialState';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

export default function configureStore(initialState = INITIAL_STATE) {
  const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...middleware)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
