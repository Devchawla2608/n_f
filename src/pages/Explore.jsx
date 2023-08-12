// -------------------------- React ---------------------------- //
import React , { useEffect} from 'react'

// ----------- Use Navigate --------------- //
import { useNavigate } from 'react-router-dom'

// ----------- Comman Section --------------- //
import CommonSection from "../components/ui/Common-section/CommonSection";

// ----------- CSS --------------- //
import '../styles/Explore.css'




const Explore = () => {
    // Fetching post
    
    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/posts/fetchPost')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        }
        )
    }, [])

    // ----------- Use Navigate --------------- //
    const navigate = useNavigate();
  return (
    <>
        {/* Comman Section */}
        <CommonSection title="Explore" />

        {/* Explore Page */}
        
    <div className="explore">
        

            {/* Create Post */}
            <button className='create_post_button' onClick={()=>{navigate('/post')}} > Create Post </button>

            {/* Explore Posts */}
            <div className="explore__posts">
            {/* Map over post */}
            
        </div>
    </div>
    </>
  )
}

export default Explore