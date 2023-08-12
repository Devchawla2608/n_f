
// -------------------------- React ---------------------------- //
import React , { useState , useEffect }  from 'react'

// ----------- Comman Section --------------- //
import CommonSection from "../components/ui/Common-section/CommonSection";

// --------------------------- LogedIn User --------------------------- //
import SignedInUser from '../Authenticate.js'

// -------------------------- CSS ---------------------------- //
import '../styles/Post.css'

const baseUrl = "https://backend-nft-vibe-plaza.onrender.com";

const Post = () => { 

    // -------------------------- State ( image , caption ) ---------------------------- //
    const [image, setImage] = useState('')
    const [caption, setCaption] = useState('')
    const [url, setUrl] = useState('')
    useEffect(()=>{
        if(url){
        fetch(`${baseUrl}/api/posts/create` , {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token':localStorage.getItem('token')
            },
            body: JSON.stringify({
                caption,
                pic: url,
                user:SignedInUser()
            })
        }).then(res => res.json())
        .then(data => {
            alert("Post Created Successfully")
            console.log(data)
        }
        ).catch(err => {
            alert("Error in post creation")
            console.log(err)
        }
        )
    }
    },[url])
    // -------------------------- Handle Change ---------------------------- //

    const postDetails = async (e) => {

        try{
    

            e.preventDefault()
            const data = new FormData()
            data.append('file', image)
            data.append('upload_preset', 'nft-marketplace')
            data.append('cloud_name', 'nftcloud')
             fetch("https://api.cloudinary.com/v1_1/nftcloud/image/upload" , {
                method: 'post',
                body: data
            })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url);
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
        }
        catch(err){
            console.log("This is error " , err)
        }

    }
  return (
    <>
            <CommonSection title="Post" />
            <div className="post_area">
                <section id="feed_posts">
                    <h4>Create Post</h4>
                    <img className="upload_image" src="/images/upload.jpeg" alt="" width="auto" height="auto"/> 
                    <form action="/posts/create"
                    id='post_form' 
                    encType="multipart/form-data" method="post" onSubmit={postDetails}>
                        <input type="file" name="image" placeholder="Post"
                        id='post_image_selector'
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                        <textarea
                        className='posst_caption_textarea'
                        name="caption"
                        id=""
                        cols="30"
                        rows="3"
                        placeholder="Type Here..."
                        onChange={(e) => setCaption(e.target.value)}
                        ></textarea>
                        <input id='post_submit_button' type="submit" values="Post" />
                    </form>
                </section>
            </div>
    </>
  )
}

export default Post