import React from "react";
import Aside from "../component/Aside";
import Surah from '../component/Surah'
const Home = () => {
  return (
    <section className="spad">
      <div className="container-fluid">
        <div className="row">
          <Surah />
          <Aside />
        </div>
      </div>
    </section>
  );
};

export default Home;
