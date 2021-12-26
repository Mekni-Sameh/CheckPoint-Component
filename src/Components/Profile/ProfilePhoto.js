import React from 'react';
import sameh from "./sameh.jpg";
import "./ProfilePhoto.css";
const ProfilePhoto = () =>{
    return(
        <div >
<img className = "Profile" src={sameh} alt=""/>
        </div>
    );
}
export default ProfilePhoto;