const EditProfile = () => {
  return (
    <div className="mb-4 mt-8 flex flex-wrap gap-y-4 p-4 md:p-0">
      <div className="flex w-full items-center justify-center">
        <input id="avatar-input-1" hidden="" type="file" />
        <label
          htmlFor="avatar-input-1"
          className="relative flex aspect-square h-24 w-24 cursor-pointer items-center justify-center overflow-visible rounded-full border-4 border-[#ae7aff] p-1"
        >
          <img
            alt="avatar-inp"
            src="https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-full w-full rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 flex aspect-square h-5 w-5 items-center justify-center rounded-full bg-[#ae7aff] p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-3 w-3 text-black"
            >
              <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z"></path>
            </svg>
          </span>
        </label>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-2 xl:w-1/2 xl:pr-2">
        <label className="text-xs text-slate-200">First name</label>
        <input
          placeholder="Enter first name"
          autoComplete="false"
          className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
          value="Aurora"
        />
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-2 xl:w-1/2 xl:pl-2">
        <label className="text-xs text-slate-200">Last name</label>
        <input
          placeholder="Enter last name"
          autoComplete="false"
          className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
          value="Starlight"
        />
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-2">
        <label className="text-xs text-slate-200">Email</label>
        <input
          placeholder="Enter email"
          autoComplete="false"
          className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
          value="starryaurora@gmail.com"
        />
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-2">
        <label className="text-xs text-slate-200">Username</label>
        <input
          placeholder="Enter username"
          autoComplete="false"
          className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
          value="starryaurora"
        />
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-2">
        <label className="text-xs text-slate-200">Tagline</label>
        <input
          placeholder="Enter tagline"
          autoComplete="false"
          className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
          value="Night owl | Moon enthusiast | Wanderlust 🌕🌙🌎"
        />
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-2">
        <label className="text-xs text-slate-200">Short Bio</label>
        <textarea
          placeholder="Enter short bio"
          autoComplete="false"
          className="w-full resize-none border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
        >
          Immersed in the enchanting world of the night, captivated by the
          moon&#x27;s allure, and constantly seeking new adventures around the
          globe. 🌕🌙🌎
        </textarea>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-2">
        <label className="text-xs text-slate-200">Portfolio URL</label>
        <input
          placeholder="Enter url"
          autoComplete="false"
          className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
          type="url"
          value="https://www.aurorastarry.com/"
        />
      </div>

      <button className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
        Edit profile
      </button>
    </div>
  );
};

export default EditProfile;
