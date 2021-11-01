import Link from 'next/link'



export default function Navbar() {
  return (
    <div className="bg-black w-full h-20 grid grid-cols-2 text-white items-center">
      <div className="flex items-center justify-center">
        <h1>ETM</h1>
      </div>
      <div className="flex justify-start space-x-4 items-center">
       <Link href='/about' ><p>About Us</p></Link> 
        <p>Services</p>
        <p>ETM Lease</p>

        <button className="w-24 bg-themeGreen  rounded-lg p-2 h-full text-black">
          Contact us
        </button>
      </div>
    </div>
  );
}
