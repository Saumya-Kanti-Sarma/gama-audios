import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Jsx/Home.jsx'
import Contact from './pages/Jsx/Contact.jsx'
import About from './pages/Jsx/About.jsx'
import Blogs from './pages/Jsx/Blogs.jsx'
const App = () => {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contacts",
      element: <Contact />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "/video_downloads",
      element: "Work under pogress...",
    },
  ])

  return (
    <>
      <RouterProvider router={route} />
      <Outlet />
    </>
  )
}

export default App
