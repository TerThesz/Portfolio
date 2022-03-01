import { TextareaHTMLAttributes, useEffect } from "react";

const AddNote = () => {
  useEffect(() => {
    const content_element = document.getElementById('new-note-content') as any;

    content_element?.addEventListener('focus', () => {
      document.getElementById('new-note-title')?.classList.remove('hidden')

      document.getElementById('new-note-menu')?.classList.remove('hidden');
      document.getElementById('new-note-menu')?.classList.add('flex');
    });

      content_element?.addEventListener('blur', () => {
      if (content_element.innerHTML === '') {
        document.getElementById('new-note-title')?.classList.add('hidden');
      
        document.getElementById('new-note-menu')?.classList.add('hidden');
        document.getElementById('new-note-menu')?.classList.remove('flex');
      }
    });

    content_element?.addEventListener('input', () => {
      if (content_element?.innerHTML !== '') return document.getElementById('new-note-content-placeholder')?.classList.add('hidden');
      document.getElementById('new-note-content-placeholder')?.classList.remove('hidden');
    });
  }, []);

  return (
    <>
    <div className="w-[40rem] bg-white border border-gray-200 border-solid drop-shadow-md rounded-lg mt-20 p-5">
      <input id="new-note-title" type="text" className="hidden text-[18px] placeholder:font-[700] font-[500] w-full mb-2" placeholder="Title" />
      <div className="w-full h-full relative">
        <div id="new-note-content" className="top-0 left-0 text-[17px] min-h-[50px] max-h-[300px] placeholder:font-[700] font-[400] w-full overflow-x-hidden overflow-y-auto outline-none border-none" contentEditable>
        </div>
        <p id="new-note-content-placeholder" className="absolute top-0 left-0 text-gray-600 font-medium pointer-events-none">Take a note. . .</p>
      </div>
    
      <div id="new-note-menu" className="hidden w-full h-full mt-3">
        <button className="hover:font-medium" onClick={
          () => {
            alert(1);
          }
        }>
          save
        </button>
      </div>
    </div>
    </>
  );
}

export default AddNote;