import React from "react";
import './custompackages.css';
import cp1 from '../../images/cp1.jpg';
import cp2 from '../../images/cp2.avif';
import cp3 from '../../images/cp3.jpg';

const packages = [
    {
        img: cp1,
        title: "California sunset twilight boat Cruise",
        duration: "2 days 3 nights",
        price: "1000rs/person"
    },
    {
        img: cp2,
        title: "Mountain Adventure Retreat",
        duration: "5 days 4 nights",
        price: "5000rs/person"
    },
    {
        img: cp3,
        title: "Desert Safari and Camping",
        duration: "3 days 2 nights",
        price: "3000rs/person"
    }
];

function Custompackages(){
    return(
        <div className="container">
            <div className="conatinerhead">
                <h1 className="clr">Our Custom Packages</h1>
                <p>Favourite Destinations Based on customer reviews</p>
            </div>
            <div className="cards-container">
                {packages.map((pkg, index) => (
                    <div key={index} className="card ms-3">
                        <img className="cardimg" src={pkg.img} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{pkg.title}</h5>
                            <p className="card-text">{pkg.duration}</p>
                            <div className="d-flex justify-content-between">
                                <p className="pt-1">{pkg.price}</p>
                                <button className="pb-2 pe-3 rounded-pill tbnn">Book now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Custompackages;
