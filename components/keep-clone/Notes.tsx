import { confirmAlert } from 'react-confirm-alert';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { show_edit_modal } from './EditModal';

const Notes = ({ found_content, content, set_content, set_note_to_edit }: any) => {
  return (
    <div className='w-full h-full mt-20 px-20 grid grid-cols-5 gap-5 dark:bg-gray-700 dark:text-white'>
      {(() => {
        if (found_content && found_content.length)
          return found_content.map((note: any, key: any) => (
            <NoteElement data={note} key={key} set_note_to_edit={set_note_to_edit} set_content={set_content} />
          ));
        if (found_content !== null && content.length)
          return content.map((note: any, key: any) => (
            <NoteElement data={note} key={key} set_note_to_edit={set_note_to_edit} set_content={set_content} />
          ));

        return <p className='text-center text-gray-600 dark:text-white col-span-5'>No notes found.</p>;
      })()}
    </div>
  );
};

const NoteElement = ({ data, set_note_to_edit, set_content }: any) => {
  return (
    <div
      id='note'
      className='note relative bg-white w-full max-w-full break-all rounded-lg border p-6 border-gray-300 dark:border-gray-900 hover:border-gray-400 dark:hover:border-black hover:drop-shadow-md'
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
        <div
          onClick={() =>
            confirmAlert({
              title: 'Delete note',
              message: 'Are you sure you want to delete this note?',
              buttons: [
                {
                  label: 'Yes',
                  onClick: () => {
                    set_content((old_content: any) => {
                      const index = old_content.indexOf(data);

                      old_content.splice(index, 1);

                      return [...old_content];
                    });
                  },
                },
                {
                  label: 'No',
                  onClick: () => {},
                },
              ],
              closeOnEscape: true,
              closeOnClickOutside: true,
            })
          }
          className='ml-3 p-[.35rem] bg-red-400 text-white rounded-md drop-shadow-sm cursor-pointer hover:scale-105 active:scale-100'
        >
          <MdDelete size='19px' />
        </div>
      </div>
    </div>
  );
};

export default Notes;
