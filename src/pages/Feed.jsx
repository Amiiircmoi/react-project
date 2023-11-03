import { useEffect, useState } from 'react';
import PostPrint from '../components/MoviesList'
import { getPosts, newPost } from '../services/instacrameApi';

const Feed = () => {
    const [postsArray, setPostsArray] = useState([]);

    useEffect(() => {
        getPosts().then((data) => {
            setPostsArray(data);
        }
        );
    }, []);

    return <PostPrint posts={postsArray} />;
}

export default Feed;