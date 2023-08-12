// -------------------------- React ---------------------------- //
import React , { useEffect} from 'react'

// ----------- Use Navigate --------------- //
import { useNavigate } from 'react-router-dom'

// ----------- Comman Section --------------- //
import CommonSection from "../components/ui/Common-section/CommonSection";

import SinglePost from "../pages/SinglePost.jsx";

// ----------- CSS --------------- //
import '../styles/Explore.css'

const baseUrl = "https://backend-nft-vibe-plaza.onrender.com";

const Explore = () => {
    // Fetching post
    
    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/api/posts/fetchPost`)
        .then(res => res.json())
        .then(data => {
            setPosts(data.data.posts)
        }
        )
    }, [])
    // ----------- Use Navigate --------------- //
    const navigate = useNavigate();
  return (
    <>
        <CommonSection title="Explore" />
    <div className="explore">
        <button className='create_post_button' onClick={()=>{navigate('/post')}} > Create Post </button>
        <div className="explore__posts">
            {posts.map((post) => (
                <SinglePost key={post._id} post={post} />
            ))}
        </div>
    </div>
    </>
  )
}

export default Explore