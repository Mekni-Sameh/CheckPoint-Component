import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullName from './Components/Profile/FullName';
import Adress from './Components/Profile/Adress';
import ProfilePhoto from './Components/Profile/ProfilePhoto'
import Autumn from './Components/Profile/autumn.jpg';
import Facebook from './Components/Profile/facebook.png';
import Youtube from './Components/Profile/youtube.png';
import Github from './Components/Profile/github.png';


function App() {
  return (
    <div className="App">
    <img src={Autumn}/>
    <ProfilePhoto/>
    <FullName/>
    <Adress/>
    <div className= "social">
    <a href="https://facebook.com/"><img  className="media"src = {Facebook}/></a>
    <a href="https://github.com/"><img className="media"src = {Github}/></a>
    <a href="https://www.youtube.com/"><img className="media"src= {Youtube}/></a>
   
    </div>
   
      
    </div>
    
  );
}

export default App;
