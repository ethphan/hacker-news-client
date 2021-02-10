import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "sticky",
    top: "0",
    height: "40px",
    backgroundColor: "black",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 20px",
    fontWeight: "bold",
    boxSizing: "border-box",
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.header}>
      <div onClick={() => history.push("/")}>News</div>
      <div onClick={() => history.push("/about")}>About</div>
    </div>
  );
};

export default Header;
