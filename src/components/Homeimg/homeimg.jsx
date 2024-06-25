import React from "react";
import './homeimg.css';
import cp1 from '../../images/cp1.jpg';
import cp2 from '../../images/cp2.avif';
import cp3 from '../../images/TCP4.jpg';


function Homeimg() {
    return (
        <div className="homeimg">
            <div className="container d-flex">
                <div className="firstflex">
                    <button className="rounded-pill p-3">Discover The world</button>
                    <h1>Unleash Your Wanderlust <br />Book Your Next Journey</h1>
                    {/* <p className="text-white">Crafting exceptinal journey:Your Global escape Planner
                    .Unleash Your wanderlust Seamless travel</p> */}
                </div>
                <div className="pt-5 ps-5">
                    <img src={cp1} alt="no img found" className="imgs d-block m-3" />
                    <img src={cp2} alt="no img found" className="imgs d-block m-3" />
                    <img src={cp3} alt="no img found" className="imgs d-block m-3" />
                </div>
            </div>
        </div>
    );
}

export default Homeimg;
