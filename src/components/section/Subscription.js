import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from '../../style/Subscription.module.css';

const Subscription = () => {
    const subscription = [
        {
            "img": "https://i.ibb.co/Wvp2Cq2/p5.jpg",
            "link": <Link to="#" className="nav-link fst-normal" aria-current="page">Home </Link>
        },
        {
            "img": "https://i.ibb.co/Wvp2Cq2/p5.jpg",
            "link": <Link to="#" className="nav-link fst-normal" aria-current="page">Live </Link>
        },
        {
            "img": "https://i.ibb.co/Wvp2Cq2/p5.jpg",
            "link": <Link to="#" className="nav-link fst-normal" aria-current="page">Matches </Link>
        },
        {
            "img": "https://i.ibb.co/Wvp2Cq2/p5.jpg",
            "link": <Link to="#" className="nav-link fst-normal" aria-current="page">Hot or Not </Link>
        },
        {
            "img": "https://i.ibb.co/Wvp2Cq2/p5.jpg",
            "link": <Link to="#" className="nav-link fst-normal" aria-current="page">Chatrooms </Link>
        },
        {
            "img": "https://i.ibb.co/Wvp2Cq2/p5.jpg",
            "link": <Link to="#" className="nav-link fst-normal" aria-current="page">Events </Link>
        },
        {
            "img": "https://i.ibb.co/Wvp2Cq2/p5.jpg",
            "link": <Link to="#" className="nav-link fst-normal" aria-current="page">Groups </Link>
        },
        {
            "img": "https://i.ibb.co/Wvp2Cq2/p5.jpg",
            "link": <Link to="#" className="nav-link fst-normal" aria-current="page">Blogs </Link>
        },
    ]
    const [isTruncated, setIsTruncated] = useState(true);

    function toggleIsTruncated() {
        setIsTruncated(!isTruncated);
        console.log("clicked")
    }
    return (
        <div>
            <div className="mt-3">
                <div className={Style.subscription}>                                        
                        <h6>subscription</h6>                  
                    {
                         subscription.slice(0,5).map((sub, index) => {
                            return (

                              <div key={index} className={`${Style.subImg} d-flex align-items-center`}>
                                    <img src={sub.img} className="rounded-circle" alt="" />
                                    <h6>{sub.link}</h6>
                                </div>


                            )
                        })
                    }
                    <small onClick={() => toggleIsTruncated(subscription)} className="text-primary" >
                        {isTruncated ? "show  More" : " Less"}</small>
                    
                </div>
            </div>
        </div>
    );
};

export default Subscription;