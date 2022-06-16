import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFetchSurah } from "../reducer/surahSlice";
import Loading from "../component/Loading"
const SurahPage = () => {
  const { ayat, loading } = useSelector((state) => state.surah);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getFetchSurah(id));
  }, []);

  return (
    <section className="smag">
      <div className="container mt-5">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="ayah-heading">
              <h2>{ayat[0].surah}</h2>
            </div>
            {console.log(id)}
            <ul className="ayah-list">
              {ayat.map((item, index) => {
                return (
                  <li key={index} className="ayah-link">
                    {item.verse}
                    <span>({item.numberInSurah})</span>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default SurahPage;
