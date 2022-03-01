const Notes = ({ found_content, content }: any) => {
  return (
    <div className="w-full h-full mt-20 px-20 grid grid-cols-5 gap-5">
      {
        (() => {
          if (found_content.length)
            return found_content.map((note: any, key: any) => <NoteElement data={note} key={key} />);

          return content.map((note: any, key: any) => <NoteElement data={note} key={key} />);
        })()
      }
    </div>
  );
}

const NoteElement = ({ data, key }: any) => {
  return (
    <div key={key} className="w-full min-h-[50px] rounded-lg border p-6 border-gray-500">
      <h3 className="text-[18px] font-[600] mb-2">{data.title}</h3>
      <p className="text-[17px] font-[400]">{data.content}</p>
    </div>  
  )
}

export default Notes;