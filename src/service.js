import { getMessages,getMembers} from './data';
//holds all the actions
export function getChatLog() {
  return {
    type: 'MESSAGES_LOADING',
    payload: getMessages()
  };
}

export function getMembersList() {
  return {
    type: 'MEMBERS_LOADING',
    payload: getMembers()
  };
} 