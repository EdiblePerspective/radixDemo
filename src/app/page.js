"use client"
//import catImg from '../../public/catImg.jpg'//
import * as Switch from '@radix-ui/react-switch';
import * as Progress from '@radix-ui/react-progress';
import Cursor from './components/Cursor'
import "./globals.css";
import SliderComp from './components/Slider'
import { useState, useEffect} from 'react';
import Image from 'next/image';
export default function Home() {
  const [light, setLight] = useState(true)
  const [cat, setCat]=useState(false)
  const [progress, setProgress] = useState(0);
  const [hue, setHue] = useState(0);
  const catStyle= { 
    filter: `hue-rotate(${hue}deg)`,
    objectFit:'cover',
    position:'absolute',
    zIndex:'-10' }
  return (
  <>

<body className={cat===true?'bg-none'//`cat backdrop-hue-rotate-${hue} hue-rotate-[${hue}deg] `//
:(light===true?'bg-white':'bg-black')} >
{cat===true?<Image fill={true} src='/catImg.jpg' alt="Cat-Image" style={catStyle}/>:null}
<div>
<form>
<Switch.Root className='SwitchRoot' 
onClick={()=>light===(true)?setLight((light)=>false)
  &setProgress((progress)=>progress+50)
  &console.log(hue):
setLight((light)=>true)  
&setCat((cat)=>true)
&setProgress((progress)=>progress+50)}>
  <Switch.Thumb className='SwitchThumb' />
</Switch.Root>
</form>
</div>
<div>
<SliderComp onValueCommit={()=>setHue((hue)=> (Math.floor(Math.random() * (360 - 1) + 1)))}/>
</div>
<div>
<Progress.Root className="ProgressRoot" value={progress}>
  <Progress.Indicator
        className="ProgressIndicator"
        style={{ transform: `translateX(-${100 - progress}%)` }}/>
</Progress.Root>
</div>
{cat===false?<Cursor/>:null}


</body>
</>
  );
}
