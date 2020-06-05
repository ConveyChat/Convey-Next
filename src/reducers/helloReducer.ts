import { HelloActions } from '../actions/hello'
import { Reducer } from 'redux'

export interface HelloState {
    readonly text: string
    readonly lastUpdated: Date
}

const initialState: HelloState = {
    text: 'Default Text',
    lastUpdated: new Date(),
}

export const helloReducer: Reducer<HelloState> = (
    state = initialState,
    action: any
) => {
    switch (action.type) {
        case HelloActions.SET_TEXT:
            return {
                ...state,
                text: action.payload.text,
                lastUpdated: action.payload.time,
            }
        case HelloActions.CLEAR_TEXT:
            return {
                ...state,
                text: '',
                lastUpdated: action.payload.time,
            }
        default:
            return state
    }
}
