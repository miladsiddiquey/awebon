import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../../style/LeftMenu.module.css';

const LeftMenu = () => {

    const menu = [
        {
            "icon": <i className="me-2 far fa-heart me-3 fs-5" />,
            "link": <Link to="#" className="nav-link fst-normal" aria-current="page">Home </Link>
        },
        {
            "icon": <i className="me-2 far fa-heart me-3 fs-5" />,
            "link": <Link to="#" className="nav-link fst-normal" aria-current="page">Live </Link>
        },
        {
            "icon": <i className="me-2 far fa-heart me-3 fs-5" />,
            "link": <Link to="#" className="nav-link fst-normal" aria-current="page">Matches </Link>
        },
        {
            "icon": <i className="me-2 far fa-heart me-3 fs-5" />,
            "link": <Link to="#" className="nav-link fst-normal" aria-current="page">Hot or Not </Link>
        },
        {
            "icon": <i className="me-2 far fa-heart me-3 fs-5" />,
            "link": <Link to="#" className="nav-link fst-normal" aria-current="page">Chatrooms </Link>
        },
        {
            "icon": <i className="me-2 far fa-heart me-3 fs-5" />,
            "link": <Link to="#" className="nav-link fst-normal" aria-current="page">Events </Link>
        },
        {
            "icon": <i className="me-2 far fa-heart me-3 fs-5" />,
            "link": <Link to="#" className="nav-link fst-normal" aria-current="page">Groups </Link>
        },
        {
            "icon": <i className="me-2 far fa-heart me-3 fs-5" />,
            "link": <Link to="#" className="nav-link fst-normal" aria-current="page">Blogs </Link>
        },
    ]

    return (
        <div>
            <nav className="navbar  navbar-light shadow  mt-3" id={Style.left_menu}>
                <ul className=" navbar-nav" id={Style.Left_menu_ul}>

                    <li className="active" >
                        {
                            menu.map((menu, index) => {
                                return (
                                    <div key={index} className="d-flex align-items-center text-secondary">
                                        {menu.icon}
                                        {menu.link}
                                    </div>
                                )
                            })
                        }
                    </li>                  
                </ul>
            </nav>
        </div>
    );
};

export default LeftMenu;