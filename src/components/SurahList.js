import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SurahList() {
  const [surahList, setSurahList] = useState([]);

  useEffect(() => {
    fetch("https://equran.id/api/v2/surat")
      .then((res) => res.json())
      .then((data) => setSurahList(data.data));
  }, []);

  return (
    <div>
      <h1>Daftar Surah Al-Qur’an</h1>
      <ul>
        {surahList.map((surah) => (
          <li key={surah.nomor}>
            <Link to={`/surah/${surah.nomor}`}>
              {surah.nomor}. {surah.namaLatin} ({surah.arti})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
