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
        <button type="button" className="btn btnColor text-white">
          Login with something
        </button>
      </div>
    </nav>
  );
};

export default Nav;
