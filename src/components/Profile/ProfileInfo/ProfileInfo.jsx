import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
    return (
        <div>
            <div>
                <img src='https://www.visittci.com/core/cover-governors-beach-grand-turk-on-a-calm-day_1024x341.jpg' alt="logo"/>
            </div>
            <div className={classes.descrBlock}>
              <img src={props.profile.photos.large} alt="photo" className={classes.userPhoto}/>
              <div>
                <div>Имя: {props.profile.fullName}</div>
                <div>О себе: {props.profile.aboutMe}</div>
              </div>
            </div>
        </div>
    )
};
export default ProfileInfo;
