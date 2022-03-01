import type { NextPage } from 'next';
import { useState } from 'react';
import AddNote from '../../components/keep-clone/AddNote';
import Notes from '../../components/keep-clone/Notes';

const index: NextPage = () => {
  const [content, set_content] = useState([]);
  const [found_content, set_found_content] = useState([]);

  return (
    <div className='relative w-full h-full flex flex-col justify-center items-center'>
      <AddNote set_content={set_content} />

      <Notes found_content={found_content} content={content} />
    </div>
  );
};

export default index;
