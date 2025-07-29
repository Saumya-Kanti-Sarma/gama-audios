# 🎵 Gama Audios
---

<img src="./assets/image.png" style="width:100%, max-width:1200px"/>

---

**Gama Audios** is a **Just-for-Fun** project that lets users download MP3s from any YouTube video. Built with **React** and **Express**, it leverages a **Puppeteer script** to automate MP3 downloads by interacting with a third-party MP3 conversion service.

 **Live:** [gama-audios.vercel.app](https://gama-audios.vercel.app)

---

## ⚙️ Tech Stack

- **Frontend**: React (Vite)
- **Backend**: Node.js + Express
- **Automation**: Puppeteer
- **Deployment**: Vercel (Frontend) & Render/Node (Backend)

---

## 🧠 How It Works

1. User pastes a YouTube video URL.
2. The frontend sends a request to the backend.
3. The backend runs a Puppeteer script that:
   - Opens a headless browser.
   - Navigates to a 3rd-party downlaoder conversion website.
   - Pastes the YouTube URL.
   - Waits for the conversion to complete.
   - Extracts the MP3 download link.
4. Sends back the download link to the frontend for user download.

---

## 📦 Folder Structure

```bash

Gama-Audios/
│
├── frontend/  # React frontend
│   └── ...
│
├── backend/   # Express backend with Puppeteer
│   └── ...
│
└── README.md

```


---

## 🛡️ Disclaimer

> This project is intended for educational and personal use only.  
> It uses a 3rd-party converter and does **not** host or serve any copyrighted content.  
---



## 💻 Setup Locally

### Clone the Repo
```bash
git clone https://github.com/Saumya-Kanti-Sarma/gama-audios.git
cd gama-audios
````

### Install Frontend

```bash
cd frontend
npm install
npm run dev
```

### Install Backend

```bash
cd backend
npm install
node index.js
```

Make sure to add your `.env` file with:

```env
PRIVATE_URI=https://example-ytmp3-downloader.com
```

---

## 🙌 Author

Made by [@Saumya-Kanti-Sarma](https://github.com/Saumya-Kanti-Sarma)  
If you like this project, consider giving it a ⭐️ on GitHub!
