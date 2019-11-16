import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import Button from '@material-ui/core/Button';


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/> );
    let messagesElements = state.messages.map( m => <Message message={m.message} id={m.id} key={m.id}/> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
      props.sendMessage();
    };
    let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body);
    };
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>{ messagesElements }</div>
              <div>
                <div>
                  <textarea cols="20" onChange={onNewMessageChange} value={ newMessageBody } rows="5" placeholder='Enter your message:'/>
                </div>
                <div>
                  <Button variant="outlined" color="secondary" className={classes.button} onClick={ onSendMessageClick }>
                    Send message
                  </Button>
                </div>
              </div>
            </div>

        </div>
    )
};

export default Dialogs;
