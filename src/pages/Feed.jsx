import { useEffect, useState } from 'react';
import PostPrint from '../components/PostPrint'
import { getPosts, newPost } from '../services/instacrameApi';

const Feed = () => {
    const [postsArray, setPostsArray] = useState([]);
    const [postContent, setPostContent] = useState('');
    const [postAuthor, setPostAuthor] = useState('');

    useEffect(() => {
        // TODO: DECOMMENTER UNE FOIS API OPERATIONNELLE
        // getPosts().then((data) => {
        //     setPostsArray(data);
        // }
        // );
    }, []);

    const sendPost = () => {
        newPost(postContent, postAuthor).then(() => {
            console.log('envoyé');
            setPostContent("");
            setPostAuthor("");
        }).catch((e) => {
            console.log(e);
        })
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="my-2">
                        <label className="form-label" htmlFor="author">Auteur</label>
                        <input
                            value={postAuthor}
                            onChange={(e) => setPostAuthor(e.target.value)}
                            type="text" id="identite" className="form-control"
                        />
                        <hr />
                        <label className="form-label" htmlFor="content">Contenu</label>
                        <textarea
                            value={postContent}
                            onChange={(e) => setPostContent(e.target.value)}
                            type="text" id="content" className="form-control"
                        />
                    </div>
                    <button className='btn btn-primary' onClick={sendPost}>Envoyer</button>
                </div>
            </div>
            <PostPrint posts={postsArray} />
        </>
    );
}

export default Feed;