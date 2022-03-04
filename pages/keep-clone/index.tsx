import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import AddNote from '../../components/keep-clone/AddNote';
import ChangeTheme from '../../components/keep-clone/ChangeTheme';
import EditModal from '../../components/keep-clone/EditModal';
import Notes from '../../components/keep-clone/Notes';
import SearchBar from '../../components/keep-clone/SearchBar';

const index: NextPage = () => {
  const [content, set_content] = useState([]);
  const [found_content, set_found_content] = useState([]);
  const [note_to_edit, set_note_to_edit] = useState(null);

  useEffect(() => {
    if (localStorage.theme === 'dark') return document.documentElement.classList.add('dark');

    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center dark:bg-gray-700'>
      <SearchBar set_found={set_found_content} content={content} found={found_content} />
      <AddNote set_content={set_content} />

      <Notes found_content={found_content} content={content} set_note_to_edit={set_note_to_edit} />

      <ChangeTheme />

      <EditModal set_content={set_content} note_to_edit={note_to_edit} />
    </div>
  );
};

export default index;
