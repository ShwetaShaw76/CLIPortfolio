import './CLI.css'
import {useState,useRef} from 'react'

const commands = [
    "help me",
    "shame on you",
    "worst day",
    "best pokemon card",
    "favorite pokemon",
]

const responses = [
    "list of commands: help me, shame on you, worst day, best pokemon card, favorite pokemon",
    "I lost to a bug trainer in viridian forest during my pokemon fire red playthrough because my squirtle was poisoned by one of his weedles :(",
    "On my first playthorugh of fire red I took charmander as first pokemon because I wanted Charizard so bad but I got swept bt brock 7 times before getting swept by misty like 13 times.Her starmie is a monster",
    "I got a calyrex ice rider card and it is so cool. I was dumbfounded when I got it",
    "If you didn't already get it yeah my fav pokemon is togepi :)"
]

function CLI(){
    const [command,setCommand]=useState("")
    const [output,setOutput] = useState("")
    const inputRef=useRef(null);

    const handleKeyDown=(e)=>{
        if(e.key==="Enter"){
            const index=commands.indexOf(command)
            setCommand("")
            setOutput(responses[index]);
        }
    }
    return(
        <>
        <div className="cli">
            <h1 className="hdd">CLI Interface</h1>
            <p>use "help me" command for the list of commands</p>
                <div className="txtArea">
                    <div className="start">user@cli:~$ </div>
                    <div className="input">{command}</div>
                    <div className="cursor">_</div>

                    <input type="text" className="hiddenInput" ref={inputRef} 
                    value={command} onChange={(e)=>setCommand(e.target.value)} onKeyDown={handleKeyDown} spellCheck="false"/>
                    <div className="res">{output}</div>
                </div>
        </div>
        </>
    )
}

export default CLI 