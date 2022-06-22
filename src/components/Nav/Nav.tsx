import './Nav.css';
import logo from '../../../public/logo192.png'
import React from 'react';

export function Nav() {
  return (
    <nav data-tauri-drag-region>
      <h2 className="btn"><img src={logo} /></h2>
      <ul>
        <li className='rounded-lg hover:text-white hover:bg-slate-500 p-2'>Home</li>
        <li className='rounded-lg hover:text-white hover:bg-slate-500 p-2'>About</li>
        <li className='rounded-lg hover:text-white hover:bg-slate-500 p-2'>Store</li>
        <li className='rounded-lg hover:text-white hover:bg-slate-500 p-2'>Team</li>
        <li className='rounded-lg hover:text-white hover:bg-slate-500 p-2'>Projects</li>
      </ul>
    </nav>
  );
}
