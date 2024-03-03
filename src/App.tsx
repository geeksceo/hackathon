import logo from './logo.svg';
import './App.css';
import MenuComponent from './components/MenuComponent';
import { UIEventHandler, useEffect, useMemo, useState } from 'react';
import AboutComponent from './components/AboutComponent';

function App() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
          height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setPercent(Math.round((winScroll / height) * 100));
    }
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);



  return (
    <div className='w-full'>

      <div
        className="fixed inset-x-0 top-0 z-50 h-1 mt-0 rounded-full bg-indigo-500"
        style={{'width': `${percent}%`}}>
      </div>
      <MenuComponent />

      <AboutComponent />


      <div className='w-14 h-14 cursor-pointer absolute right-6 bottom-6 p-2 rounded-full border bg-indigo-700'>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFF">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
          <path d="M9 16H9.01M12 11H12.01M7 10H7.01M15 16H15.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C12 5.76142 13.7909 8 16 8C16 10.2091 18.2386 12 21 12Z" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </g>
        </svg>
      </div>

    </div>
  );
}

export default App;
