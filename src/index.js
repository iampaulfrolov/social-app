import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./storeContext";


let rerenderEntireThree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
        <StoreContext.Provider >
          <App state={ store.getState() } dispatch={ store.dispatch.bind(store) } store={store}/>,
        </StoreContext.Provider>
      </BrowserRouter>, document.getElementById('root')
    );
};


rerenderEntireThree(store.getState());

/*store.subscribe(rerenderEntireThree);*/
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireThree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
