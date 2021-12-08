import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Nav from "./Nav";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const loading = useSelector(({ authedUser }) => authedUser === null);

  return (
    <Router>
      <div className="container">
        <LoadingBar />
        <Nav />
        {loading === true ? null : (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tweet/:id" element={<TweetPage />} />
            <Route path="/new" element={<NewTweet />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
