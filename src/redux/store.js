import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state : {
    profilePage: {
      posts: [
        {id: 1, message: "hi, how are you?", likesCount: 12},
        {id: 1, message: "hi, how are you?", likesCount: 35},
      ],
      newPostText: "new text"
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Pasha'}
      ],
      messages: [
        {id: 1, message: 'Dimy vxgcbbcbccb ch'},
        {id: 2, message: 'xvcxb'},
        {id: 3, message: 'Svefgbzcfbncxbxzta'},
        {id: 4, message: 'Sashbsfdmkf.fzvmkvz.mlm/.vzcxvc m,/vz.a'},
        {id: 5, message: 'Vib bzxcvxcz tor'},
        {id: 6, message: 'Pasbdgvdsha'}
      ],
      newMessageBody: ""
    },
    sidebarPage: {
      friends: [
        {name:"Paul", avatar:"https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg"},
        {name:"Ivan", avatar:"https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg"},
        {name:"Dima", avatar:"https://themify.me/demo/themes/pinshop/files/2012/12/man-in-suit2.jpg"},
      ]
    }
  },
  _callSubscriber () {

  },
  getState () {
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

    this._callSubscriber(this._state);
  }

};

export default store;
