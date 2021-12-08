import React from "react";
import { useSelector } from "react-redux";
import NewTweet from "./NewTweet";
import Tweet from "./Tweet";
import { useParams } from "react-router";

const TweetPage = (props) => {
  const { id } = useParams();
  const { tweets } = useSelector((state) => state);
  const replies = !tweets[id]
    ? []
    : tweets[id].replies.sort(
        (a, b) => tweets[b].timestamp - tweets[a].timestamp
      );
  return (
    <div>
      <Tweet id={id} />
      <NewTweet id={id} />
      {replies.length !== 0 && <h3 className="center">Replies</h3>}
      <ul>
        {replies.map((replyId) => (
          <li key={replyId}>
            <Tweet id={replyId} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TweetPage;
