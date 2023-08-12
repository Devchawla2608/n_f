
// -------------------------- React ---------------------------- //
import React , { useState }  from 'react'

// ----------- Comman Section --------------- //
import CommonSection from "../components/ui/Common-section/CommonSection";

// -------------------------- Axios ---------------------------- //
import axios from 'axios'

// -------------------------- CSS ---------------------------- //
import '../styles/Post.css'

const baseUrl = "https://backend-nft-vibe-plaza.onrender.com";

const Post = () => {

    // -------------------------- State ( image , caption ) ---------------------------- //
    const [image, setImage] = useState('')
    const [caption, setCaption] = useState('')

    // -------------------------- Handle Change ---------------------------- //
    const handleChange = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', image)
        formData.append('caption', caption)
        const response = await axios.post(`${baseUrl}/api/posts/create`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(response)
    }

  return (
    <>
            <CommonSection title="Post" />
            <div className="post_area">
                <section id="feed_posts">
                    <h4>Create Post</h4>
                    <img className="upload_image" src="/images/upload.jpeg" alt="" width="auto" height="auto"/> 
                    <form action="/posts/create" enctype="multipart/form-data" method="post" onSubmit={handleChange}>
                        <input type="file" name="image" placeholder="Post"
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                        <textarea
                        name="caption"
                        id=""
                        cols="30"
                        rows="3"
                        placeholder="Type Here..."
                        onChange={(e) => setCaption(e.target.value)}
                        ></textarea>
                        <input type="submit" values="Post" />
                    </form>
                </section>
            </div>
    </>
  )
}

export default Post