import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { toast } from "react-toastify";

function App() {
  //axios.defaults.baseURL = process.env.PUBLIC_API;
  const [map, setMap] = useState("");
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
        toast.error(res.data.msg);
      } else if (res.status === 200) {
        toast.success(res.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header"></header>

      <div className="container-fluid">
        <div className="row py-5">
          <div className="col text-center">
            <h1 className="text-black">Map request</h1>
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
                  className="btn btn-primary col-12"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
