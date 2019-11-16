import React from "react";
import classes from "./Users.module.css";
import Button from "@material-ui/core/Button";

const Users = props => {
  if (props.users.length === 0) {
    props.setUsers(
      [
        {
          id: 1,
          photoUrl: 'https://souzmult.ru/api/images/character-5d75ef933d60c.svg',
          followed: false,
          fullName: 'Paul',
          status: 'I am a boss',
          location: {country: 'Ukraine', city: 'Kharkov'}
        },
        {
          id: 2,
          photoUrl: 'https://souzmult.ru/api/images/character-5d75ef933d60c.svg',
          followed: true,
          fullName: 'Nick',
          status: 'students',
          location: {country: 'USA', city: 'Boston'}
        },
        {
          id: 3,
          photoUrl: 'https://souzmult.ru/api/images/character-5d75ef933d60c.svg',
          followed: false,
          fullName: 'Tom',
          status: 'worker',
          location: {country: 'England', city: 'London'}
        },
      ]
    );
  }



  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoUrl} alt="" className={classes.userPhoto}/>
          </div>
          <div>
            { u.followed
              ? <Button variant="contained" color="secondary" onClick={() => { props.unfollow(u.id)}}>Unfollow</Button>
              : <Button variant="contained" color="secondary" onClick={() => { props.follow(u.id)}}>Follow</Button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)
    }
  </div>
};
export default Users;
