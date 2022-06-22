import React, { useEffect } from "react";
import Aside from "../component/Aside";
import SingleSurah from "../component/SingleSurah";
import SingleReader from "../component/SingleReader";
import { useSelector } from "react-redux";
const Favourate = () => {
  const { favSurah } = useSelector((state) => state.surah);
  let fetchData = () => {
    return JSON.parse(localStorage.getItem("favSurah")).map((surah) => (
      <SingleSurah key={surah.id} {...surah} />
    ));
  };
  useEffect(() => {
    fetchData();
  }, [favSurah]);
  return (
    <section className="spad">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9 surah-section mt-5">
            <div className="section-title d-flex justify-content-between align-items-center">
              <div>
                <h4 className="title">المفضلة</h4>
              </div>
            </div>
            <div className="row">
              <div>
                <h4 className="title mb-4">القران</h4>
              </div>
              {console.log(JSON.parse(localStorage.getItem("favSurah")))}
              {localStorage.getItem("favSurah") ? (
                fetchData()
              ) : (
                <div>لا يوجد</div>
              )}
            </div>
            <div className="row">
              <div>
                <h4 className="title mb-4">المفضلة من السور</h4>
              </div>
              {localStorage.getItem("audioFav") ? (
                JSON.parse(localStorage.getItem("audioFav")).map((ele) => {
                  return <SingleReader key={ele.url} {...ele} />;
                })
              ) : (
                <div>لا يوجد</div>
              )}
            </div>
          </div>
          <Aside />
        </div>
      </div>
    </section>
  );
};

export default Favourate;
