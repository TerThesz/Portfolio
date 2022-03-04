import { Dispatch, SetStateAction, useEffect } from 'react';

const EditModal = ({ set_content }: any) => {
  useEffect(() => {
    const content_element = document.getElementById('edit-note-content');

    content_element?.addEventListener('input', () => {
      if (content_element?.innerHTML !== '') return document.getElementById('edit-note-content-placeholder')?.classList.add('hidden');
      document.getElementById('edit-note-content-placeholder')?.classList.remove('hidden');
    });
  }, []);

  return (
    <div
      id='edit-note'
      className='hidden fixed top-1/2 left-1/2 justify-center items-center -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black bg-opacity-10'
    >
      <div className='w-[40rem] min-h-10 bg-white dark:bg-gray-800 border border-gray-300 border-solid dark:border-gray-900 drop-shadow-sm rounded-lg mt-4 p-5 dark:text-white'>
        <input
          id='edit-note-title'
          type='text'
          className='text-[22px] placeholder:font-[700] font-[500] w-full mb-2 bg-transparent'
          placeholder='Title'
        />

        <div className='w-full relative'>
          <div
            id='edit-note-content'
            className='text-[17px] min-h-[50px] max-h-[300px] placeholder:font-[700] font-[400] w-full overflow-x-hidden overflow-y-auto outline-none border-none'
            contentEditable
          ></div>
          <p
            id='edit-note-content-placeholder'
            className='absolute top-0 left-0 text-[17px] text-gray-600 dark:text-white font-medium pointer-events-none'
          >
            Edit note content. . .
          </p>
        </div>

        <button
          className='hover:font-medium'
          id='edit-note-save'
          onClick={() => {
            // @ts-ignore
            const title = document.getElementById('new-note-title')?.value + '';
            const content =
              document
                .getElementById('new-note-content')
                ?.innerHTML.replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;')
                .replaceAll('&lt;br&gt;', '<br>')
                .replaceAll('&lt;div&gt;', '<div>')
                .replaceAll('&lt;/div&gt;', '</div>') + '';

            if (!(content.replaceAll(' ', '').replaceAll('&nbsp;', '') === '' && title.replaceAll(' ', '') === '')) {
            }

            const content_element = document.getElementById('new-note-content') as HTMLElement;
            const title_element = document.getElementById('new-note-title') as HTMLInputElement;

            content_element.innerHTML = '';
            title_element.value = '';

            content_element.dispatchEvent(new Event('blur'));

            document.getElementById('new-note-content-placeholder')?.classList.remove('hidden');
            // @ts-ignore
            document.activeElement?.blur();
          }}
        >
          edit
        </button>

        <button onClick={clear_modal} className='hover:font-medium text-red-600 ml-3'>
          cancel
        </button>
      </div>
    </div>
  );
};

function clear_modal() {
  (document.getElementById('edit-note-content') as HTMLElement).innerHTML = '';
  (document.getElementById('edit-note-title') as HTMLInputElement).value = '';

  (document.getElementById('edit-note') as HTMLElement).classList.add('hidden');
  (document.getElementById('edit-note') as HTMLElement).classList.remove('flex');

  document.body.style.overflowY = 'auto';
}

function show_modal(note: any) {
  (document.getElementById('edit-note-content') as HTMLElement).innerHTML = note.content;
  (document.getElementById('edit-note-title') as HTMLInputElement).value = note.title;

  (document.getElementById('edit-note') as HTMLElement).classList.remove('hidden');
  (document.getElementById('edit-note') as HTMLElement).classList.add('flex');

  if (note.text.length) (document.getElementById('edit-note-content-placeholder') as HTMLElement).classList.add('hidden');

  document.body.style.overflowY = 'hidden';
}

export default EditModal;

export { show_modal };
