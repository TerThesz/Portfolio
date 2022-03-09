import { MdModeEdit } from 'react-icons/md';
import { show_edit_modal } from './EditModal';

const Notes = ({ found_content, content, set_content, set_note_to_edit }: any) => {
  return (
    <div className='w-full h-full mt-20 md:px-20 px-4 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 dark:bg-gray-700 dark:text-white'>
      {(() => {
        if (found_content && found_content.length)
          return found_content.map((note: any, key: any) => <NoteElement data={note} key={key} set_note_to_edit={set_note_to_edit} />);
        if (found_content !== null && content.length)
          return content.map((note: any, key: any) => <NoteElement data={note} key={key} set_note_to_edit={set_note_to_edit} />);

        return <p className='text-center text-gray-600 dark:text-white col-span-5'>No notes found.</p>;
      })()}
    </div>
  );
};

const NoteElement = ({ data, set_note_to_edit }: any) => {
  return (
    <div
      id='note'
      className='note relative bg-white dark:bg-transparent w-full max-w-full break-all rounded-lg border p-6 border-gray-300 dark:border-gray-900 hover:border-gray-400 dark:hover:border-black hover:drop-shadow-md'
    >
      {data.title ? <h3 className='text-[18px] font-[600] mb-2'>{data.title}</h3> : null}
      <p dangerouslySetInnerHTML={{ __html: data.content }} className='text-[16px] font-[400]'></p>

      <div id='note-menu' className='hidden absolute right-5 top-5'>
        <div
          onClick={() => show_edit_modal(data, set_note_to_edit)}
          className='ml-3 p-[.35rem] bg-gray-500 text-white rounded-md drop-shadow-sm cursor-pointer hover:scale-105 active:scale-100'
        >
          <MdModeEdit size='19px' />
        </div>
      </div>
    </div>
  );
};

export default Notes;
