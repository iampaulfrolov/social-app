import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return  (
        <div className={classes.item}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif" alt=""/>
            { props.message }
            <div>Like { props.likesCounts }</div>
        </div>
    )
};
export default Post;

