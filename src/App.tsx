import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import tauriicon from '../public/128x128.png';

import { Nav } from './components/Nav/Nav';

const App = () => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: "hidden" /* Hide scrollbars */
    }}
    onContextMenu={
      (click) => {
        click.preventDefault()
      }
    }
  >
    <Nav />
    <main
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        gap: '1rem',
        background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
      }}
    >
      <img src={tauriicon} className=" hover:animate-spin" />
      <h1 className='animate-bounce'> 轻巧的 <span className='text-yellow-200 text-xl'>Tauri</span> 迅猛的 <span className=' text-green-400 text-xl'>SWC</span> 美观的 <span className=' text-blue-400 text-xl'>React</span> 和便捷的 <span className=' text-xl text-blue-500'>Tailwind</span></h1>
      <h3>现在享受你的Web时光吧~</h3>
    </main>
    <footer>
      <ul className='bg-black justify-center p-4'>
        <li className='text-white hover:bg-slate-600 p-2 rounded-sm'  ><a href="https://tauri.app/v1/guides/">Tauri Guide</a></li>
        <li className='text-white hover:bg-slate-600 p-2 rounded-sm'  ><a href="https://reactjs.org/docs/hello-world.html">React Guide</a></li>
        <li className='text-white hover:bg-slate-600 p-2 rounded-sm'  ><a href="https://basarat.gitbook.io/typescript/getting-started">Typescript Online book</a></li>
        <li className='text-white hover:bg-slate-600 p-2 rounded-sm'  ><a href="https://swc-project.github.io/docs/usage-swc-loader">Swc-loader config doc</a></li>
        <li className='text-white hover:bg-slate-600 p-2 rounded-sm'  ><a href='https://https://tailwindcss.com/docs/'>Tailwind config doc</a></li>
      </ul>
    </footer>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
