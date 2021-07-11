import React from 'react';
import "./Post.css";

export default function Post() {
    return (
        <div className="post">
            <div className="postcontainer" style={{backgroundColor:'white'}}>
                <img src="https://source.unsplash.com/random" alt="" className="imagecontainer" />
                <div className="textcontainer">
                    <div style={{padding:'0.5rem'}} >
                        <img src="https://source.unsplash.com/random" style={{minWidth:'50px',maxHeight:'50px',maxWidth:'50px',minHeight:'50px',borderRadius:'50%',overflow:'hidden'}} />
                    </div>
                    <div style={{textAlign:'center'}}>
                    <div className="texts">
                        <h1 style={{marginLeft:'10px',textAlign:'left'}}>10 GitHub repositories to become a better JavaScript Developer</h1>
                    </div>
                    <div style={{color:'grey',marginTop:'20px',marginBottom:'20px'}}>
                        <div style={{marginLeft:'10px'}}> #javascript #productivity #beginners #github</div></div>
                        </div>
                </div>
            </div>
            <div className="postcontainer" style={{marginTop:'40px'}}>
                
                <div className="textcontainer">
                    <div style={{padding:'0.5rem'}} >
                        <img src="https://source.unsplash.com/random" style={{minWidth:'50px',maxHeight:'50px',maxWidth:'50px',minHeight:'50px',borderRadius:'50%',overflow:'hidden'}} />
                    </div>
                    <div className="texts">
                        <h1 style={{marginLeft:'10px'}}>10 GitHub repositories to become a better JavaScript Developer</h1>
                    </div>
                    <div style={{color:'grey',marginTop:'20px',marginBottom:'20px'}}>
                        <div style={{marginLeft:'10px'}}> #javascript #productivity #beginners #github</div></div>
                </div>
            </div>
            <div className="postcontainer" style={{marginTop:'40px'}}>
               
                <div className="textcontainer">
                    <div style={{padding:'0.5rem'}} >
                        <img src="https://source.unsplash.com/random" style={{minWidth:'50px',maxHeight:'50px',maxWidth:'50px',minHeight:'50px',borderRadius:'50%',overflow:'hidden'}} />
                    </div>
                    <div className="texts">
                        <h1 style={{marginLeft:'10px'}}>10 GitHub repositories to become a better JavaScript Developer</h1>
                    </div>
                    <div style={{color:'grey',marginTop:'20px',marginBottom:'20px'}}>
                        <div style={{marginLeft:'10px'}}> #javascript #productivity #beginners #github</div></div>
                </div>
            </div>
        </div>
    )
}
