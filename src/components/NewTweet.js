import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleAddTweet } from "../actions/tweets";
import { useNavigate } from "react-router-dom";

const NewTweet = (props) => {
  const [text, setText] = useState("");
  const [home, toHome] = useState(false);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { id } = props;

  const handleChange = (e) => {
    const text = e.target.value;

    setText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddTweet(text, id));

    setText("");
    toHome(id ? false : true);
  };

  if (home) navigator("/");

  const tweetLeft = 280 - text.length;

  return (
    <div>
      <h3 className="center">Compose New Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
          className="textarea"
          maxLength={280}
        ></textarea>
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="btn" type="submit" disabled={text === ""}>
          Chirp
        </button>
      </form>
    </div>
  );
};

export default NewTweet;
