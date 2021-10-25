import React from 'react';
import Style from '../../style/CallSection.module.css';

const CallSection = () => {
    return (
        <div className={Style.callSection}>
            <div className="row d-flex align-items-center">
                <div className="col-md-1">
                    <div className={Style.collImg}>
                    <img src="https://i.ibb.co/hdgT4KQ/p6.jpg" alt="" className="rounded-circle" />
                    </div>
                </div>
                <div className="col-md-9">
               <div className={Style.callInput}>
               <input type="text" placeholder="What's on your mind" />
               </div>
                </div>
               
                <div className="col-md-2">
                <div className={Style.callIcons}>
                <i className="me-2 far fa-heart"/> 
                <i className="me-2 far fa-heart"/> 
                </div>
                </div>
            </div>
        </div>
    );
};

export default CallSection;