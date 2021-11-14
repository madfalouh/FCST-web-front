import Header from "../components/Header";
import pc from "./../assets/pc.png";

function HomePage() {
  return (
    <>
      <Header/>
      <div className="bg-bluenav  float-right w-full">
        <div className="float-right mt-32">
          <img src={pc} width="882" className="image"></img>
        </div>
        <p className="text-5xl text-white mt-32 mx-14"> Build your own Dream Pc. </p>
        <p className="text-2xl text-white mt-32 mx-14">Are you looking for a new desktop but does the current<br></br> offer not entirely match your wishes? Or are you looking<br></br> for a custom made desktop? Circles offers a place to<br></br> choose amongst the best components in the market <br></br>for you to build your own desktop!</p>
         <span className="h-50 w-120" ></span>
      </div>
    </>
  );
}

export default HomePage;
