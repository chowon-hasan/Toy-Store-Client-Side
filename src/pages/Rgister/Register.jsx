import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [regError, setRegError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const pass = form.pass.value;
    const photo = form.photo.value;

    // console.log(email, name, pass, photo);

    // if (pass < 6) {
    //   setRegError("Please provide at least 6 characters");
    // } else if (!/(?=.[A-Z])/.test(pass)) {
    //   setRegError("Please add at least one uppercase");
    //   return;
    // }

    createUser(email, pass, name, photo)
      .then((result) => {
        const createdUser = result.user;
        console.log(result);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="bg-white pt-12 pb-48">
      <div className="xl:container mx-auto">
        <div className="lg:w-1/2 s:w-full mx-auto">
          <form onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <label className="input-group input-group-vertical">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="eg: jack kellis"
                  className="input input-bordered"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input-group input-group-vertical">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmai.com"
                  className="input input-bordered"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input-group input-group-vertical">
                <span>Password</span>
                <input
                  type="password"
                  name="pass"
                  placeholder="Type Your PassWord"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="text-center mt-5">
              <p className="text-red-500 mt-3">{regError}</p>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group input-group-vertical">
                <span>Photo URL</span>
                <input
                  type="text"
                  name="photo"
                  placeholder="Paste your photo URL"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="text-center mt-5">
              <button className="btn btn-wide">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
