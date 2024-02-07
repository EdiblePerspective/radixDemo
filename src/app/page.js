"use client"
import * as Switch from '@radix-ui/react-switch';
import Cursor from './components/Cursor'
import "./globals.css";

export default function Home() {
  
  return (
  <>
<div>
<Switch.Root className='SwitchRoot'>
  <Switch.Thumb className='SwitchThumb' />
</Switch.Root>
</div>
<Cursor/>
  </>
  );
}
