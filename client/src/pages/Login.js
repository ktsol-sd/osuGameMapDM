import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import twitch from "../icons/twitch.svg";

function Login() {
  const twitchLogin = () => {
    window.open("https://sadonosuproject.herokuapp.com/auth/twitch", "_self");
  };
  return (
    <div className="Login">
      <header className="Login-header"></header>

      <div
        className="container-fluid"
        style={{ backgroundColor: "rgb(56,46,50)" }}
      >
        <div className="row py-5">
          <div className="col text-center">
            <h1 className="text-white">Map request</h1>
          </div>
        </div>

        <div className="row py-5">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="form-group p-2">
                <small>
                  <label className="text-muted">Map</label>
                </small>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your request map"
                  disabled
                />
              </div>
              <div className="form-group p-2">
                <button
                  type="button"
                  className="btn btnColor col-6 text-white"
                  onClick={twitchLogin}
                >
                  Login via Twitch{" "}
                  <img
                    src={twitch}
                    alt="a"
                    className="twitchLogo"
                    style={{ height: 25, width: 25 }}
                  />
                </button>
                <p className="mt-2 text-muted">
                  Example: https://osu.ppy.sh/beatmapsets/461744#osu/1031991
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
