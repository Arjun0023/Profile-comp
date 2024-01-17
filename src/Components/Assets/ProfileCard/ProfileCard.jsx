import React from "react";
import './ProfileCard.css'
import profile_icon from ""

const UserProfile = () =>{
    return(
        <div className="Upc">
            <div className="gradient"></div>
            <div className="profile-down"></div>
                <img src={profile_icon} alt=""/>
                <div className="profile-title">ElonMusk</div>
                <div className="profile-description">LoremIpsumDescription</div>
                <div className="profile-button"><a href="mailto:ekon@musk.com">Contact Me</a></div>
                </div>

    )
}

export default UserProfile