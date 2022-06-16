import React from "react";
import SingleAhadeth from "../component/SingleAhadeth"
import Aside from '../component/Aside'
const Ahadeth = () => {
  return (
    <section className="spad">
      <div className="container-fluid">
        <div className="row">
          <SingleAhadeth />
          <Aside />
        </div>
      </div>
    </section>
  );
};

export default Ahadeth;
