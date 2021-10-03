import Image from "next/image";
export default function Banner() {
  return (
    <div className="w-screen h-full ">
      <Image src="/banner.jpeg" width="2160" height="768" />
    </div>
  );
}
