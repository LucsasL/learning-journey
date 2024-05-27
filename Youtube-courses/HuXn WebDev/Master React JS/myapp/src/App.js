import Nav from "./components/ShopProject/Nav";
import Main from "./components/ShopProject/Main";
import Footer from "./components/ShopProject/Footer";
import "./styles/style.css";

const App = () => {
  return (
    <>
      <div className="pageCont">
        <Nav />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;