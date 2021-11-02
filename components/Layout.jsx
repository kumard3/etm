import Footer from "./Footer";
import Nav from "./Nav";


export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
