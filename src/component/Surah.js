import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onActive, ofActive } from "../reducer/surahSlice";
import Heading from "./Heading";
import SingleSurah from "./SingleSurah";

let editdata = [
  { id: 1, name: "سُورَةُ ٱلْفَاتِحَةِ", ayahs: 7 },
  { id: 2, name: "سُورَةُ البَقَرَةِ", ayahs: 286 },
  { id: 3, name: "سُورَةُ آلِ عِمۡرَانَ", ayahs: 200 },
  { id: 4, name: "سُورَةُ النِّسَاءِ", ayahs: 176 },
  { id: 5, name: "سُورَةُ المَائـِدَةِ", ayahs: 120 },
  { id: 6, name: "سُورَةُ الأَنۡعَامِ", ayahs: 165 },
  { id: 7, name: "سُورَةُ الأَعۡرَافِ", ayahs: 206 },
  { id: 8, name: "سُورَةُ الأَنفَالِ", ayahs: 75 },
  { id: 9, name: "سُورَةُ التَّوۡبَةِ", ayahs: 129 },
  { id: 10, name: "سُورَةُ يُونُسَ", ayahs: 109 },
  { id: 11, name: "سُورَةُ هُودٍ", ayahs: 123 },
  { id: 12, name: "سُورَةُ يُوسُفَ", ayahs: 111 },
  { id: 13, name: "سُورَةُ الرَّعۡدِ", ayahs: 43 },
  { id: 14, name: "سُورَةُ إِبۡرَاهِيمَ", ayahs: 52 },
  { id: 15, name: "سُورَةُ الحِجۡرِ", ayahs: 99 },
  { id: 16, name: "سُورَةُ النَّحۡلِ", ayahs: 128 },
  { id: 17, name: "سُورَةُ الإِسۡرَاءِ", ayahs: 111 },
  { id: 18, name: "سُورَةُ الكَهۡفِ", ayahs: 110 },
  { id: 19, name: "سُورَةُ مَرۡيَمَ", ayahs: 98 },
  { id: 20, name: "سُورَةُ طه", ayahs: 135 },
  { id: 21, name: "سُورَةُ الأَنبِيَاءِ", ayahs: 112 },
  { id: 22, name: "سُورَةُ الحَجِّ", ayahs: 78 },
  { id: 23, name: "سُورَةُ المُؤۡمِنُونَ", ayahs: 118 },
  { id: 24, name: "سُورَةُ النُّورِ", ayahs: 64 },
  { id: 25, name: "سُورَةُ الفُرۡقَانِ", ayahs: 77 },
  { id: 26, name: "سُورَةُ الشُّعَرَاءِ", ayahs: 227 },
  { id: 27, name: "سُورَةُ النَّمۡلِ", ayahs: 93 },
  { id: 28, name: "سُورَةُ القَصَصِ", ayahs: 88 },
  { id: 29, name: "سُورَةُ العَنكَبُوتِ", ayahs: 69 },
  { id: 30, name: "سُورَةُ الرُّومِ", ayahs: 60 },
  { id: 31, name: "سُورَةُ لُقۡمَانَ", ayahs: 34 },
  { id: 32, name: "سُورَةُ السَّجۡدَةِ", ayahs: 30 },
  { id: 33, name: "سُورَةُ الأَحۡزَابِ", ayahs: 73 },
  { id: 34, name: "سُورَةُ سَبَإٍ", ayahs: 54 },
  { id: 35, name: "سُورَةُ فَاطِرٍ", ayahs: 45 },
  { id: 36, name: "سُورَةُ يسٓ", ayahs: 83 },
  { id: 37, name: "سُورَةُ الصَّافَّاتِ", ayahs: 182 },
  { id: 38, name: "سُورَةُ صٓ", ayahs: 88 },
  { id: 39, name: "سُورَةُ الزُّمَرِ", ayahs: 75 },
  { id: 40, name: "سُورَةُ غَافِرٍ", ayahs: 85 },
  { id: 41, name: "سُورَةُ فُصِّلَتۡ", ayahs: 54 },
  { id: 42, name: "سُورَةُ الشُّورَىٰ", ayahs: 53 },
  { id: 43, name: "سُورَةُ الزُّخۡرُفِ", ayahs: 89 },
  { id: 44, name: "سُورَةُ الدُّخَانِ", ayahs: 59 },
  { id: 45, name: "سُورَةُ الجَاثِيَةِ", ayahs: 37 },
  { id: 46, name: "سُورَةُ الأَحۡقَافِ", ayahs: 35 },
  { id: 47, name: "سُورَةُ مُحَمَّدٍ", ayahs: 38 },
  { id: 48, name: "سُورَةُ الفَتۡحِ", ayahs: 29 },
  { id: 49, name: "سُورَةُ الحُجُرَاتِ", ayahs: 18 },
  { id: 50, name: "سُورَةُ قٓ", ayahs: 45 },
  { id: 51, name: "سُورَةُ الذَّارِيَاتِ", ayahs: 60 },
  { id: 52, name: "سُورَةُ الطُّورِ", ayahs: 49 },
  { id: 53, name: "سُورَةُ النَّجۡمِ", ayahs: 62 },
  { id: 54, name: "سُورَةُ القَمَرِ", ayahs: 55 },
  { id: 55, name: "سُورَةُ الرَّحۡمَٰن", ayahs: 78 },
  { id: 56, name: "سُورَةُ الوَاقِعَةِ", ayahs: 96 },
  { id: 57, name: "سُورَةُ الحَدِيدِ", ayahs: 29 },
  { id: 58, name: "سُورَةُ المُجَادلَةِ", ayahs: 22 },
  { id: 59, name: "سُورَةُ الحَشۡرِ", ayahs: 24 },
  { id: 60, name: "سُورَةُ المُمۡتَحنَةِ", ayahs: 13 },
  { id: 61, name: "سُورَةُ الصَّفِّ", ayahs: 14 },
  { id: 62, name: "سُورَةُ الجُمُعَةِ", ayahs: 11 },
  { id: 63, name: "سُورَةُ المُنَافِقُونَ", ayahs: 11 },
  { id: 64, name: "سُورَةُ التَّغَابُنِ", ayahs: 18 },
  { id: 65, name: "سُورَةُ الطَّلَاقِ", ayahs: 12 },
  { id: 66, name: "سُورَةُ التَّحۡرِيمِ", ayahs: 12 },
  { id: 67, name: "سُورَةُ المُلۡكِ", ayahs: 30 },
  { id: 68, name: "سُورَةُ القَلَمِ", ayahs: 52 },
  { id: 69, name: "سُورَةُ الحَاقَّةِ", ayahs: 52 },
  { id: 70, name: "سُورَةُ المَعَارِجِ", ayahs: 44 },
  { id: 71, name: "سُورَةُ نُوحٍ", ayahs: 28 },
  { id: 72, name: "سُورَةُ الجِنِّ", ayahs: 28 },
  { id: 73, name: "سُورَةُ المُزَّمِّلِ", ayahs: 20 },
  { id: 74, name: "سُورَةُ المُدَّثِّرِ", ayahs: 56 },
  { id: 75, name: "سُورَةُ القِيَامَةِ", ayahs: 40 },
  { id: 76, name: "سُورَةُ الإِنسَانِ", ayahs: 31 },
  { id: 77, name: "سُورَةُ المُرۡسَلَاتِ", ayahs: 50 },
  { id: 78, name: "سُورَةُ النَّبَإِ", ayahs: 40 },
  { id: 79, name: "سُورَةُ النَّازِعَاتِ", ayahs: 46 },
  { id: 80, name: "سُورَةُ عَبَسَ", ayahs: 42 },
  { id: 81, name: "سُورَةُ التَّكۡوِيرِ", ayahs: 29 },
  { id: 82, name: "سُورَةُ الانفِطَارِ", ayahs: 19 },
  { id: 83, name: "سُورَةُ المُطَفِّفِينَ", ayahs: 36 },
  { id: 84, name: "سُورَةُ الانشِقَاقِ", ayahs: 25 },
  { id: 85, name: "سُورَةُ البُرُوجِ", ayahs: 22 },
  { id: 86, name: "سُورَةُ الطَّارِقِ", ayahs: 17 },
  { id: 87, name: "سُورَةُ الأَعۡلَىٰ", ayahs: 19 },
  { id: 88, name: "سُورَةُ الغَاشِيَةِ", ayahs: 26 },
  { id: 89, name: "سُورَةُ الفَجۡرِ", ayahs: 30 },
  { id: 90, name: "سُورَةُ البَلَدِ", ayahs: 20 },
  { id: 91, name: "سُورَةُ الشَّمۡسِ", ayahs: 15 },
  { id: 92, name: "سُورَةُ اللَّيۡلِ", ayahs: 21 },
  { id: 93, name: "سُورَةُ الضُّحَىٰ", ayahs: 11 },
  { id: 94, name: "سُورَةُ الشَّرۡحِ", ayahs: 8 },
  { id: 95, name: "سُورَةُ التِّينِ", ayahs: 8 },
  { id: 96, name: "سُورَةُ العَلَقِ", ayahs: 19 },
  { id: 97, name: "سُورَةُ القَدۡرِ", ayahs: 5 },
  { id: 98, name: "سُورَةُ البَيِّنَةِ", ayahs: 8 },
  { id: 99, name: "سُورَةُ الزَّلۡزَلَةِ", ayahs: 8 },
  { id: 100, name: "سُورَةُ العَادِيَاتِ", ayahs: 11 },
  { id: 101, name: "سُورَةُ القَارِعَةِ", ayahs: 11 },
  { id: 102, name: "سُورَةُ التَّكَاثُرِ", ayahs: 8 },
  { id: 103, name: "سُورَةُ العَصۡرِ", ayahs: 3 },
  { id: 104, name: "سُورَةُ الهُمَزَةِ", ayahs: 9 },
  { id: 105, name: "سُورَةُ الفِيلِ", ayahs: 5 },
  { id: 106, name: "سُورَةُ قُرَيۡشٍ", ayahs: 4 },
  { id: 107, name: "سُورَةُ المَاعُونِ", ayahs: 7 },
  { id: 108, name: "سُورَةُ الكَوۡثَرِ", ayahs: 3 },
  { id: 109, name: "سُورَةُ الكَافِرُونَ", ayahs: 6 },
  { id: 110, name: "سُورَةُ النَّصۡرِ", ayahs: 3 },
  { id: 111, name: "سُورَةُ المَسَدِ", ayahs: 5 },
  { id: 112, name: "سُورَةُ الإِخۡلَاصِ", ayahs: 4 },
  { id: 113, name: "سُورَةُ الفَلَقِ", ayahs: 5 },
  { id: 114, name: "سُورَةُ النَّاسِ", ayahs: 6 },
];

const Surah = () => {
  const {isActive} = useSelector(state => state.surah)
  const dispatch = useDispatch();
  return (
    <div className="col-lg-9 surah-section mt-5">
      <Heading
        name="القرآن الكريم"
        onActive={() => dispatch(onActive())}
        ofActive={() => dispatch(ofActive())}
        isActive={isActive}
      />
      <div className="row">
        {editdata.map((surah) => (
          <SingleSurah key={surah.id} {...surah} />
        ))}
      </div>
    </div>
  );
};

export default Surah;
