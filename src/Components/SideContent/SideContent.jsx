import React from 'react';
import Img1 from'../../Images/img1.png'
import "./SideContent.css";

export default function SideContent() {
    return (
        <div className="sidecontent">
            <div>
                <div className="logo" style={{display:'flex',justifyContent:'center'}}>
                    <img style={{width:'60%'}}src={Img1}></img>
                </div>
            </div>
        </div>
    )
}
