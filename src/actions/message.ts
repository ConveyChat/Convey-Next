export enum MessageActions {
    SET_MESSAGES = 'SET_MESSAGES',
}

export function setMessages(messages: any[] = []) {
    return {
        type: MessageActions.SET_MESSAGES,
        payload: {
            messages: messages,
        },
    }
}
