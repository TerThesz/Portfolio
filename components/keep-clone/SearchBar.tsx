import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({ set_found, content, found }: any) => {
  return (
    <div className='mt-20 w-[40rem] flex bg-white dark:bg-gray-800 border border-gray-200 border-solid dark:border-gray-900 rounded-lg p-5 dark:text-white'>
      <AiOutlineSearch size='18px' />

      <input
        onInput={(e) => {
          if ((e.target as HTMLInputElement).value === '') return set_found([]);

          const found_notes = content.filter((note: any) => {
            console.log(note);

            return (
              note.title.toLowerCase().includes((e.target as HTMLInputElement).value.toLowerCase().replaceAll(' ', '')) ||
              note.content
                .toLowerCase()
                .replaceAll('&lt;', '')
                .replaceAll('&gt;', '')
                .replaceAll('&nbsp;', '')
                .includes((e.target as HTMLInputElement).value.toLowerCase().replaceAll(' ', ''))
            );
          });

          set_found(found_notes.length ? found_notes : null);
        }}
        type='text'
        id='search-bar'
        className='ml-5 h-full w-full bg-transparent'
        placeholder='Search'
      />
    </div>
  );
};

export default SearchBar;
