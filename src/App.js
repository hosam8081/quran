import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SurahPage from "./pages/SurahPage";
import Reciters from "./pages/Reciters";
import ReaderPage from "./pages/ReaderPage";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import Ahadeth from "./pages/Ahadeth";
import Search from "./pages/Search";
import AhadethPage from "./pages/AhadethPage";
function App() {
  const { start } = useSelector((state) => state.audio);
  const audioChange = useRef();
  useEffect(() => {
    if (audioChange.current) {
      audioChange.current.pause();
      audioChange.current.load();
      audioChange.current.play();
    }
  }, [start]);
  return (
    <Router>
      
        <Navbar />
        <Routes>
          <Route exact path="/quran" element={<Home />}></Route>
          <Route path="/quran/reciters" element={<Reciters />}></Route>
          <Route path="/quran/Ahadeth" element={<Ahadeth />}></Route>
          <Route path="/quran/Search" element={<Search />}></Route>
          <Route path="/quran/reciters/reader/:id" element={<ReaderPage />}></Route>
          <Route path="/quran/surah/:id" element={<SurahPage />}></Route>
          <Route path="/quran/Ahadeth/:id" element={<AhadethPage />}></Route>
        </Routes>
        {start && (
          <audio controls autoPlay key={start} ref={audioChange}>
            <source src={start} type="audio/ogg" />
            <source src={start} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      
    </Router>
  );
}

export default App;
