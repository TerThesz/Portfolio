import type { NextPage } from 'next';
import AddNote from '../../components/keep-clone/AddNote';

const index: NextPage = () => {
  return (
    <div className='relative w-full h-full flex justify-center items-center'>
      <AddNote />
    </div>
  );
};

export default index;
