export enum MessageActions {
    SET_MESSAGES = 'SET_MESSAGES',
    SET_SEARCHVALUE = 'SET_SEARCHVALUE',
    SET_ACTIVEMESSAGE = 'SET_ACTIVEMESSAGE',
}

export function setMessages(messages: any[] = []) {
    return {
        type: MessageActions.SET_MESSAGES,
        payload: {
            messages: messages,
        },
    }
}

export function setSearchValue(searchValue: string) {
    return {
        type: MessageActions.SET_SEARCHVALUE,
        payload: {
            searchValue: searchValue,
        },
    }
}

export function setActiveMessage(message: string) {
    return {
        type: MessageActions.SET_ACTIVEMESSAGE,
        payload: {
            message: message,
        },
    }
}
