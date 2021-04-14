import ImageReducer from './reducers/ImageReducer'
import TextReducer from './reducers/TextReducer'
import MapReducer from './reducers/MapReducer'
import LineReducer from './reducers/LineReducer'
import TriangleReducer from './reducers/TriangleReducer'
import CircleReducer from './reducers/CircleReducer'
import RectangleReducer from './reducers/RectangleReducer'
import SearchReducer from './reducers/SearchReducer'
import HeaderReducer from './reducers/HeaderReducer'
import {combineReducers, createStore} from 'redux'

const rootReducer = combineReducers({
    ImageReducer,
    TextReducer,
    MapReducer,
    LineReducer,
    TriangleReducer,
    CircleReducer,
    RectangleReducer,
    SearchReducer,
    HeaderReducer
})

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;