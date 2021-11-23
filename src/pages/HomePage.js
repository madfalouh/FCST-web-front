import React from 'react';
import Header from "../components/Header/Header";
import pc from "./../assets/pc.png";
import '../index.css';

function HomePage() {
  return (
    <>
      <Header/>
      <div className="bg-bluenav  cont">
        <div  className="para">
        <p className="main"> Build your own Dream Pc. </p>
        <br></br>   <p className="main1">Are you looking for a new desktop but does the current<br></br> offer not entirely match your wishes? Or are you looking<br></br> for a custom made desktop? Circles offers a place to<br></br> choose amongst the best components in the market <br></br>for you to build your own desktop!</p>
        </div>
        <img src={pc} width="500"  height="500" className="image"></img>
        
      </div>
    </>
  );
}

export default HomePage;
