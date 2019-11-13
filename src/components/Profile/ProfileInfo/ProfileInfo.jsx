import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://www.visittci.com/core/cover-governors-beach-grand-turk-on-a-calm-day_1024x341.jpg' alt="logo"/>
            </div>
            <div className={classes.descrBlock}>Avatar + description</div>
        </div>
    )
};
export default ProfileInfo;
