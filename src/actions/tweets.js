import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

const RECEIVE_TWEETS = "RECEIVE_TWEETS";
const TOGGLE_TWEET = "TOGGLE_TWEET";
const ADD_TWEET = "ADD_TWEET";

const receiveTweets = (tweets) => ({
  type: RECEIVE_TWEETS,
  tweets,
});

const toggleTweet = ({ id, authedUser, hasLiked }) => ({
  type: TOGGLE_TWEET,
  id,
  authedUser,
  hasLiked,
});

const addTweet = (tweet) => ({
  type: ADD_TWEET,
  tweet,
});

const handleToggleTweet = (info) => (dispatch) => {
  dispatch(toggleTweet(info));
  return saveLikeToggle(info).catch((e) => {
    console.warn("Error in handleToggleTweet: ", e);
    dispatch(toggleTweet(info));
    alert("There was an error liking the tweet, Try again.");
  });
};

const handleAddTweet = (text, replyingTo) => (dispatch, getState) => {
  const { authedUser } = getState();
  dispatch(showLoading());
  return saveTweet({ text, author: authedUser, replyingTo })
    .then((tweet) => dispatch(addTweet(tweet)))
    .then(() => dispatch(hideLoading()));
};

export {
  RECEIVE_TWEETS,
  TOGGLE_TWEET,
  ADD_TWEET,
  receiveTweets,
  handleToggleTweet,
  handleAddTweet,
};
