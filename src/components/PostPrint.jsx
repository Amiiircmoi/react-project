// TODO: EDIT WITH API FORMAT

const PostPrint = ({ posts }) => {
    console.log(posts);
    return (
        <div className="row">
            {posts.map((post, index) => {
                console.log(post);
                return (
                    <div className="card" key={index}>
                        <h2 className="card-title">{post.user}</h2>
                        <div className="card-body">
                            <p>{post.content}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PostPrint;