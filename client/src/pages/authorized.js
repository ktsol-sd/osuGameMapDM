import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { toast } from "react-toastify";

const Authorized = () => {
  const [map, setMap] = useState("");
  const [userToDM, setUserToDM] = useState("-Velfina-");

  const handleMap = (e) => {
    setMap(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = {
        map,
      };
      const res = await axios.post(`http://localhost:3001/sendMap`, data);
      if (map.length === 0) {
        toast.error("Please fill in the field");
      } else if (!map.includes("https://osu.ppy.sh/beatmapsets/")) {
        toast.error("Please add a valid link");
      } else if (
        map.includes("#taiko") ||
        map.includes("#fruits") ||
        map.includes("#mania")
      ) {
        toast.error("Please add a valid link");
      } else if (res.status === 200) {
        toast.success("Map submitted!");
        setMap("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <header className="App-header"></header>

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
            <form onSubmit={handleSubmit}>
              <div className="form-group p-2">
                <small>
                  <label className="text-muted">Map</label>
                </small>
                <input
                  onChange={handleMap}
                  value={map}
                  id="mapReq"
                  type="text"
                  className="form-control"
                  placeholder="Enter your request map"
                />
              </div>
              <div className="form-group p-2">
                <button
                  className="btn btn-primary col-6"
                  onClick={handleSubmit}
                >
                  Submit
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
};

export default Authorized;
