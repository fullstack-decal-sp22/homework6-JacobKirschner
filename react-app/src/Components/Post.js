import Comments from "./Comments";
import NewComment from "./NewComment";



const Post = ({ title, body, comments, postId }) => {
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>

    <NewComment postId = {postId} />
    <Comments comments={comments}/> 
    <br></br>
  </div>
}

export default Post;