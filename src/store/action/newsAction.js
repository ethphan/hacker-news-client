import axios from "axios";
import * as actionType from "./actionType";

const getNewsSuccess = (data) => {
  return {
    type: actionType.GET_NEWS_SUCCESS,
    data,
  };
};

const getNewsStart = () => {
  return {
    type: actionType.GET_NEWS_START,
  };
};

const getNewsFail = (error) => {
  return {
    type: actionType.GET_NEWS_FAIL,
    error,
  };
};

export const getNews = (page) => {
  return (dispatch) => {
    dispatch(getNewsStart());
    axios
      .get(`http://localhost:1337/news?page=${page}`)
      .then((res) => {
        dispatch(
          getNewsSuccess(
            res.data.sort((a, b) => {
              if (a.time > b.time) return -1;
              if (a.time < b.time) return 1;
              if (a.comments_count > b.comments_count) return -1;
              return 1;
            })
          )
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(getNewsFail(err));
      });
  };
};
