import React from 'react'
// ----------- Images --------------- //
import Hero from '../assets/images/hero.jpg'
import profileImage from '../assets/images/img-07.jpg' 
import '../styles/SinglePost.css'

const SinglePost = () => {
  return (
            <div class="post">
            
            {/* Post Header */}
                <div id="post_header">
                    <div id="post_header_user">
                    <img id="post_user_img" src={Hero} alt=""/>
                    <h2 id="post_username">Deepanshu</h2>
                    </div>
                    <div id="post_header_operations">
                         <i class="fa-solid fa-ellipsis-v"></i>
                    </div>
                </div>
            
            {/* Post Content */}
            <div id="post_content">
                    <img src={profileImage} alt=""/>
            </div>

            {/* Post Footer */}
            <div id="post_footer">
                <div id="post_footer_icons">
                    {/* <!-- post comment button --> */}
                    <div class="post_l_c_s">
 
                            <i class="fa-solid fa-heart"></i>
 
                    </div>
                    {/* <!-- post comment button --> */}
                    <div class="post_l_c_s">
 
                            <i class="fa-solid fa-comment"></i>
 
                    </div>
                    {/* <!-- Post's Share Button --> */}
                    <div class="post_l_c_s">
 
                            <i class="fa-solid fa-share"></i>
 
                    </div>
                    </div>
                <div id="post_info">
            <h1>Add Comment</h1> 
                </div>
            </div>
            </div>
  )
}

export default SinglePost