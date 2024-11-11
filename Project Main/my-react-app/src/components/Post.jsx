import "./Post.css"
function Post({ imageSrc }) {
    return (
        <div className="post">
            <img src={imageSrc} alt="Image" />
        </div>
    );
}
export default Post;