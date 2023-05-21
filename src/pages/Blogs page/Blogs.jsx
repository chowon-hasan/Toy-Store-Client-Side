import React from "react";

const Blogs = () => {
  return (
    <section className="bg-slate-900 py-12">
      <div className="xl:container mx-auto">
        <div className="lg:w-1/2 mx-auto ">
          <h1 className="text-5xl font-semibold text-yellow-500 text-center mb-5 text-center">
            Welcome to Blogs Page
          </h1>
          <div className="border text-white p-5 my-8">
            <h1 className="text-yellow-500">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h1>
            <p className="my-3">
              An access token is like a special pass that a website or
              application gives a user when the user log in. It proves that the
              user who he says he is and allows the user to access certain parts
              of the website or app. It is almost a key that opens locked doors
              for the user. A refresh token is like a backup key that the user
              keeps in a safe place. When the old ones gets expired then it is
              used. Access tokens usually have a limited lifespan to ensure
              security, so when it expires, the user can use the refresh token
              to get a fresh access token without loging in again.
            </p>
          </div>
          <div className="border text-white p-5 my-8">
            <h1 className="text-yellow-500">
              Compare SQL and NoSQL databases?
            </h1>
            <p className="my-3">
              SQL databases always use a model with tables, rows, and columns
              which are used to store and manage all the data it has. it is
              reliable and well decorated for applications with data stuctures.
              besides it is very easy to use and to carry NoSQL databases is not
              like SQL databases, it doesnt use tables , rows, columns or
              anything like this, it is totally different from that, it doesnt
              rely on predefined schemes, it is much easier than SQL databases
              to use. it provides the freedom to choose the interface a
              developer needs.
            </p>
          </div>
          <div className="border text-white p-5 my-8">
            <h1 className="text-yellow-500">
              What is express js? And What is Next JS ?
            </h1>
            <p className="my-3">
              Express.js is a worldwide popular and famous lightweight framework
              for Node.js, it has an unique ecosystem of plugins and middleware
              which basiclly offer additional features and extending its
              capabilities. it always handles HTTP requests and responses and
              manages for application-level functionalities. On the other hand,
              Next.js is a powerful framework for building server-rendered react
              applications. It is basically used to enhance the development
              experience and optimize the performance of React Applications. it
              helps the developer build a seo-friendly applications.
            </p>
          </div>
          <div className="border text-white p-5 my-8">
            <h1 className="text-yellow-500">
              What is MongoDB aggregate and how does it work ?
            </h1>
            <p className="my-3">
              MongoDB aggregate framework is a feature which helps enable
              advanced data analysis and transformation operations on MongoDB
              collections.it allows you to perform complex operations on your
              data, manipulate and transform it, and obtain meaningful insights
              from your MongoDB collections. By constructing a pipeline of
              stages, you can perform a wide range of operations on the data,
              allowing for complex computations, data aggregation, and flexible
              data manipulation. It is a powerful tool for extracting meaningful
              insights from your data stored in MongoDB.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
