import React from 'react';
import './Navbar.css';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import MicIcon from '@material-ui/icons/Mic';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MovieIcon from '@material-ui/icons/Movie';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export default function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <li style={{display:'flex',alignContent:'center'}}><HomeIcon/> <div className="listitems" >Home</div></li>
                <li style={{display:'flex',alignContent:'center'}}><PersonAddIcon/> <div className="listitems" >Sign In/Up</div></li>
                <li style={{display:'flex',alignContent:'center'}}><ListIcon/> <div className="listitems" >Listings</div></li>
                <li style={{display:'flex',alignContent:'center'}}><MicIcon/> <div className="listitems" >Podcasts</div></li>
                <li style={{display:'flex',alignContent:'center'}}><MovieIcon/> <div className="listitems" >Videos</div></li>
                <li style={{display:'flex',alignContent:'center'}}><LocalOfferIcon/><div className="listitems" >Tags</div></li>
            </ul>
        </div>
    )
}
