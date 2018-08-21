import {getChatLog, getMembersList} from '../service'

export function loadMessages() {
    return { 
        type: 'LOAD_MESSAGES',
        payload: getChatLog()
    }
}

export function getMembers() {
    return { 
        type: 'GET_MEMBERS',
        payload: getMembersList()
    }
}