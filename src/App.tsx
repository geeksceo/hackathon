import logo from './logo.svg';
import './App.css';
import MenuComponent from './components/MenuComponent';
import { UIEventHandler, useEffect, useState } from 'react';

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
  }, []); //

  return (
    <div className='w-full'>
      <div
        className="fixed inset-x-0 top-0 z-50 h-1 mt-0 rounded-full bg-indigo-500"
        style={{'width': `${percent}%`}}>
      </div>
      <MenuComponent />
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi autem! Voluptas nisi quia cum at, dolorum magnam error. Fuga nostrum neque dolorum, explicabo voluptatum corporis. Tenetur doloribus laboriosam dicta.

    </div>
  );
}

export default App;
