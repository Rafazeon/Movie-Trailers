import React, { useState } from 'react'
import Routes from './Routes/index';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './sticky-footer.css';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import Capitao from './Assets/Capitao.jpg';
import { isBrowser, isMobile } from "react-device-detect";

export default function App() {
  const [background, setBackground] = useState(Capitao)
  const [video, setVideo] = useState("")
  const [toggle, setToggle] = useState(false)
  const [genre, setGenre] = useState(1)
  
  const body = () => document.getElementById('bodyStyle').style.overflow = 'hidden'

  const verifyDevice = () => { 
    
    if(isMobile && toggle) {
      return <Sidebar setGenre={setGenre} setVideo={setVideo} setToggle={setToggle} />
    }else if(isBrowser) {
      return <Sidebar setGenre={setGenre} setVideo={setVideo} />
    } 

  }

  return (
      <div className="App Site">
      <div>{!isMobile && body()}</div>
      {<Home bg={background} video={video} />}
      {verifyDevice()}
				<div className="Site-contentHeader">
					<div style={{zIndex: 100}} className="App-header">
						<Header video={video} setToggle={setToggle} toggle={toggle} />
					</div>
					<div style={{marginRight: 70}} className="main">
          {!video && <Routes setBg={setBackground} setVideo={setVideo} genre={genre} />}
						
					</div>
				</div>
				<Footer video={video} />
			</div>
  )
}
