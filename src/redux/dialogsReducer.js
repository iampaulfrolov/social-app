const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Pasha'}
  ],
  messages: [
    {id: 1, message: 'Hello guys'},
    {id: 2, message: 'What are you doing'},
    {id: 3, message: 'Svefgbzcfbncxbxzta'},
    {id: 4, message: 'Sashbsfdmkf.fzvmkvz.mlm/.vzcxvc m,/vz.a'},
    {id: 5, message: 'Vib bzxcvxcz tor'},
    {id: 6, message: 'Pasbdgvdsha'}
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {...state, newMessageBody: action.body };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {...state,
        messages: [...state.messages, {id: 6, message: body} ],
        newMessageBody: ''
      };
    default: return state;
  }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;
