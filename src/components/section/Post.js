import React, { useEffect, useState } from 'react';
import PostData from '../../AllData/PostData.json';
import Style from '../../style/Post.module.css';

const Post = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        setPost(PostData)
    }, [])
   
    // const [isTruncated, setIsTruncated] = useState(true);

    // function toggleIsTruncated(){
    //     setIsTruncated(!isTruncated);
    //     console.log("clicked")
    //    }
    return (
       
           <div className="row ">
           {
               post.map((post, index)=>{
                   return(
                       <div key={index} className={`${Style.postInfo} mt-3 p-4 `}>
                           <div>
                               <div className="d-flex mb-4">
                                   <img src={post.logo} alt="" className="img-fluid" />
                                   <h5 className="ms-2">{post.name}</h5>
                                   {/* <FontAwesomeIcon icon={faEllipsisH} className=" ms-auto  " /> */}
                                   <i class="fas fa-ellipsis-h ms-auto"></i>
                               </div>
                               <div>
                                {/* <p>{isTruncated ? post.message.slice(0,200): post.message}<br/>
                                <small onClick={()=>toggleIsTruncated(post.message)}  className="text-primary">
                                    {isTruncated ? "Read More" : "Read Less"}</small>
                                </p> */}
                                <p>{post.message}</p>
                                <img src={post.img} alt="" className="img-fluid" />
                               </div>
                               <div className="mt-4  d-flex align-items-center justify-content-center ">
                               <i className="me-2 far fa-heart me-5 fs-5 " > 252</i>          
                               <i class="me-2 far fa-comment-dots me-5 fs-5"> 8</i>
                               <i class="me-2 fas fa-share me-5 fs-5"/>
                               
                                
                               </div>
                           </div>
                       </div>
                   )
               })
           }
           </div>
        
    );
};

export default Post;