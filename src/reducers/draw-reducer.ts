const DRAW_SET_CONTEXT = 'DRAW/SET-CONTEXT'
const DRAW_SET_CURRENT_COLOR = 'DRAW/SET-CURRENT-COLOR'
const DRAW_ADD_SHAPE = 'DRAW/ADD-SHAPE'
const DRAW_REMOVE_SELECT_SHAPE = 'DRAW/REMOVE-SELECT-SHAPE'
const DRAW_SET_COLOR_SHAPE = 'DRAW/SET-COLOR-SHAPE'
const DRAW_SET_SELECT_SHAPE_ID = 'DRAW/SET-SELECT-SHAPE-ID'
const DRAW_RESTORE_SHAPE_LOCAL_STORAGE = 'DRAW/RESTORE_SHAPE_LOCAL_STORAGE'
const initialState: DrawStateType = {
    currentColor: '#000000',
    selectShapeID: null,
    ctx: null,
    shapes: [],
}


export const drawReducer = (state: DrawStateType = initialState, action: ActionType): DrawStateType => {
    switch (action.type) {
        case "DRAW/SET-CONTEXT": {
            return {...state, ctx: action.ctx}
        }
        case "DRAW/SET-CURRENT-COLOR": {
            return {...state, currentColor: action.color}
        }
        case "DRAW/ADD-SHAPE": {
            return {...state, shapes: [...state.shapes, action.shape]}
        }
        case "DRAW/REMOVE-SELECT-SHAPE": {
            return {...state, shapes: state.shapes.filter(shape => shape.id !== action.id)}
        }
        case "DRAW/SET-COLOR-SHAPE": {
            const newShapes = state.shapes.map(shape => {
                if (shape.id === action.payload.id) {
                    shape.color = action.payload.color
                    return shape
                }
                return shape
            })
            return {...state, shapes: newShapes}
        }
        case "DRAW/SET-SELECT-SHAPE-ID": {
            return {...state, selectShapeID: action.id}
        }
        case "DRAW/RESTORE_SHAPE_LOCAL_STORAGE": {
            if (!action.shapes) return state
            return {...state, shapes: action.shapes}
        }
        default:
            return state
    }
}

export const setContextCanvas = (ctx: CanvasRenderingContext2D) => {
    return {type: DRAW_SET_CONTEXT, ctx} as const
}

export const setCurrentColor = (color: string) => {
    return {type: DRAW_SET_CURRENT_COLOR, color} as const
}

export const addShape = (shape: shapesType) => {
    return {type: DRAW_ADD_SHAPE, shape} as const
}

export const removeSelectShape = (id: number) => {
    return {type: DRAW_REMOVE_SELECT_SHAPE, id} as const
}

export const setSelectShapeID = (id: null | number) => {
    return {type: DRAW_SET_SELECT_SHAPE_ID, id} as const
}

export const setColorShape = (payload: colorType) => {
    return {type: DRAW_SET_COLOR_SHAPE, payload} as const
}

export const restoreStateLocalStorage = (shapes: Array<shapesType>) => {
    return {type: DRAW_RESTORE_SHAPE_LOCAL_STORAGE, shapes} as const
}


type ActionType =
    | ReturnType<typeof setContextCanvas>
    | ReturnType<typeof setCurrentColor>
    | ReturnType<typeof addShape>
    | ReturnType<typeof removeSelectShape>
    | ReturnType<typeof setSelectShapeID>
    | ReturnType<typeof setColorShape>
    | ReturnType<typeof restoreStateLocalStorage>


export type DrawStateType = {
    currentColor: string
    ctx: CanvasRenderingContext2D | null
    selectShapeID: number | null
    shapes: Array<shapesType>
}

type triangleType = {
    id: number
    x: number
    y: number
    color: string
    type: 'triangle'
    select: boolean
}

type rectangleType = {
    id: number
    x: number
    y: number
    w: number
    h: number
    color: string
    select: boolean
    type: 'rectangle'
}

type colorType = {
    id: number | null
    color: string
}

export type shapesType = triangleType | rectangleType
