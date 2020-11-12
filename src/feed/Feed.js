import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../backendConnet/firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          profilePic={post.data.profilePic}
          image={post.data.image}
          username={post.data.username}
          timestamp={post.data.timestamp}
          message={post.data.message}
        />
      ))}

      <Post
        profilePic="https://images.pexels.com/photos/2318969/pexels-photo-2318969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        image="https://images.pexels.com/photos/2318969/pexels-photo-2318969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        username="dhavalll"
        timestamp="timestamp"
        message="enjoy kite...."
      />
      <Post
        profilePic="https://images.pexels.com/photos/2318969/pexels-photo-2318969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        image="https://images.pexels.com/photos/2132012/pexels-photo-2132012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        username="dhavalll"
        timestamp="timestamp"
        message="enjoy kite...."
      />
    </div>
  );
}

export default Feed;
