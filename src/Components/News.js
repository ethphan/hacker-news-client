import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getNews } from "../store/action/newsAction";
import { Button, Paper, Switch, FormControlLabel, makeStyles, CircularProgress } from "@material-ui/core";
import { withTheme } from "./Theme";

const useStyles = makeStyles((theme) => ({
  pagination: {
    position: "sticky",
    top: "40px",
    padding: "5px 20px",
    borderBottom: "1px solid #ccc",
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    textAlign: "left",
    padding: "10px 60px 30px",
  },
  newsDetail: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "8px",
  },
}));

const News = (props) => {
  const [page, setPage] = useState(1);
  const { newsData, getNews, darkMode, setDarkMode, loading } = props;
  const classes = useStyles();

  useEffect(() => {
    getNews(page);
  }, [page]);

  return (
    <div>
      <div className={classes.pagination}>
        <div>
          <Button color="primary" disabled={page === 1} onClick={() => setPage(page - 1)}>
            &#60; pre{" "}
          </Button>
          <Button color="primary" onClick={() => setPage(page + 1)}>
            {" "}
            next &#62;
          </Button>
        </div>
      </div>
      <Paper className={classes.paper}>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} color="primary" />}
          label="DarkMode"
        />
        <h3>Page {page}</h3>
        {newsData
          ? newsData.map((el, index) => {
              const { id, title, time_ago, user, comments_count, points } = el;
              return (
                <div key={id} className={classes.newsDetail}>
                  <h3 style={{ marginRight: "15px" }}>{index + 1 + (page - 1) * 30} </h3>
                  <div>
                    <p style={{ marginBottom: "6px" }}>{title}</p>
                    <small style={{ color: "grey" }}>
                      {points} by {user} {time_ago} | {comments_count} comments
                    </small>
                  </div>
                </div>
              );
            })
          : null}
        {loading ? <CircularProgress /> : null}
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newsData: state.newsReducer.newsData,
    loading: state.newsReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: (page) => dispatch(getNews(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(News));
