import React, { useContext } from "react";
import { FaBookOpen } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { audioLast } from "../reducer/audioSlice";
const Aside = () => {
  const { surahName, id } = useSelector((state) => state.surah);
  const { audioName, audioUrl } = useSelector((state) => state.audio);

  const dispatch = useDispatch();
  return (
    <div className="col-lg-3 mt-5">
      <aside className="aside">
        <div className="aside-head">
          <div className="row">
            <div className="col col-lg-4">
              <h2>القران الكريم</h2>
            </div>
            <div className="col col-lg-8 aside-icon">
              <FaBookOpen className="icon" />
            </div>
          </div>
        </div>
        <div className="aside-body">
          <div className="aside-item">
            <div className="d-flex justify-content-between">
              <div className="">
                <h3>اخر قراءة</h3>
                <Link className="btn" to={id && `/surah/${id}`}>{surahName}</Link>
              </div>
              <div className="">
                <FaBookOpen className="icon" />
              </div>
            </div>
          </div>
          <div className="aside-item">
            <div className="d-flex justify-content-between">
              <div className="">
                <h3>اخر استماع</h3>
                <button className="btn" onClick={() => dispatch(audioLast(audioUrl))}>
                  {audioName}
                </button>
              </div>
              <div className="">
                <FaBookOpen className="icon" />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
