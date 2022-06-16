import React from "react";
import { FaBars, FaColumns } from "react-icons/fa";

const Heading = ({ name, isActive, onActive, ofActive}) => {
  return (
    <div className="section-title d-flex justify-content-between align-items-center">
      <div>
      <h4 className="title">{name}</h4>
      </div>
      <div>
        <button
          className={`btn btn-view ${isActive && "text-success"}`}
          onClick={onActive}
        >
          <FaBars />
        </button>
        <button
          className={`btn btn-view ${!isActive && "text-success"} `}
          onClick={ofActive}
        >
          <FaColumns />
        </button>
      </div>
    </div>
  );
};

export default Heading;
