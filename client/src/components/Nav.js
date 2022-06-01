import "./Nav.css";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };

  return (
    <nav className="nav d-flex justify-content-end gradient">
      <span className="logo text-white">
        <Link className="link" to="/">
          Osu! App
        </Link>
      </span>
      {user ? (
        <div className="my-2 mx-2">
          <ul className="list text-white">
            <li className="listItem">
              <img src={user.image} alt="" className="avatar" />
            </li>
            <li className="listItem">{user.twitchUsername}</li>
            <li className="listItem">
              <button
                type="button"
                className="btn secondBtnColor text-white"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <Link className="link" to="login">
          <button type="button" className="btn loginButton text-white">
            Login
          </button>
        </Link>
      )}
    </nav>
  );
};
export default Nav;
