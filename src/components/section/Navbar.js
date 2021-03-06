import React from 'react';
import Style from '../../style/Navbar.module.css';


const Navbar = () => {
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light bg-white   ">
                <div class="container justify-content-center">
                    <div class="d-flex flex-row justify-content-between align-items-center col-12">
                        <a class="navbar-brand" href="#"><img src="https://i.ibb.co/VQZ440q/5487-removebg-preview.png" alt="" width='150px' className="img-fluid" /></a>
                        <div>
                            {/* <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form> */}

                            <form action="" className={Style.searchForm}>
                                <input type="search" placeholder="search" id="searchBox"></input>
                                <label for="searchBox" className="fas fa-search"></label>
                            </form>
                        </div>
                        <div>
                            <ul class="list-inline">
                                <li class="list-inline-item me-3 ">
                                    <a href="#">
                                        <svg aria-label="Home" class="_8-yf5 " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path></svg>
                                    </a>
                                </li>
                                <li class="list-inline-item me-3">
                                    <a href="#">
                                        <svg aria-label="Messenger" class="_8-yf5 " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M36.2 16.7L29 22.2c-.5.4-1.2.4-1.7 0l-5.4-4c-1.6-1.2-3.9-.8-5 .9l-6.8 10.7c-.7 1 .6 2.2 1.6 1.5l7.3-5.5c.5-.4 1.2-.4 1.7 0l5.4 4c1.6 1.2 3.9.8 5-.9l6.8-10.7c.6-1.1-.7-2.2-1.7-1.5zM24 1C11 1 1 10.5 1 23.3 1 30 3.7 35.8 8.2 39.8c.4.3.6.8.6 1.3l.2 4.1c0 1 .9 1.8 1.8 1.8.2 0 .5 0 .7-.2l4.6-2c.2-.1.5-.2.7-.2.2 0 .3 0 .5.1 2.1.6 4.3.9 6.7.9 13 0 23-9.5 23-22.3S37 1 24 1zm0 41.6c-2 0-4-.3-5.9-.8-.4-.1-.8-.2-1.3-.2-.7 0-1.3.1-2 .4l-3 1.3V41c0-1.3-.6-2.5-1.6-3.4C6.2 34 4 28.9 4 23.3 4 12.3 12.6 4 24 4s20 8.3 20 19.3-8.6 19.3-20 19.3z"></path></svg>
                                    </a>
                                </li>
                                <li class="list-inline-item me-3">
                                    <a href="#">
                                        <svg aria-label="Find People" class="_8-yf5 " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path clip-rule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" fill-rule="evenodd"></path></svg>
                                    </a>
                                </li>
                                
                                <li class="list-inline-item me-3 align-middle">
                                    <a href="#">
                                        <div className={`${Style.topImg} rounded-circle overflow-hidden d-flex justify-content-center align-items-center`}>
                                            <img src="https://i.ibb.co/yh83C0z/ht.jpg"  alt="" />
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;