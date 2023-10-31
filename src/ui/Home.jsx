import Hero from "./Hero";
import Features from "./Features";
import Cta from "./Cta";

function Home() {
  return (
    <>
      <Hero />

      <div className="absolute left-0 right-0 -z-50 h-[200px] w-1/3 rounded-xl bg-accent100" />
      <Features />
      <div className=" absolute left-0 right-0 -z-50 mt-32 h-[500px] overflow-hidden rounded-bl-xl rounded-tl-xl bg-accent100 sm:mt-16 md:left-2/4  md:mt-10 xl:mt-0 " />
      <Cta />
    </>
  );
}

export default Home;
