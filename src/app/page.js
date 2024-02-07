"use client"
import * as Switch from '@radix-ui/react-switch';
import Cursor from './components/Cursor'
import "./globals.css";
import SliderComp from './components/Slider'
import ProgressBar from './components/Progress'
export default function Home() {
  
  return (
  <>
<div>
<Switch.Root className='SwitchRoot'>
  <Switch.Thumb className='SwitchThumb' />
</Switch.Root>
</div>
<div>
  <SliderComp/>
</div>
<div>
    <ProgressBar/>
</div>
<Cursor/>
  </>
  );
}
