import { MessageActions } from '../actions/message'
import { Reducer } from 'redux'

export interface MessageState {
    messages: any[]
    searchValue: string
    activeMessage: any
}

const initialState: MessageState = {
    messages: [],
    searchValue: '',
    activeMessage: null,
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
        case MessageActions.SET_ACTIVEMESSAGE:
            return {
                ...state,
                activeMessage: action.payload.message,
            }
        default:
            return state
    }
}
