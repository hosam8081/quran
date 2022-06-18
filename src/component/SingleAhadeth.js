import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFetchAhadeth } from "../reducer/ahadethSlice";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import Heading from "./Heading";

const SingleAhadeth = () => {
  const [active, setActive] = useState(false);
  const arr = [
    "سنن ابو داوود",
    "سنن احمد",
    "سنن البخارى",
    "سنن الدارمى",
    "سنن ابن ماجه",
    "سنن مالك",
    "سنن مسلم",
    "سنن النسائى",
    "سنن الترمذى",
  ];
  const { loading, books } = useSelector((state) => state.ahadeth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchAhadeth());
  }, []);
  return (
    <div className="col-lg-9 bg-section mt-5 p-3">
      <Heading
        name="الكتب المتاحة"
        onActive={() => setActive(true)}
        ofActive={() => setActive(false)}
        isActive={active}
      />
      <div className="row">
        {loading ? (
          <Loading />
        ) : (
          books.map((book, index) => {
            const { available, id } = book;
            return (
              <Link
                key={id}
                to={`/quran/Ahadeth/${id}`}
                style={{ textDecoration: "none" }}
                className={active ? "col-12" : "col-sm-6 col-md-4"}
              >
                <div className="card scale">
                  <div className="d-flex justify-content-between">
                    <h6 className="heading">{arr[index]}</h6>
                    <span className="ahadeth-number">{index + 1}</span>
                  </div>
                  <p className="ahadeth-p">
                    الاحاديث المتاحة : <span>{available}</span>
                  </p>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SingleAhadeth;
