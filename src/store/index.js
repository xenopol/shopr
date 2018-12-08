
import { createStore } from 'redux'
import reducer from './reducers'

const configureStore = () => createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
)

export default configureStore
