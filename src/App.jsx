
import './App.css'
import { useEffect, useState } from 'react'
import togepi from './assets/togepi.svg'
import Projects from './Projects.jsx'

function Header(){

return(
    <>
      <header className='hd'>
        <p>About me</p>
        <p>Projects</p>
        <p>CLI Interface</p>
      </header>
    </>
  )
}

function Contents(){

  let [txt,setTxt]=useState("_");
  const wlcmTxt="Hi I'm Shweta"
  
  useEffect(()=>{

    const timer = setInterval(()=>{
      setTxt((prev)=>{
        const currentTxt=prev.endsWith("_")?prev.slice(0,-1):prev;

        if(currentTxt.length<wlcmTxt.length){
          const nxt = wlcmTxt[currentTxt.length]
          return currentTxt+nxt+"_";
        }

        clearInterval(timer);
        return currentTxt;
      })
    },200)

    return ()=>clearInterval(timer);
  },[])

  return(
    <div className="contents">
        <h1>{txt}</h1>
        <div className='txt1'><span id="wht">//</span> I am a <span id='age'>16</span> years old <span id='grn'>front-end web developer</span> and am interested in <span id='grn'>game-dev</span> <span id="wht">//</span></div>
        <div className='txt1'><span id="wht">/*</span> I am from India and my favourite late night snack is <span id='yellow'>cheese-pizza</span> <span id="wht">*/</span></div>
        <div className='txt1'><span id="wht">///</span> I am always eager to learn something new and a huge <span id='red'>#pokemon fan</span> <span id="wht">///</span></div>
      </div>
  )
}

function TogepiImg(){

  return(
    <div className="togepi-wrap">
      <img src={togepi} alt="Togepi" className="togepi-img"/>
    </div>
  )

}

function App() {

  return (
    <>
      <Header></Header>
      <div className="uppersec">
      <Contents></Contents>
      <TogepiImg />
      </div>
      <Projects></Projects>
    </>
  )
}

export default App
