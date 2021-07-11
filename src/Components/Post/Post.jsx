import React from 'react';
import "./Post.css";

export default function Post() {
    return (
        <div className="post">
            <div className="postcontainer">
                <img src="https://source.unsplash.com/random" alt="" className="imagecontainer" />
                <div className="textcontainer">
                    <div style={{minWidth:'50px',maxHeight:'50px',maxWidth:'50px',minHeight:'50px',borderRadius:'50%',overflow:'hidden'}}>
                        <img src="https://source.unsplash.com/random" />
                    </div>
                </div>
            </div>
        </div>
    )
}
