import type { NextPage } from 'next';
import Header from '../../components/link-shortener/Header';

const index: NextPage = () => {
  return (
    <div className='absolute w-full h-full'>
      <Header />
    </div>
  );
}

export default index;