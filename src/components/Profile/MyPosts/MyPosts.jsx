import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import Button from "@material-ui/core/Button";


const MyPosts = (props) => {

    let postElements =
        props.posts.map(p => <Post message={ p.message } likesCounts={ p.likesCount } />);
    let newPostElement = React.createRef();


    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };


    return (
        <div className={classes.postsBlock} >
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={ newPostElement } cols="30" rows="5" value={ props.newPostText } onChange={ onPostChange } />
                </div>
                <div>
                  <Button variant="outlined" color="secondary" className={classes.button} onClick={ onAddPost } >
                    Add posts
                  </Button>
                </div>
            </div>
            <div className={classes.posts}>
                { postElements }
            </div>
        </div>
    )
};
export default MyPosts;
