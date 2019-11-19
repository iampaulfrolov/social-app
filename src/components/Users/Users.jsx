import React from "react";
import Button from "@material-ui/core/Button";
import userPhoto from "../../assets/img/user.png";
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";

let Users = props => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i=1; i <= pagesCount; i++) {
    pages.push(i);
  }

    return <div>
      <div>
        {pages.map(p => {
          return <span className={props.currentPage === p && classes.selectedPage}
                       onClick={() => {props.onPageChanged(p)}}>{p}</span>
        })}
      </div>
      {
        props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={`/profile/${u.id}`}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={classes.userPhoto}/>
            </NavLink>
          </div>
          <div>
            { u.followed
              ? <Button variant="contained" color="secondary" onClick={() => { props.unfollow(u.id)}}>Un Follow</Button>
              : <Button variant="contained" color="secondary" onClick={() => { props.follow(u.id)}}>Follow</Button>}
          </div>
        </span>
          <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
          </span>
        </span>
        </div>)
      }
    </div>
}


export default Users;
