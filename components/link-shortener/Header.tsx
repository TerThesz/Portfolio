const Header = () => {
  return (
    <>
      <div className="h-1/2 w-full bg-blue-500 px-[26%] py-[8rem]">
        <h1 className="font-semibold text-[3.5rem] text-white">Size does matter.</h1>
        <p className="text-white text-xl font-light">Do you have problems with <span className="font-semibold text-[#f5b889]">character limits</span>, <span className="font-semibold text-[#f5b889]"><br/>hard to type links</span> or do you just want <span className="font-semibold text-[#f5b889]">more unnecessary analytics</span>?<br/><br/><span className="font-semibold">Then you are at the right place!</span></p>
      </div>

      <header className="absolute top-0 left-0 w-full h-full p-10 flex items-center justify-center">
        <div className="w-1/2 relative">
          <div className="w-full grid grid-cols-4 grid-rows-none">
            <input spellCheck="false" type="url" name="url" id="url" placeholder="Paste a long url here" className="col-span-3 text-gray-700 bg-white text-lg py-4 px-5 outline-none border border-solid drop-shadow-sm rounded-lg" />

            <button className="ml-5 bg-[#f5b889] hover:bg-[#e3a87b] text-[#4a3729] font-normal text-xl rounded-lg">
              Shorten
            </button>
          </div>

          <div id="url-error" className="hidden absolute w-full bg-[#fc8983] mt-5 py-4 px-5 rounded-lg text-[#4f2c2b]">
            Please enter a valid URL.
          </div>

          <div id="shortened-links" className="">

          </div>
        </div>
      </header>
    </>
  );
}

export default Header;