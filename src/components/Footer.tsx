import React, { FC, useEffect, useState } from 'react'; 
import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react";

export function Footer(){

    return( 
    <footer className="bg-zinc-900 border-t border-zinc-700 p-6 flex items-center justify-between">
    <div className='flex items-center gap-3'>
      < img src='https://m.media-amazon.com/images/I/91fkXglVa3L._SL1500_.jpg' width={48} height={48} alt='Capa do álbum Wasting Light da Banda Foo Fighters' />
      <div className='flex flex-col '>
        <strong className='font-normal'>Rope</strong>
        <span className='text-xs text-zinc-400'>Foo Fighters</span>
      </div>
    </div>
    <div className='flex flex-col items-center gap-2'>
      <div className='flex items-center gap-6'>
        <Shuffle size={20} className='text-zinc-200'/>
        <SkipBack size={20} className='text-zinc-200'/>
        <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black '>
            <Play />
          </button>
        <SkipForward size={20} className='text-zinc-200'/>
        <Repeat size={20} className='text-zinc-200'/>
      </div>
      <div className='flex items-center gap-2'>
        <span className='text-xs text-zinc-500'> 0:31</span>
        <div className='h-1 rounded-full w-96 bg-zinc-600'>
         <div className='h-1 rounded-full w-40 bg-zinc-200'></div>
        </div>
        <span className='text-xs text-zinc-500'> 2:14</span>
      </div>
    </div>
    <div className='flex items-center gap-4'>
      <Mic2 size={20}/>
      <LayoutList size={20}/>
      <Laptop2 size={20}/>
      <div className='flex items-center gap-2'>
        <Volume size={20}/>
        <div className='h-1 rounded-full w-24 bg-zinc-600'>
         <div className='h-1 rounded-full w-10 bg-zinc-200'></div>
        </div>
      </div>
      <Maximize2 size={20}/>
    </div>
  </footer>)
}