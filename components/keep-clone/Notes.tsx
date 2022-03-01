const Notes = ({ found_content, content }: any) => {
  return (
    <div className='w-full h-full mt-20 px-20 grid grid-cols-5 gap-5'>
      {(() => {
        if (found_content.length) return found_content.map((note: any, key: any) => <NoteElement data={note} key={key} />);
        if (content.length) return content.map((note: any, key: any) => <NoteElement data={note} key={key} />);

        return <p className='text-center text-gray-600 col-span-5'>No notes found.</p>;
      })()}
    </div>
  );
};

const NoteElement = ({ data }: any) => {
  return (
    <div className='w-full rounded-lg border p-6 border-gray-300'>
      {data.title ? <h3 className='text-[18px] font-[600] mb-2'>{data.title}</h3> : null}
      <p dangerouslySetInnerHTML={{ __html: data.content }} className='text-[16px] font-[400]'></p>
    </div>
  );
};

export default Notes;
