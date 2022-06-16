import React, { useEffect, useState } from "react";
import Heading from "../component/Heading";
import Loading from "../component/Loading";
import Aside from "../component/Aside";
import axios from "axios";
import { useParams } from "react-router-dom";
const AhadethPage = () => {
  const [hadith, setHadith] = useState();
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  let getAhadeth = async () => {
    try {
      let response = await axios(
        `https://api.hadith.sutanlab.id/books/${id}?range=1-50`
      );
      setHadith(response.data.data.hadiths);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAhadeth();
  }, []);
  return (
    <section className="smag">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9 bg-section py-2 mt-5">
            <div className="section-title d-flex justify-content-between align-items-center">
              <div>
                <h4 className="title">الاحاديث</h4>
              </div>
            </div>
            <ul className="py-3">
              {loading ? (
                <Loading />
              ) : (
                hadith.map((item, index) => {
                  return (
                    <li key={item.number} className="card ahadeth-item p">
                      {item.arab}
                      <span className="number-icon">{index + 1}</span>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
          <Aside />
        </div>
      </div>
    </section>
  );
};

export default AhadethPage;
