export default function Footer() {
  return (
    <footer className="w-screen bg-gray-100 justify-center items-center flex py-10">
      <div className="max-w-6xl grid grid-cols-4">
        <div>LOGO</div>
        <div className="flex flex-col space-y-3">
          <p>About us</p>
          <p>ETM Lease</p>
          <p>Our Team</p>
          <p>Careers</p>
        </div>
        <div>
          <p>Contact us</p>
        </div>
        <div>
          <div className="mb-4 space-y-2">
            <p>Address :</p>
            <p>B-99, Panchsheel Vihar, New Delhi. 110017</p>
          </div>
          <div>
            <p>Contact: </p>
            <p>+91 - 9334977772</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
