import axios from "axios";
import React from 'react';
import {useState, useEffect} from 'react';


const NewComment = (postId) => {
    const [comment, setComment] = useState("");

    const onSubmit = () => {

      axios.post(`http://localhost:3002/post/${postId['postId']}/comment`, {
        "newComment": comment
      })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    }

    return <div>
      <div>
        <input type="text" placeholder="Comment" value={comment} onChange={e => setComment(e.target.value)} />
      </div>
      <button style={{ marginTop: '4px'}} onClick={onSubmit}>
        Submit
      </button>
    </div>
  }

export default NewComment;