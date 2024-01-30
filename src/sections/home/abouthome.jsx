import React from "react";
import './abouthome.css';

const AboutHome  = () => {
    return (
        <div>
             <h4 className="green">About</h4>
        <div className="Main">
           
            <div className="one">
            myScheme is a National Platform that aims to offer one-stop search and discovery of the Government schemes.

            It provides an innovative, technology-based solution to discover scheme information based upon the eligibility of the citizen.

            The platform helps the citizen to find the right Government schemes for them. It also guides on how to apply for different Government schemes. Thus no need to visit multiple Government websites
            <div>
                <a href="#">
                <button>More</button>
                </a>
            </div>
            </div>
            <div className="two">
              <div><iframe width="500" height="315" src="https://www.youtube.com/embed/bNOWkB-6cmc?si=f8e4LnW9eQfVhan9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            </div>
        </div>
        </div>
    )
}

export default AboutHome;