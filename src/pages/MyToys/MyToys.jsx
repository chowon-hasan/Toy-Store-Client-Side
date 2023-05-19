import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./mytoys.css";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        console.log(data);
      });
  }, [user]);

  return (
    <section>
      <div className="xl:container mx-auto">
        <div className="lg:w9/12 sm:w-full py-12">
          <div className="overflow-x-auto">
            <table className="table table-compact w-full">
              <thead>
                <tr>
                  <th>Seller</th>
                  <th>Toy Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Available Quantity</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {myToys.map((toys, i) => (
                  <tr key={i}>
                    <td>{toys?.seller}</td>
                    <td>{toys?.toyName}</td>
                    <td>$ {toys?.price}</td>
                    <td>{toys?.category}</td>
                    <td>{toys?.quantity}</td>

                    <td>
                      {/* The button to open modal */}
                      <label htmlFor={`my-modal-${i}`} className="btn">
                        Edit
                      </label>

                      {/* Put this part before </body> tag */}
                      <input
                        type="checkbox"
                        id={`my-modal-${i}`}
                        className="modal-toggle"
                      />
                      <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">
                            Category: {toys.toyName}
                          </h3>
                          <p className="py-4">
                            You've been selected for a chance to get one year of
                            subscription to use Wikipedia for free!
                          </p>
                          <div className="modal-action">
                            <label htmlFor={`my-modal-${i}`} className="btn">
                              Yay!
                            </label>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <button>delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>Seller</th>
                  <th>Toy Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Available Quantity</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyToys;
