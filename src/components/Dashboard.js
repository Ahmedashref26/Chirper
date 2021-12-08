import React from "react";
import { useSelector } from "react-redux";
import Tweet from "./Tweet";

const Dashboard = (props) => {
  const tweetIds = useSelector(({ tweets }) =>
    Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    )
  );

  return (
    <div>
      <h3 className="center">Your Timeline</h3>
      <ul className="dashboard-list">
        {tweetIds.map((id) => (
          <li key={id}>
            {/* <div>TWEET ID: {id}</div> */}
            <Tweet id={id}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
