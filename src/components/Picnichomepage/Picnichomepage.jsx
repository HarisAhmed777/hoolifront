import React from "react";
import './picnichomepage.css';
import TCP1 from '../../images/TCP1.jpg';
import TCP2 from '../../images/TCP2.jpg';
import TCP3 from '../../images/TCP3.jpg';
import TCP4 from '../../images/TCP4.jpg';
import TCP5 from '../../images/TCP5.avif';
import TCP6 from '../../images/TCP6.jpg';
import TCP7 from '../../images/TCP7.jpg';
import TCP8 from '../../images/TCP8.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const picnicpackages = [
    {
        img: TCP1,
        title: "Mountains",
        para: "25 spots"
    },
    {
        img: TCP2,
        title: "Safari",
        para: "25 spots"
    },
    {
        img: TCP3,
        title: "Desert",
        para: "25 spots"
    },
    {
        img: TCP4,
        title: "Flower",
        para: "25 spots"
    },
    {
        img: TCP5,
        title: "Beach",
        para: "25 spots"
    },
    {
        img: TCP6,
        title: "Temples",
        para: "25 spots"
    },
    {
        img: TCP7,
        title: "Yatch",
        para: "25 spots"
    },
    {
        img: TCP8,
        title: "Valley",
        para: "25 spots"
    }
];

function Picnicpackages() {
    return (
        <div className="picnic-container">
            <div className="picnic-container-head">
                <h2>Top Picnic spots</h2>
                <p>Favourite Destinations Based on customer reviews</p>
            </div>
            <div className="picnic-cards-container">
                {picnicpackages.map((pkg, index) => (
                    <div key={index} className="picnic-card ms-3">
                        <div className="d-flex"><img className="picnic-card-img ms-2" src={pkg.img} alt="Card image cap" /></div>
                        <div className="picnic-card-body">
                            <h5 className="picnic-card-title">{pkg.title}</h5>
                            <div className="d-flex justify-content-between">
                                <p className="pt-1">{pkg.para}</p>
                                <button className="picnic-button pb-2 pe-3"><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        
    )
}

export default Picnicpackages;
