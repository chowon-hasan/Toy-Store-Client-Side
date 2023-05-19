import React, { useContext, useState } from "react";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const auth = getAuth(app);

const LogIn = () => {
  const { signInUser } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const [logError, setLogError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log(email, pass);

    signInUser(email, pass)
      .then((result) => {
        const signedInIser = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePopup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const logedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLogError(error.message);
      });
  };

  return (
    <section className="bg-white py-24 pb-48">
      <h1 className="text-center text-yellow-500 text-2xl my-5">
        Log In here and enjoy the toys collection
      </h1>
      <div className="xl:container mx-auto">
        <div className="lg:w-1/2 sm:w-full mx-auto">
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your Email</span>
              </label>
              <label className="input-group input-group-vertical border-roundedborder-yellow-300">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="info@site.com"
                  className="input input-bordered border-yellow-300"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Your PassWord</span>
              </label>
              <label className="input-group input-group-vertical border-roundedborder-yellow-300">
                <span>Email</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered border-yellow-300"
                />
              </label>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-wide mt-5">
                Submit
              </button>
            </div>
            <div className="text-center mt-5 text-black">
              <p className="text-danger mt-3">{logError}</p>
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-yellow-500">
                  Register here
                </Link>
              </p>
            </div>
          </form>
          <div className="text-center mt-5 text-yellow-500">
            <p className="mt-3">Or you can sign in with</p>
            <div className="">
              <div className="">
                <button className="btn mt-5 text-white" onClick={handlePopup}>
                  <FaGoogle />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
