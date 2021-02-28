const APP_SET_INIT_APP = 'APP/SET-INIT-APP'

const initialState: appStateInitType = {
    isInit: false
}

export const appReducer = (state: appStateInitType = initialState, action: ActionType): appStateInitType => {
    switch (action.type) {
        case "APP/SET-INIT-APP": {
            return {...state, isInit: true}
        }
        default:
            return state
    }
}

export const setInitApp = () => {
    return {type: APP_SET_INIT_APP} as const
}

type ActionType =
    | ReturnType<typeof setInitApp>

export type appStateInitType = {
    isInit: boolean
}

