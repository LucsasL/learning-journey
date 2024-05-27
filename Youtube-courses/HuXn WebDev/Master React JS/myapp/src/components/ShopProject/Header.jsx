import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Header = ({ changeQuery }) => {
  return (
    <>
      <header>
        <div>
          <input
            type="text"
            className="searchInput"
            placeholder="Enter your search shoes"
            onChange={(e) => changeQuery(e)}
          />

          <a href="#">
            <FiHeart className="nav-icons" />
          </a>

          <a href="#">
            <AiOutlineShoppingCart className="nav-icons" />
          </a>

          <a href="#">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;