import React from 'react';
import circleLogo from "./../assets/circles.png";
import './Header.css';

function Header() {
  return (
    <div className="bg-bluenav">
        <img src={circleLogo} className="circleLogo"/>
        <div className="flex justify-center">
            <div className="flex space-x md:space-x-12 -mt-12  text-textcolor font-body">
                <p className="text">
                    Search
                </p>
                <p className="text">
                    Chat
                </p>
                <p className="text">
                    Sign in
                </p>
                <p className="text">
                    Sign up
                </p>
                <p className="text">
                    Contact
                </p>
            </div>
        </div>

        <button className="btn">
            <p className="text-btn">  
            📢  deposer une annonce
            </p>
        </button>
    </div>
  );
}

export default Header;
