
const Comments = ({comments}) => {
    console.log(comments)
    return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
      {
        comments?.map(res =>
          <p>{res}</p>
        )
      }
    </div>
  }
  
  export default Comments;