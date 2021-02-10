import * as actionType from "../action/actionType";

const initialState = {
  newsData: null,
  error: null,
  loading: false,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_NEWS_START:
      return { ...state, loading: true };
    case actionType.GET_NEWS_SUCCESS:
      return { ...state, newsData: action.data, loading: false };
    case actionType.GET_NEWS_FAIL:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};
