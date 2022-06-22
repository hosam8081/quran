import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
const SingleReader = ({id, name, server, rewaya, active, index}) => {
  return (
    <>
      <div key={id} className={`${active ? "col-12" : "col-sm-6 col-md-4"}`}>
        <div className="card scale">
          <div className="d-flex justify-content-between">
            <h6 className="heading">{<FaHeart />}</h6>
            <span className="ahadeth-number">{index + 1}</span>
          </div>
          <Link to={`/reciters/reader/${id}`}>
            <h6 className="heading">{name}</h6>
            <h6 className="ahadeth-p">{rewaya}</h6>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleReader;
