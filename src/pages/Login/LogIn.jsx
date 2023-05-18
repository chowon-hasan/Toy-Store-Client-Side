import React, { useContext } from "react";

import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const LogIn = () => {
  const { signInUser } = useContext(AuthContext);

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
      })
      .catch((err) => {
        console.log(err);
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
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-yellow-500">
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
