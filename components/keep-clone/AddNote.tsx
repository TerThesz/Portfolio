import { TextareaHTMLAttributes, useEffect } from "react";

const AddNote = () => {
  useEffect(() => {
    document.getElementById('new-note-content')?.addEventListener('focus', () =>
      document.getElementById('new-note-title')?.classList.remove('hidden'));

    document.getElementById('new-note-content')?.addEventListener('blur', () => {
      if ((document.getElementById('new-note-content') as any).value === '')
        document.getElementById('new-note-title')?.classList.add('hidden')
    });
  }, []);

  return (
    <div className="w-[40rem] bg-white border border-gray-200 border-solid drop-shadow-md rounded-lg mt-20 p-5">
      <input id="new-note-title" type="text" className="hidden text-[18px] placeholder:font-[700] font-[500] w-full mb-2" placeholder="Title" />
      <textarea id="new-note-content" className="text-[17px] placeholder:font-[700] font-[400] w-full h-full" placeholder="Take a note. . ." />
    </div>
  );
}

export default AddNote;