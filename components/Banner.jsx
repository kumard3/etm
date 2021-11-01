import Image from "next/image";
export default function Banner() {
  return (
    <div className="w-full h-full ">
      <div className="flex flex-col absolute z-10  top-[25%] sm:top-[40vh] lg:top-[40vh] left-[30vw] sm:left-[40vw] text-white text-center"> 
      <h1 className="text-5xl lg:text-6xl font-semibold">ETM  </h1>
      <h3 className="text-lg sm:text-xl lg:text-3xl font-semibold"  >Sustainable EV in India. </h3>
      </div>
      <Image src="/banner.jpeg" width="1600" height="768" />
    </div>
  );
}
