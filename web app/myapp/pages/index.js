import Image from "next/image";

import Loaderimg from "../images/loader.gif";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";

function Home() {
  const router = useRouter();

  const { params = [] } = router.query;

  console.log(params);

  useEffect(() => {
    setTimeout(() => {
      router.push("/Home");
    }, 5200);
  }, []);

  return (
    <div>
      <Image src={Loaderimg} layout="fill"></Image>
    </div>
  );
}

export default Home;
