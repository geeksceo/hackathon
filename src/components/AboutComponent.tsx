import { useEffect, useState } from "react";


export default function AboutComponent() {

    const [index, setIndex] = useState(0);


    useEffect(() => {
        const texts = ["Premier texte", "Deuxième texte", "Troisième texte"];
        function changeText() {
            const changingText: HTMLElement | null = window.document.getElementById('changingText')
            setIndex((index + 1) % texts.length);
            if(changingText) changingText.innerHTML = texts[index];
        }
        const intervalId = setInterval(changeText, 1000);

        // Nettoyer l'intervalle lorsque le composant est démonté
        return () => clearInterval(intervalId);
      }, []);

    return (
        <div className='pt-28 z-30 h-[560px] bg-indigo-200'>

        <div className='flex px-32 items-center w-full'>
          <div className='pl-20 w-1/2 flex flex-col gap-4 border-indigo-900'>
            <span className='text-2xl font-bold'>
              <span className='text-indigo-500 font-medium'>New Thing: </span>AWE.SOME
            </span>
            <span className='text-3xl font-bold'>Intro goes here...</span>
            <span className='text-2xl font-normal vertical-text-container'>

                <span className="vertical-text" id="changingText">Premier texte</span>
            </span>

            <span className='text-3xl font-bold'>...think about it !</span>
          </div>
          <div className='w-1/2 flex items-center justify-start'>
            <img className='h-[300px]' src="/assets/about/1.svg" alt="" />
          </div>
        </div>

        <div className='w-full flex items-center justify-center pt-8 pb-2'>

          <button className='px-6 py-3 bg-indigo-500 rounded-full text-white text-lg font-medium'>
            More information
          </button>

        </div>
      </div>
    );
}