import React from 'react'
import '../Style/home.css'
import pnglap from '../img/pnglap.png'
import li from '../img/li.png'
import git from '../img/git.png'

const Home = () => {
    return (
       
            <div className="HomeHolder">
    <div className="imgHolder" >
    
    <h1 className="qoute" >NOTING IS DIIFFICULT IT'S JUST UNFAMILIER</h1>
    
    
    
    
    
    <img alt="INTRODUCTION" className="laptop" src={pnglap}  />
    <div className="innerLap">
    <h3 >DEEPAK RAWAT</h3>
    <div className="btPack">
    <a  href="https://www.linkedin.com/in/deepak-rawat-engineer/" target="blank" className="linkedin"   ><img src={li} className="li"/></a>
    <a  href="https://github.com/deepak5741" target="_blank" className="github"  > <img className="git" src={git} /> </a>
    </div>
    
    </div>
    
    
    </div>
              
              {/* <img src={laptop} alt="My laptop" /> */}
            </div>
        )
    
}

export default Home
