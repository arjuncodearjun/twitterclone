import React from "react";
import "./Widgets.css";
// In the widgets section we will use react-twitter-embed :: npm i react-twitter-embed
import { TwitterTimelineEmbed,  TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
      <SearchIcon className="widgets__searchIcon"/>
      <input placeholder="Search Twitter" type="text"/>

      </div>
      <div className="widgets__widgetContainer">
      <h2>What's happening</h2>
      {/* Embeds a previous tweet thread */}
      <TwitterTweetEmbed tweetId={"1381933162817671168"}/>

      {/* Embed things from timeline */}
      <TwitterTimelineEmbed className="twitter__timeline"
    sourceType="profile"
    screenName="imVkohli"
    options={{height: 400}}/>
      </div>

    </div>
  );
}

export default Widgets;
