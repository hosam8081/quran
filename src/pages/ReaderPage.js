import React, { useEffect, useState } from "react";
import Aside from "../component/Aside";
import Heading from "../component/Heading";
import Loading from "../component/Loading";
import { FaPlay, FaDownload, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getFetchAudio, audioStart, addAudioFav } from "../reducer/audioSlice";
import { useParams } from "react-router-dom";

const ReaderPage = () => {
  const { reader, loading, start } = useSelector((state) => state.audio);
  const [active, setActive] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchAudio(id));
  }, []);

  return (
    <section className="spad">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9 bg-section py-2 mt-5">
            <Heading
              name="التلاوات القرانية"
              onActive={() => setActive(true)}
              ofActive={() => setActive(false)}
              isActive={active}
            />
            <div className="row">
              {loading ? (
                <Loading />
              ) : (
                reader.surasData.map((read) => {
                  return (
                    <div
                      key={read.id}
                      className={active ? "col-12" : "col-lg-6"}
                    >
                      <div className="card scale">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <button
                              className="btn-play"
                              onClick={() =>
                                dispatch(
                                  audioStart({ url: read.url, name: read.name })
                                )
                              }
                            >
                              <FaPlay />
                            </button>
                            <span className="mx-1">
                              {read.id.length === 1
                                ? `00${read.id}`
                                : read.id.length === 2
                                ? `0${read.id}`
                                : `${read.id}`}
                            </span>
                            <span className="text-muted"> {read.name}</span>
                          </div>
                          <div>
                            <a className="option-btn" href={read.url}>
                              <FaDownload />
                            </a>
                            <button
                              className="option-btn"
                              onClick={() =>
                                dispatch(
                                  addAudioFav({
                                    url: read.url,
                                    name: read.name,
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
                  );
                })
              )}
            </div>
          </div>
          <Aside />
        </div>
      </div>
    </section>
  );
};

export default ReaderPage;
