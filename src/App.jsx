
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
