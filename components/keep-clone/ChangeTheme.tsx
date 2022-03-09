import { useEffect, useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const ChangeTheme = () => {
  const [theme, set_theme] = useState('light');

  useEffect(() => {
    set_theme(localStorage.theme || 'light');
  }, []);

  return (
    <div
      onClick={() => {
        if (localStorage.theme === 'dark') {
          localStorage.theme = 'light';
          document.documentElement.classList.remove('dark');

          set_theme('light');
        } else {
          localStorage.theme = 'dark';
          document.documentElement.classList.add('dark');

          set_theme('dark');
        }
      }}
      className='fixed md:right-14 right-8 md:bottom-10 bottom-8 text-gray-800 dark:text-yellow-200 p-4 dark:bg-gray-800 drop-shadow-md hover:scale-105 cursor-pointer active:scale-100 bg-gray-100 rounded-full'
    >
      {theme === 'light' ? <BsFillMoonFill size='18px' /> : <BsFillSunFill size='20px' />}
    </div>
  );
};

export default ChangeTheme;
