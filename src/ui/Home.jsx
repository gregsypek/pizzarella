import Hero from "./Hero";
import Features from "./Features";
import Cta from "./Cta";

function Home() {
  return (
    <>
      {/* <div className="relative"> */}
      <Hero bgColor={"bg-accent100"} />
      {/* </div> */}

      <div className="relative">
        <Features bgColor={"bg-accent100"} />
      </div>
      <div className="relative">
        <Cta bgColor={"bg-accent100"} />
      </div>
    </>
  );
}

export default Home;
