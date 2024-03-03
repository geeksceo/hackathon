import logo from './logo.svg';
import './App.css';
import MenuComponent from './components/MenuComponent';
import { UIEventHandler, useEffect, useMemo, useState } from 'react';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";


function App() {
  const [percent, setPercent] = useState(0);

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });

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

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#0d47a1",
        },
        opacity: 0,
      },
      fpsLimit: 1000,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#6366f1",
        },
        links: {
          color: "#6366f1",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  // if (init) {
  //   return ();
  // }

  return (
    <div className='w-full'>
      <Particles
        className='h-96 absolute z-10'
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
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
