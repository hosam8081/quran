import React from "react";
import { FaPlay, FaDownload, FaHeart } from "react-icons/fa";
import { audioStart, addAudioFav } from "../reducer/audioSlice";
import { useDispatch } from "react-redux";

const SingleReader = ({id, name, url, active}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div key={id} className={active ? "col-12" : "col-lg-6"}>
        <div className="card scale">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button
                className="btn-play"
                onClick={() =>
                  dispatch(audioStart({ url: url, name: name }))
                }
              >
                <FaPlay />
              </button>
              <span className="mx-1">
                {id.length === 1
                  ? `00${id}`
                  : id.length === 2
                  ? `0${id}`
                  : `${id}`}
              </span>
              <span className="text-muted"> {name}</span>
            </div>
            <div>
              <a className="option-btn" href={url}>
                <FaDownload />
              </a>
              <button
                className="option-btn"
                onClick={() =>
                  dispatch(
                    addAudioFav({
                      url: url,
                      name: name,
                      id,
                    })
                  )
                }
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleReader;
