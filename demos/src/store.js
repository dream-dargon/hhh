import { createStore, compose, combineReducers } from 'redux'
import Hook from '@/reducers/hook'
import Tabtag from '@/reducers/tabtag'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose//时时观察redux
 
// 创建 store createStore(reduce)
const store = createStore(
  combineReducers({
    Hook,
    Tabtag,
  }),
   composeEnhancers()
);

export { store }
 