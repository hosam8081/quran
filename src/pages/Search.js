import React, { useState, useEffect, useRef } from "react";
import Aside from "../component/Aside";
import Loading from "../component/Loading";
import Heading from "../component/Heading";

const Search = () => {
  const [searchWord, setSearchWord] = useState([]);
  const [val, setVal] = useState("الصبر");
  const [loading, setLoading] = useState(true);
  const searchVal = useRef("");
  const fetchWord = async () => {
    try {
      setLoading(true);
      const resWord = await fetch(
        `https://quran-search-api.herokuapp.com/api/search/${val}`
      );
      const getWords = await resWord.json();

      const words = getWords.data.map((word) => {
        const { juz, surah, audio, verse, numberInSurah } = word;
        return {
          juz,
          surah,
          audio,
          verse,
          number: numberInSurah,
        };
      });

      setSearchWord(words);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVal(searchVal.current.value);
  };

  useEffect(() => {
    fetchWord();
  }, [val]);
  return (
    <section className="search spad">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9 bg-section mt-5 p-3">
            <div className="section-title d-flex justify-content-between align-items-center">
              <div>
                <h4 className="title">البحث</h4>
              </div>
            </div>
            <form className="row" onSubmit={handleSubmit}>
              <input
                className=" custom-select"
                type="text"
                ref={searchVal}
                placeholder="بحث بحرف | كلمة | جملة "
              />
            </form>

            <ul>
              {loading ? (
                <Loading />
              ) : searchWord.length < 1 ? (
                "لا يوجد نتائج"
              ) : (
                searchWord.map((word, index) => {
                  return (
                    <li className="card" key={index}>
                      <span className="p">{word.verse}</span>
                      <span className="number-icon">{index + 1}</span>
                      <div className="pt-3 text-muted">
                        - سورة ({word.surah}) | الاية ({word.number})
                      </div>
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

export default Search;
