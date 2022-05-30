import { useEffect, useState } from "react";
import "./Nav.css";
//style={{ backgroundColor: "rgb(105,32,61)" }}
const Nav = () => {
  // const [current, setCurrent] = useState("");

  // useEffect(() => {
  //   process.browser && setCurrent(window.location.pathname);
  // }, [process.browser && window.location.pathname]);

  return (
    <nav className="nav d-flex justify-content-end gradient">
      <div className="my-2 mx-2">
        <a href="http://localhost:3001/auth/twitch">
          <button type="button" className="btn btnColor text-white">
            Login with Twitch
          </button>
        </a>
        <a href="http://localhost:3001/auth/logout">
          <button type="button" className="btn btnColor text-white">
            Logout
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
