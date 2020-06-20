import { MessageActions } from '../actions/message'
import { Reducer } from 'redux'

export interface MessageState {
    messages: any[]
}

const initialState: MessageState = {
    messages: [],
}

export const messageReducer: Reducer<MessageState> = (
    state = initialState,
    action: any
) => {
    switch (action.type) {
        case MessageActions.SET_MESSAGES:
            return {
                ...state,
                messages: action.payload.messages,
            }
        default:
            return state
    }
}
