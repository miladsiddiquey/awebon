import React from 'react';
import Style from '../../style/ProfileSection.module.css';

const ProfileSection = () => {
    return (
        <div className={`${Style.pCard} shadow mt-3`}>
            <div className={`${Style.profile} text-center`}>
                <img src="https://i.ibb.co/yh83C0z/ht.jpg" alt="" className="img-fluid rounded-circle" />
                <h6 className="mt-2">miladsiddiquey934</h6>
                <div className={`${Style.pIcon}`} d-flex mt-3 >
           <i className="me-2 far fa-heart"> 201</i>                     
           <i className="me-2 far fa-heart"> 20</i>                     
           <i className="me-2 far fa-heart"> 20</i>                     
           <i className="me-2 far fa-heart"> 20</i>                     
                                 
           </div>
            </div>
            

            {/* <div className="mt-4  d-flex align-items-center justify-content-center ">
                <i className="me-2 far fa-heart me-5 fs-5 " > 252</i>
                <i class="me-2 far fa-comment-dots me-5 fs-5"> 8</i>
                <i class="me-2 fas fa-share me-5 fs-5" />


            </div> */}

        </div>
    );
};

export default ProfileSection;