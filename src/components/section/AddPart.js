import React from 'react';
import Style from '../../style/AddPart.module.css';

const AddPart = () => {
    return (
        <div>
            <div className="">
                <div className=" mt-3">
                    <div className={`${Style.addPart} text-center`}>
                    <i className=" far fa-heart"/>
                    <h6>You're in a club</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi maxime molestiae </p>
                    <button className="btn btn-success">Try now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPart;