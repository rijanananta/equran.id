import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SurahDetail() {
  const { nomor } = useParams();
  const [surah, setSurah] = useState(null);

  useEffect(() => {
    fetch(`https://equran.id/api/v2/surat/${nomor}`)
      .then((res) => res.json())
      .then((data) => setSurah(data.data));
  }, [nomor]);

  if (!surah) return <p>Loading...</p>;

  return (
    <div>
      <Link to="/">← Kembali ke daftar</Link>
      <h2>{surah.namaLatin} ({surah.nama})</h2>
      <p>Arti: {surah.arti}</p>
      <hr />
      {surah.ayat.map((a) => (
        <div key={a.nomorAyat}>
          <p><strong>{a.nomorAyat}</strong></p>
          <p style={{ fontSize: '22px' }}>{a.teksArab}</p>
          <p>{a.teksLatin}</p>
          <p><em>{a.teksIndonesia}</em></p>
          <hr />
        </div>
      ))}
    </div>
  );
}
