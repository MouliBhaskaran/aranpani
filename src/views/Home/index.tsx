import React from "react";
import Navbar from "../../shared/components/Navbar";
import { Link } from "react-router-dom";

const Home = (props: any) => {
  return (
    <>
      <div>
        <Navbar />
        <h1>Home</h1>
        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
