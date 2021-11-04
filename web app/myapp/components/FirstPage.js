import Image from "next/image";
import pcPic from "../images/pc.png";

function FirstPage() {
  return (
    <div className="bg-bluenav h-120 float-right w-full "  >
      
      <div className="float-right mt-32">
        <Image src={pcPic} width={720} height={553} className="image" ></Image>
        </div>
        <p className="text-5xl text-white mt-32 mx-16"> Build your own Dream Pc. </p>
        <p className="text-2xl text-white mt-32 mx-16">Are you looking for a new desktop but does the current<br></br> offer not entirely match your wishes? Or are you looking<br></br> for a custom made desktop? Circles offers a place to<br></br> choose amongst the best components in the market <br></br>for you to build your own desktop!</p>
      </div>
  );
}

export default FirstPage;
