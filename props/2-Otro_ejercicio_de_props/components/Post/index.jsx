const Post = ({ postTitle, author, children }) => (
    <div>
        <h2>{postTitle}</h2>
        <p>{author}</p>
        <p>{children}</p>
    </div>
)

export default Post;