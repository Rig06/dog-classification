// import { applyMiddleware } from 'redux'
// import { configureStore } from '@reduxjs/toolkit';
// import {thunk} from 'redux-thunk'

// import { composeWithDevTools } from '@redux-devtools/extension'

// import monitorReducersEnhancer from './enhancers/monitorReducer'
// import loggerMiddleware from './middleware/loggers'
// import rootReducer from './reducers'

// export default function ConfigureStore(preloadedState) {
//   const middlewares = [loggerMiddleware, thunk]
//   const middlewareEnhancer = applyMiddleware(...middlewares)

//   const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//   const composedEnhancers = composeWithDevTools(...enhancers)

//   const store = configureStore(rootReducer, preloadedState, composedEnhancers)

//   return store
// }

// import { applyMiddleware } from 'redux'
// import { composeWithDevTools } from '@redux-devtools/extension'
// import {thunk} from 'redux-thunk'
// const middleware = [thunk];

// const devTools = composeWithDevTools(applyMiddleware(...middleware))


// New way (recommended)
import { configureStore } from '@reduxjs/toolkit';



import rootReducer from './reducers';



const store = configureStore({
    reducer: rootReducer,

  });

  export default store;
