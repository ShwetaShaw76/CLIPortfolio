import './Project.css'
import { useState } from 'react'
const ProjectImages = [
    '/projectImages/CleanItCrew.png',
    '/projectImages/CorruptionLab.png',
    '/projectImages/GamingBall.png',
    '/projectImages/MysticalForest.png',
    '/projectImages/RhinoRide.png'
]


const ProjectLinks= [
    "https://cleanit-crew.vercel.app/",
    "https://khushi123.itch.io/corruption-lab-web",
    "https://gaming-ball.vercel.app/",
    "https://mystical-forest.vercel.app/",
    "https://rhino-ride.vercel.app/"
]

const githubLinks= [
    "https://github.com/ShwetaShaw76/CleanitCrew",
    "https://github.com/ShwetaShaw76/CorruptionLab",
    "https://github.com/ShwetaShaw76/GamingBall",
    "https://github.com/ShwetaShaw76/mystical-forest",
    "https://github.com/ShwetaShaw76/RhinoRide"
]

const ProjectNames = [
    "Cleanit Crew",
    "Corruption Lab",
    "Gaming Ball",
    "Mystical Forest",
    "Rhino Ride"
]

function Projects(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <div className="prjct">
            <h1 className="hd2">My Projects</h1>
            <div className={`envelope ${isOpen ? 'is-open' : ''}`}>

                <div className="mailBack"></div>
            <div className="cards">
                {ProjectImages.map((img,index)=>(
                    <div className="card" id={index} key={index}>
                        <a href={ProjectLinks[index]} target="_blank">
                        <img src={img} alt={ProjectNames[index]} className="card-img"/>
                        </a>
                        <a href={githubLinks[index]} target="_blank">
                        <h2 className="card-title">{ProjectNames[index]}</h2>
                        </a>
                    </div>
                ))}

                </div>
                <div className="mail-front" onClick={()=>setIsOpen(!isOpen)}>
                <span className="mail-t"></span>
                <span className="mail-b"></span>
                <span className="mail-r"></span>
                <span className="mail-l"></span>
                </div>
            </div>
            </div>
            
        </>
    )
}

export default Projects