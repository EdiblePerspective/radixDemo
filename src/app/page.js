"use client"
import * as Switch from '@radix-ui/react-switch';
import * as Progress from '@radix-ui/react-progress';
import Cursor from './components/Cursor'
import "./globals.css";
import SliderComp from './components/Slider'
import { useState, useEffect} from 'react';
export default function Home() {
  const [light, setLight] = useState(true)
  const [cat, setCat]=useState(false)
  const [progress, setProgress] = useState(0);
  return (
  <>

<body className={cat===true?`cat backdrop-hue-rotate-${SliderComp.props}`
:(light===true?'bg-white':'bg-black')} >
<div>
<form>
<Switch.Root className='SwitchRoot' 
onClick={()=>light===(true)?setLight((light)=>false)
  &setProgress((progress)=>progress+50):
setLight((light)=>true)  
&setCat((cat)=>true)
&setProgress((progress)=>progress+50)}>
  <Switch.Thumb className='SwitchThumb' />
</Switch.Root>
</form>
</div>
<div>
<SliderComp/>
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
