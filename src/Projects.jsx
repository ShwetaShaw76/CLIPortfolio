import './Project.css'
import { useEffect, useState } from 'react'

const ProjectLinks= [
    "https://cleanit-crew.vercel.app/",
    "https://khushi123.itch.io/corruption-lab-web",
    "https://gaming-ball.vercel.app/",
    "https://mystical-forest.vercel.app/",
    "https://rhino-ride.vercel.app/",
    "https://turquoise-os.vercel.app/"
]

const githubLinks= [
    "https://github.com/ShwetaShaw76/CleanitCrew",
    "https://github.com/ShwetaShaw76/CorruptionLab",
    "https://github.com/ShwetaShaw76/GamingBall",
    "https://github.com/ShwetaShaw76/mystical-forest",
    "https://github.com/ShwetaShaw76/RhinoRide",
    "https://github.com/ShwetaShaw76/TurquoiseOs"
]

const ProjectNames = [
    "Cleanit Crew",
    "Corruption Lab",
    "Gaming Ball",
    "Mystical Forest",
    "Rhino Ride",
    "Turquoise OS"
]

function Projects(){
    return(
        <>
            <div className="prjct">
            <h1 className="hd2">My Projects</h1>
            <div className="cards">
                
            </div>
            </div>
        </>
    )
}

export default Projects