import Banner from "../components/Banner";
import Footer from "../components/Footer";

import Slogan from "../components/Slogan";
import WhyUS from "../components/WhyUS";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Banner />
      <Slogan />
      <WhyUS />
    </div>
  );
}
