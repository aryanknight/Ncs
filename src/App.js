import {useRef,useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar.jsx';
import Post from './Components/Post/Post';
import SideContent from './Components/SideContent/SideContent';

function App() {
  
  return (
    <div className="main">
      <Header/>
      <div style={{display:'flex',justifyContent:'center'}}>
      <div className="maincontent">
        <Navbar/>
        <Post/>
        <SideContent/>
      </div>
      </div>
      
    </div>
  );
}

export default App;
