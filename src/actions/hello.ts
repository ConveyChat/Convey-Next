export enum HelloActions {
    SET_TEXT = 'SET_TEXT',
    CLEAR_TEXT = 'CLEAR_TEXT',
}

export function setText(text: string = '', time = new Date()) {
    return {
        type: HelloActions.SET_TEXT,
        payload: {
            text: text,
            time: time,
        },
    }
}

export function clearText(time = new Date()) {
    return {
        type: HelloActions.CLEAR_TEXT,
        payload: {
            text: '',
            time: time,
        },
    }
}
