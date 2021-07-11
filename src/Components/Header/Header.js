import React from 'react';
import "./Header.css";

export default function Header() {
    return (
        <div className="header" >
            <div className="headleft">
                <div style={{background:"black",color:"white",padding:"0.5rem",borderRadius:'5px',fontSize:'32px'}} >
                    Dev
                </div>
                <input placeholder="Search" />
            </div>

            <div className="headright">
                <button className="button_1" style={{color:'blue',background:"white"}}>Log In</button>
                <button className="button_1" style={{color:'white',background:"#185ADB"}}>Create Account</button>
            </div>
        </div>
    )
}
