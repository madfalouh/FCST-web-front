import React from 'react';
import circleLogo from "./../../assets/circles.png";
import { useHistory } from 'react-router-dom';
import './Header.css';

function Header() {
    let history = useHistory();
 
    return (
        <>
        <div className="bg-bluenav">
            <img src={circleLogo} className="circleLogo"/>
            <div className="flex justify-center">
                <div className="flex space-x md:space-x-12 -mt-12  text-textcolor font-body">
                    <p className="text" onClick={() => history.push('/products')}>
                        Search
                    </p>
                    <p className="text" onClick={() => history.push('/chats')}>
                        Chat
                    </p>
                    <p className="text" onClick={() => history.push('/login')}>
                        Sign in
                    </p>
                    <p className="text" onClick={() => history.push('/register')}>
                        Sign up
                    </p>
                    <p className="text">
                        Contact
                    </p>
                </div>
            </div>

           

            
        </div>
    
        <button className="create-button" onClick={() => history.push('/create_product')}>
                <p className="text-btn">  
                📢  Add a product
                </p>
            </button>
         
        </>
    );
}

export default Header;
