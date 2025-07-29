import React, { useEffect, useState } from 'react';
import "../Styles/Home.css";
import "../Styles/universal.css";
import axios from 'axios';
const HomeMain = () => {
  const [searchVal, setSearchVal] = useState('');
  const [downloadURL, setdownloadURL] = useState('');
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    if (!searchVal.trim()) return; // Prevents empty requests
    setLoading(true)

    const url = searchVal.replace("https://youtu.be/", "");
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}${url}&key=${import.meta.env.VITE_MY_API_KEY}`);
      //console.log("API Response:", response);
      const data = response.data;
      console.log(data);


    } catch (error) {
      console.error("Error fetching video data:", error);


    } finally {
      setLoading(false)

    }
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

      <div className='loader' style={{ display: loading ? "" : "none" }}>Loading...</div>
      <div className='search_text_res' style={{ display: downloadURL.length > 1 ? "" : "none" }} >
        <h2>song name</h2>
        <button>Download</button>
      </div>
      <br />
      <hr />
    </>
  );
};

export default HomeMain;
