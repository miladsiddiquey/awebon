import React from 'react';
import Style from '../../style/StorySection.module.css';

const StorySection = () => {

    const story = [
      
        {
            "name": "Anuska Sharma",
            "thumImg": "https://i.ibb.co/vYdRT54/p2.jpg",
            "bagImg": "https://i.ibb.co/vYdRT54/p2.jpg"
        },
        {
            "name": "Anuska Sharma",
            "thumImg": "https://i.ibb.co/ZMy555d/p1.jpg",
            "bagImg": "https://i.ibb.co/ZMy555d/p1.jpg"
        },
        {
            "name": "Anuska Sharma",
            "thumImg": "https://i.ibb.co/hdgT4KQ/p6.jpg",
            "bagImg": "https://i.ibb.co/hdgT4KQ/p6.jpg"
        }


    ]

    return (
        <div className="row">
            <div className={Style.middlePanel}>
                <div className={Style.storySection}>
                    <div className={`${Style.story} ${Style.create}`}>
                        <div className={Style.dpImage}>
                            <img src="https://i.ibb.co/z2v8pd4/p4.jpg" alt="Profile pic" />
                        </div>
                        <span className={Style.dpContainer}>
                            <i className="fa fa-plus"></i>
                        </span>
                        <span className={Style.name}>Create Story</span>
                    </div>
                    {
                        story.map((story, index) => {
                            return (
                                <div className="col-md-3">
                                    <div key={index} className={`${Style.story}`}>                                 
                                        <img src={story.thumImg} alt="" />
                                        <span className={Style.dpContainer}>                                           
                                            <img src={story.bagImg} alt="" />
                                        </span>
                                        <span className={Style.name}>{story.name}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default StorySection;