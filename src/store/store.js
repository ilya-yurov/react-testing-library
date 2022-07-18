import CounterReducer from "./reducers/CounterReducer"
import {combineReducers} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
	counter: CounterReducer
})

export const createReduxStore = () => {
	return configureStore ({
		reducer: rootReducer
	})
}