import React, { useEffect, useState} from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import axios from 'axios';


const Feed = () => {

  
  const [posts, setPosts] = useState([]);

  const getPostsData = () => {
    axios
      .get("http://localhost:3002/posts")
      .then( res => {
        setPosts(res.data);
      })
      .catch((error) => console.log(error)); //ERROR CATCHING IN CASE WE RECEIVE AN ERROR
  };

  useEffect(() => {
    getPostsData();
  });


  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        posts.map(d => 
          
          <Post title={d.title} body={d.body} postId={d.id} comments={d.comments} />)
  

      }

      <NewPost/>
    </div>
  )

}


export default Feed;
