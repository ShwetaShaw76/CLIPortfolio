
import './App.css'
import { useEffect, useState } from 'react'

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
        <p><div id="wht">//</div> I am a <div id='age'>16</div> years old <div id='grn'>front-end web developer</div> and am interested in <div id='grn'>game-dev</div> <div id="wht">//</div></p>
        <p><div id="wht">/*</div> I am from India and my favourite late night snack is <div id='yellow'>cheese-pizza</div> <div id="wht">*/</div></p>
        <p><div id="wht">///</div> I am always eager to learn something new and a huge <div id='red'>#pokemon fan</div> <div id="wht">///</div></p>
      </div>
  )
}

function App() {

  return (
    <>
      <Header></Header>
      <Contents></Contents>
    </>
  )
}

export default App
