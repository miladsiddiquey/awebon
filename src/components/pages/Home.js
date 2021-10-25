import React from 'react';
import AddPart from '../section/AddPart';
import CallSection from '../section/CallSection';
import LeftMenu from '../section/LeftMenu';
import Post from '../section/Post';
import ProfileSection from '../section/ProfileSection';
import StorySection from '../section/StorySection';
import MyGroup from '../section/MyGroup';
import Subscription from '../section/Subscription';
import Sponsored from '../section/Sponsored';

const Home = () => {
    return (
        <div>
          <div className="container">
              <div className="row d-flex justify-content-center">
                  <div className="col-md-3">
                   <ProfileSection/>
                   <LeftMenu/>
                   <Subscription/>
                  </div>
                  <div className="col-md-6">
                      <StorySection/>
                      <CallSection/>
                       <Post/>
                  </div>
                  <div className="col-md-3">
                        <AddPart/>
                        <MyGroup/>
                        <Sponsored/>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default Home;