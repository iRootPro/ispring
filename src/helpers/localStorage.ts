import {shapesType} from "../reducers/draw-reducer";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('shapes')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (e) {
        return undefined
    }
}

export const saveState = (state: Array<shapesType>) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('shapes', serializedState)
    }
    catch (e) {

    }
}
