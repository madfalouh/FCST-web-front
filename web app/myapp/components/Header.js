import Image from "next/image";
import profilePic from "./circles.png";
import { useRouter } from "next/router";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import AuthProvider from "../context/auth";
function Header() {
  const router = useRouter();
  const handleOnClickOnRegister = () => router.push("/register");
  const handleOnClickOnLogin = () => router.push("/login");
  const handleOnClickOnProfile = () => router.push("/profile");
  const handleOnClickOnChat = () => router.push("/Chat");
  const handleOnClickOnLogout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });

    await signOut(auth);

    router.push("/Home");
  };
  return (
    <AuthProvider>
      <div className="bg-bluenav">
        <Image src={profilePic} width={190} height={70}></Image>

        <div className="flex justify-center  ">
          <div className="flex space-x md:space-x-12 -mt-12  text-textcolor font-body ">
            <p className=" text-xl cursor-pointer hover:text-textcolorhover 	">
              Search
            </p>
            <p
              className=" text-xl cursor-pointer	hover:text-textcolorhover   	"
              onClick={handleOnClickOnChat}
            >
              Chat
            </p>
            {auth.currentUser ? (
              <>
                <p
                  className=" text-xl cursor-pointer	hover:text-textcolorhover  "
                  onClick={handleOnClickOnProfile}
                >
                  profile
                </p>
                <p
                  className=" text-xl cursor-pointer	hover:text-textcolorhover  "
                  onClick={handleOnClickOnLogout}
                >
                  Log Out
                </p>
              </>
            ) : (
              <>
                <p
                  className=" text-xl cursor-pointer	hover:text-textcolorhover  "
                  onClick={handleOnClickOnLogin}
                >
                  Sign in
                </p>
                <p
                  className="text-xl cursor-pointer hover:text-textcolorhover  	"
                  onClick={handleOnClickOnRegister}
                >
                  Sign up
                </p>
              </>
            )}

            <p className="text-xl cursor-pointer hover:text-textcolorhover  	">
              Contact
            </p>
          </div>
        </div>

        <button className="bg-red-500 active:bg-red-700  rounded-md      float-right mx-8	-mt-16  h-12 w-80  ">
          <p className="text-white text-xl cursor-pointer font-body	">
            📢 deposer une annonce
          </p>
        </button>
      </div>
    </AuthProvider>
  );
}

export default Header;
