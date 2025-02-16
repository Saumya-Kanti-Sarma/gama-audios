import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
      <div className="f-heading">
        <p>
          <b>|| Created: July 12 • 2024 ||</b> <br />
          By Saumya Kanti Sarma As A project work for Educational Purpose.
        </p>
      </div>
      <div className="f-tools">
        <div>
          <p> Mp3 Downloaders</p>
          <ul>
            <li><Link to={"/gama_audios/"} style={{ textDecoration: "none", color: "whitesmoke" }} >YOUTUBE Mp3 Downloader</Link></li>
          </ul>
        </div>
        <div>
          <p> Mp4 Downloaders</p>
          <ul>
            <li><Link to={"/gama_audios/video_downloads"} style={{ textDecoration: "none", color: "whitesmoke" }} >YOUTUBE VIDEO Downloader</Link></li>
            <li><Link to={"/gama_audios/video_downloads"} style={{ textDecoration: "none", color: "whitesmoke" }} >INSTAGRAM VIDEO Downloader</Link></li>
            <li><Link to={"/gama_audios/video_downloads"} style={{ textDecoration: "none", color: "whitesmoke" }} >FACEBOOK VIDEO Downloader</Link></li>
            <li><Link to={"/gama_audios/video_downloads"} style={{ textDecoration: "none", color: "whitesmoke" }} >LINKDIN VIDEO Downloader</Link></li>
            <li><Link to={"/gama_audios/video_downloads"} style={{ textDecoration: "none", color: "whitesmoke" }} >TWITTER VIDEO Downloader</Link></li>
          </ul>
        </div>
        <div>
          <p> SHORT CONTENT Downloaders</p>
          <ul>
            <li>YOUTUBE SHORTS Downloader</li>
            <li>INSTAGRAM REELS Downloader</li>
            <li>FACEBOOK REELS Downloader</li>
          </ul>
        </div>
      </div>
      <br />
    </>
  )
}

export default Footer
