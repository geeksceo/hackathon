import logo from './logo.svg';
import './App.css';
import MenuComponent from './components/MenuComponent';
import { UIEventHandler, useEffect, useMemo, useState } from 'react';

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

      <div className='mt-16 z-30 h-[560px] border bg-red-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dolorum natus quaerat velit. Consectetur rerum dolores excepturi doloribus. Excepturi, aliquid porro totam fugit nobis ipsam dolor vero praesentium pariatur!
      </div>

    </div>
  );
}

export default App;
