import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { setSurahName, addToFav } from "../reducer/surahSlice";
const SingleSurah = ({id, name, ayahs}) => {
  const {isActive} = useSelector(state => state.surah)
  const dispatch = useDispatch();
  return (
    <div className={isActive ? `col-12` : `col-sm-6 col-md-4`}>
      <div className="card scale">
        <div className="d-flex justify-content-between">
          <button className="heading border-0" onClick={() => dispatch(addToFav({id, name, ayahs}))}>{<FaHeart />}</button>
          <span className="ahadeth-number">{id}</span>
        </div>
        <Link to={`/surah/${id}`} onClick={() => dispatch(setSurahName({name, id}))}>
          <h6 className="heading">{name}</h6>
          <h6 className="ahadeth-p">عدد الايات : {ayahs}</h6>
        </Link>
      </div>
    </div>
  );
};

export default SingleSurah;
