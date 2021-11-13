import circleLogo from "./../assets/circles.png";
import './Header.css';

function Header() {
  return (
    <div className="bg-bluenav">
        <img src={circleLogo} className="circleLogo"/>
        <div className="flex justify-center">
            <div className="flex space-x md:space-x-12 -mt-12  text-textcolor font-body">
                <p className="text-xl cursor-pointer hover:text-textcolorhover">
                    Search
                </p>
                <p className="text-xl cursor-pointer hover:text-textcolorhover">
                    Chat
                </p>
                <p className="text-xl cursor-pointer hover:text-textcolorhover">
                    Sign in
                </p>
                <p className="text-xl cursor-pointer hover:text-textcolorhover">
                    Sign up
                </p>
                <p className="text-xl cursor-pointer hover:text-textcolorhover">
                    Contact
                </p>
            </div>
        </div>

        <button className="bg-red-500 active:bg-red-700 rounded-md float-right mx-8	-mt-16 h-12 w-80">
            <p className="text-white text-xl cursor-pointer font-body">  
            📢  deposer une annonce
            </p>
        </button>
    </div>
  );
}

export default Header;
