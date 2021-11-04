import Image from "next/image";
import profilePic from "./circles.png";
import camPic from "../images/cam.png";

function Header() {
  return (
    <div className="bg-bluenav">
      <Image src={profilePic} width={190} height={70} ></Image>

      <div className="flex justify-center  ">
        <div className="flex space-x md:space-x-12 -mt-12  text-textcolor font-body ">
          <p className=" text-xl cursor-pointer hover:text-textcolorhover 	">
            Search
          </p>
          <p className=" text-xl cursor-pointer	hover:text-textcolorhover   	">
            Chat
          </p>
          <p className=" text-xl cursor-pointer	hover:text-textcolorhover  ">
            Sign in
          </p>
          <p className="text-xl cursor-pointer hover:text-textcolorhover  	">
            Sign up
          </p>
          <p className="text-xl cursor-pointer hover:text-textcolorhover  	">
            Contact
          </p>
        </div>
      </div>

      <button className="bg-red-500 active:bg-red-700  rounded-md      float-right mx-8	-mt-16  h-12 w-80  ">

        <p className="text-white text-xl cursor-pointer font-body	">
          
        📢  deposer une annonce
        </p>
      </button>
    </div>
  );
}

export default Header;
