import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from './firebase';
import Flipmove from 'react-flip-move';

function Feed() {
  // Keep track of the posts
  const [posts, setPosts] = useState([]);

   useEffect(()=>{
    // code...
    db.collection('posts').onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => doc.data()))))},[]); 


  return (
    <div className="feed">
      {/*Header  */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/*TweetBox  */}
      <TweetBox />



      {/*Post  */}

      {/* Map Each data point in a single post */}
      <Flipmove>
      {posts.map(post=> (
      
      <Post 
        key={post.text}
        displayName={post.displayName}
        username={post.username}
        verified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
      />
      ))}
      </Flipmove>
    </div>
  );
}

export default Feed;
