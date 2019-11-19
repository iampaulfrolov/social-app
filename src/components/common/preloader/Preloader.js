import React from "react";
import preloader from'../../../assets/img/Infinity.svg';
import classes from "../preloader/preloader.module.css";

let Preloader = props => {
  return <img className={classes.preloader} src={preloader} alt="preloader"/>
};

export default Preloader;
