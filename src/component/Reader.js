import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  getFetchReader,
  handleCheck,
  handleCheckOption,
} from "../reducer/readerSlice";
import Loading from "./Loading";
import SingleReciter from "./SingleReciter"
const Reader = () => {
  const [active, setActive] = useState(false);
  const { readers, loading, newData, info, option } = useSelector(
    (state) => state.reader
  );
  const unique = [
    "الكل",
    [...new Set(readers.map((reader) => reader.rewaya))],
  ].flat();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetchReader());
  }, []);

  return (
    <div className="col-lg-9 bg-section mt-5 p-3">
      <Heading
        name="التلاوات القرانية"
        onActive={() => setActive(true)}
        ofActive={() => setActive(false)}
        isActive={active}
      />
      <div className="row mb-4 align-items-center">
        <div className="col-8 col-sm-10 col-md-6">
          <input
            type="text"
            placeholder="ابحث باسم القاري"
            className="form-control mb-2"
            value={info}
            onChange={(e) => dispatch(handleCheck(e.target.value))}
          />
        </div>
        <div className="col-md-6 order-2 order-md-1">
          <select
            className="custom-select mr-sm-2"
            value={option}
            onChange={(e) => dispatch(handleCheckOption(e.target.value))}
          >
            <option placeholder="اختر الرواية | نوع المصحف" className="d-none">
              اختر الرواية | نوع المصحف
            </option>
            {unique.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row">
        {loading ? (
          <Loading />
        ) : newData.length < 1 ? (
          "لا يوجد اى نتائج"
        ) : (
          newData.map((reader, index) => {
            const { id, name, server, rewaya } = reader;
            return (
              <SingleReciter key={id} {...reader} active={active} index={index}/>
              
            );
          })
        )}
      </div>
    </div>
  );
};

export default Reader;
