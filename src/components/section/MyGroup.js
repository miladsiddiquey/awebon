import React, { useState } from 'react';
import Style from '../../style/MyGroup.module.css';
import { Link } from 'react-router-dom';

const MyGroup = () => {
    const groupData = [
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
                <div className={Style.groupSection}>
                    <div className="d-flex align-items-baseline">
                        <i className=" far fa-heart me-3 fs-5" />
                        <h6>my group</h6>
                    </div>
                    {
                         groupData.map((hot, index) => {
                            return (

                              <div key={index} className={`${Style.groupImg} d-flex align-items-center`}>
                                    <img src={hot.img} className="rounded-circle" alt="" />
                                    <h6>{hot.link}</h6>
                                </div>


                            )
                        })
                    }
                    <small onClick={() => toggleIsTruncated(groupData)} className="text-primary" >
                        {isTruncated ? "show  More" : " Less"}</small>
                    
                </div>
            </div>
        </div>
    );
};

export default MyGroup;