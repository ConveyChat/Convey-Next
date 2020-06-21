import { MessageActions } from '../actions/message'
import { Reducer } from 'redux'

export interface MessageState {
    messages: any[]
    searchValue: string
}

const initialState: MessageState = {
    messages: [],
    searchValue: '',
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
        case MessageActions.SET_SEARCHVALUE:
            return {
                ...state,
                searchValue: action.payload.searchValue,
            }
        default:
            return state
    }
}
