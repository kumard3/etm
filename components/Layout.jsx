import Footer from "./Footer";
import Nav from "./Nav";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {/* <Navbar /> */}
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
