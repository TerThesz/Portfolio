import { useEffect } from 'react';

const AddNote = ({ set_content }: any) => {
  useEffect(() => {
    const content_element = document.getElementById('new-note-content');

    content_element?.addEventListener('focus', () => {
      document.getElementById('new-note-title')?.classList.remove('hidden');

      document.getElementById('new-note-menu')?.classList.remove('hidden');
      document.getElementById('new-note-menu')?.classList.add('flex');
    });

    content_element?.addEventListener('blur', () => {
      // @ts-ignore
      if (content_element.innerHTML === '' && document.getElementById('new-note-title')?.value === '') {
        document.getElementById('new-note-title')?.classList.add('hidden');

        document.getElementById('new-note-menu')?.classList.add('hidden');
        document.getElementById('new-note-menu')?.classList.remove('flex');
      }
    });

    content_element?.addEventListener('input', () => {
      if (content_element?.innerHTML !== '') return document.getElementById('new-note-content-placeholder')?.classList.add('hidden');
      document.getElementById('new-note-content-placeholder')?.classList.remove('hidden');
    });

    document.getElementById('new-note-title')?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        document.getElementById('new-note-save')?.click();
      }
    });
  }, []);

  return (
    <>
      <div className='relative w-[40rem] bg-white dark:bg-gray-800 border border-gray-200 border-solid dark:border-gray-900 drop-shadow-sm rounded-lg mt-4 p-5 dark:text-white'>
        <input
          id='new-note-title'
          type='text'
          className='hidden text-[18px] placeholder:font-[700] font-[500] w-full mb-2 bg-transparent'
          placeholder='Title'
        />
        <div className='w-full relative'>
          <div
            id='new-note-content'
            className='text-[17px] min-h-[50px] max-h-[300px] placeholder:font-[700] font-[400] w-full overflow-x-hidden overflow-y-auto outline-none border-none'
            contentEditable
          ></div>
          <p
            id='new-note-content-placeholder'
            className='absolute top-0 left-0 text-gray-600 dark:text-white font-medium pointer-events-none'
          >
            Take a note. . .
          </p>
        </div>

        <div id='new-note-menu' className='hidden w-full mt-3'>
          <button
            className='hover:font-medium'
            id='new-note-save'
            onClick={() => {
              // @ts-ignore
              const title = document.getElementById('new-note-title')?.value;
              const content = document
                .getElementById('new-note-content')
                ?.innerHTML.replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;')
                .replaceAll('&lt;br&gt;', '<br>')
                .replaceAll('&lt;div&gt;', '<div>')
                .replaceAll('&lt;/div&gt;', '</div>');

              set_content((old_content: Array<any>) => {
                console.log([{ title, content }, ...old_content]);
                return [{ title, content }, ...old_content];
              });

              const content_element = document.getElementById('new-note-content') as HTMLElement;
              const title_element = document.getElementById('new-note-title') as HTMLInputElement;

              content_element.innerHTML = '';
              title_element.value = '';

              content_element.dispatchEvent(new Event('blur'));

              document.getElementById('new-note-content-placeholder')?.classList.remove('hidden');
            }}
          >
            save
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
