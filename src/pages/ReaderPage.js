import React, { useEffect, useState } from "react";
import Aside from "../component/Aside";
import Heading from "../component/Heading";
import Loading from "../component/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getFetchAudio, audioStart, addAudioFav } from "../reducer/audioSlice";
import { useParams } from "react-router-dom";
import SingleReader from "../component/SingleReader";
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
                    <SingleReader key={read.id} {...read} active={active}/>
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
