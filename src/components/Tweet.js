import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatDate, formatTweet } from "../utils/helpers";
import { handleToggleTweet } from "../actions/tweets";
import { Link, useNavigate } from "react-router-dom";
import {
  TiHeartFullOutline,
  TiHeartOutline,
  TiArrowBackOutline,
} from "react-icons/ti";

const Tweet = (props) => {
  // variables
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { users, tweets, authedUser } = useSelector((state) => state);
  const twt = tweets[props.id];
  const parentTweet = twt ? tweets[twt.replyingTo] : null;
  const tweet = twt
    ? formatTweet(twt, users[twt.author], authedUser, parentTweet)
    : null;
  const {
    name,
    avatar,
    timestamp,
    text,
    hasLiked,
    likes,
    replies,
    parent,
    id,
  } = tweet;

  // functions
  const handleLike = (e) => {
    e.preventDefault();

    dispatch(
      handleToggleTweet({
        id,
        hasLiked,
        authedUser,
      })
    );
  };

  const toParent = (e, id) => {
    e.preventDefault();
    navigator(`/tweet/${id}`)
    // Redirect to parent tweet.
  };

  if (!tweet) return <p>This tweet doesn't exist</p>;

  return (
    <Link to={`/tweet/${id}`} className="tweet">
      <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
      <div className="tweet-info">
        <div>
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          {parent && (
            <button
              className="replying-to"
              onClick={(e) => toParent(e, parent.id)}
            >
              Replying to @{parent.author}
            </button>
          )}
          <p>{text}</p>
        </div>

        <div className="tweet-icons">
          <TiArrowBackOutline className="tweet-icon" />
          <span>{replies !== 0 && replies}</span>
          <button className="heart-button" onClick={handleLike}>
            {hasLiked ? (
              <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
            ) : (
              <TiHeartOutline className="tweet-icon" />
            )}
          </button>
          <span>{likes !== 0 && likes}</span>
        </div>
      </div>
    </Link>
  );
};

export default Tweet;
