import React, { useEffect, useState } from 'react';
import "../Styles/Home.css";
import "../Styles/universal.css";
import axios from 'axios';
const HomeMain = () => {
  const [searchVal, setSearchVal] = useState('');
  const [musicData, setMusicData] = useState(null);
  const [displayLoading, setDisplayLoading] = useState("none");
  const [displayContent, setDisplayContent] = useState("block");

  const [title, setTitle] = useState("Title of the video");
  const [views, setViews] = useState("0");
  const [thumbnail, setThumbnail] = useState("/album.jpg");

  const [dlLink, setDlLink] = useState("");

  const fetchData = async () => {
    if (!searchVal.trim()) return; // Prevents empty requests

    setDisplayLoading("block");
    setDisplayContent("none");

    try {
      const response = await axios.get(
        'https://youtube-video-and-shorts-downloader1.p.rapidapi.com/api/getYTVideo',
        {
          params: { url: searchVal },
          headers: {
            'x-rapidapi-key': import.meta.env.VITE_MUSIC_KEY,
            'x-rapidapi-host': 'youtube-video-and-shorts-downloader1.p.rapidapi.com',
          },
        }
      );

      console.log("API Response:", response.data);
      setMusicData(response.data);
    } catch (error) {
      console.error("Error fetching video data:", error);
      setDisplayLoading("none");
      setDisplayContent("block");
    }

    try {
      const response = await axios.get(
        'https://youtube-mp310.p.rapidapi.com/download/mp3',
        {
          params: { url: searchVal },
          headers: {
            'x-rapidapi-key': import.meta.env.VITE_KEY,
            'x-rapidapi-host': 'youtube-mp310.p.rapidapi.com',
          },
        }
      );

      console.log("Download API Response:", response.data);
      setDlLink(response.data.downloadUrl);
    } catch (error) {
      console.error("Error fetching download link:", error);
    }

    setDisplayLoading("none");
    setDisplayContent("block");
  };

  useEffect(() => {
    if (musicData) {
      console.log("Updated musicData:", musicData);
      setThumbnail(musicData?.picture || "/album.jpg");
      setViews(musicData?.stats?.viewCount || "0");
      setTitle(musicData?.description || "No title available");
    }
  }, [musicData]);

  const formatViews = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B';
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
    if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
    return num;
  };

  return (
    <>
      <h1 className='home_heading'>
        Download your favourite songs in just <i>59sec</i>
      </h1>
      <p className='home_heading semiheading'><b>• With Gama Audios •</b></p>

      <div className="logo_and_text">
        <img src="/logo_.png" alt="logo" className='blacklogo home_logo' />
        <h2>Gama Audios</h2>
      </div>

      {/* SEARCH AREA */}
      <div className="home_search_area">
        <input
          type="url"
          placeholder='Paste the Youtube Video Link..'
          className="search_inp"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button className="search_btn" onClick={fetchData}>
          <img src="/search.svg" alt="search" />
        </button>
      </div>

      <div className='loader' style={{ display: displayLoading }}>Loading...</div>

      {/* SEARCH RESULTS */}
      <div className="search_results" style={{ display: displayContent }}>
        <div className="search_results_child">
          <div className="search_res_img">
            <img className='search-res_img_inner_img' src={thumbnail} alt="album" />
          </div>
          <div className="search_res_texts">
            <p className="search_text_res">Title: {title}</p>
            <p className="search_text_res">
              Views: {formatViews(views)}
              <button>
                <a href={dlLink}>Download</a>
              </button>
              <button>
                <a href={searchVal} target="_blank">Watch</a>
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
