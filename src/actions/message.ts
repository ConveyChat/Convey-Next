export enum MessageActions {
    SET_MESSAGES = 'SET_MESSAGES',
    SET_SEARCHVALUE = 'SET_SEARCHVALUE',
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
