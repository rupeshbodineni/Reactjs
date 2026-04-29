import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";  
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="container mt-10">
        <div className="row justify-content-center">
          <div className="col-md-5">

            <h2 className="text-center">App component</h2>
            <button className="btn btn-primary mb-3">Test</button>

            <form>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter mobile number"
                />
              </div>

              <button type="submit" className="btn btn-success w-100">
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;