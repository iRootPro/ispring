import {combineReducers, createStore} from "redux";
import {drawReducer} from "../reducers/draw-reducer";
import {saveState} from './../helpers/localStorage'
import {appReducer} from "../reducers/app-reducer";

const rootReducer = combineReducers({
    draw: drawReducer,
    app: appReducer
})
export const store = createStore(rootReducer)

store.subscribe(() => {
    if (!store.getState().app.isInit) return
    saveState(store.getState().draw.shapes)
})

export type RootStateType = ReturnType<typeof rootReducer>
