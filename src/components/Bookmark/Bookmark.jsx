const Bookmark = () => {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/18264716/pexels-photo-18264716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/7775637/pexels-photo-7775637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/18148933/pexels-photo-18148933/free-photo-of-city-road-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/18148937/pexels-photo-18148937/free-photo-of-city-road-traffic-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/569314/pexels-photo-569314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="min-h-screen bg-[#121212]">
        <header className="fixed top-0 z-10 mx-auto flex w-full max-w-full items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
          <h1 className="text-xl font-extrabold md:text-3xl">My Profile</h1>
          <div className="flex w-max flex-shrink-0 items-center justify-end gap-6">
            <span className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </span>
            <span className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                ></path>
              </svg>
              <span className="absolute right-1 top-0 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-green-500 p-1 text-white"></span>
            </span>
            <button className="hidden w-max items-center justify-center border-[1px] border-white p-3 text-center font-bold text-white md:inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="mr-2 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              Create new
            </button>
          </div>
        </header>
        <div className="mt-[65px] grid grid-cols-12 gap-4 pb-8 pt-0 sm:px-4 sm:pt-8 md:mt-[83px] lg:px-10">
          <aside className="col-span-12 text-white md:col-span-5 lg:col-span-4 xl:col-span-3">
            <div className="sticky top-[100px] border-b border-white p-4 sm:border">
              <img
                className="mb-3 flex aspect-square h-16 w-16 rounded-full border-2 border-[#ae7aff] object-cover"
                src="https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="avatar"
              />
              <h2 className="mb-1 font-bold">Aurora Starlight</h2>
              <p className="text-sm">
                Night owl | Moon enthusiast | Wanderlust 🌕🌙🌎
              </p>
              <hr className="my-4 h-[1px] w-full" />
              <div className="mb-4">
                <h3 className="mb-1 font-bold">Short Bio</h3>
                <p className="text-sm">
                  Immersed in the enchanting world of the night, captivated by
                  the moon&#x27;s allure, and constantly seeking new adventures
                  around the globe. 🌕🌙🌎
                </p>
              </div>
              <div className="mb-4 text-sm">
                <h3 className="mb-1 font-bold">Public link</h3>
                <button className="block text-[#ae7aff] hover:underline">
                  starryaurora@gmail.com
                </button>
                <button className="block break-all text-[#ae7aff] hover:underline">
                  https://www.aurorastarry.com/
                </button>
              </div>
              <p className="mb-4 flex gap-x-4">
                <span className="inline-block">
                  <span className="font-bold">13.5k </span>
                  <span className="text-sm text-gray-400">Followers</span>
                </span>
                <span className="inline-block">
                  <span className="font-bold">204 </span>
                  <span className="text-sm text-gray-400">Following</span>
                </span>
              </p>
              <button className="inline-flex w-max items-center bg-[#ae7aff] px-4 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
                Edit Profile
              </button>
            </div>
          </aside>
          <section className="col-span-12 text-white md:col-span-7 lg:col-span-5 xl:col-span-6">
            <div className="sticky top-[82px] z-10 mt-[1px] bg-[#121212] pb-4 before:absolute before:inset-x-0 before:bottom-full before:h-[17px] before:bg-[#121212] md:top-[100px] md:mt-0">
              <ul className="no-scrollbar flex w-full overflow-x-auto px-4 sm:px-0">
                <li className="mr-2 inline-block shrink-0">
                  <button className="inline-block px-6 py-1.5 hover:bg-[#2c2c2c]">
                    Posts
                  </button>
                </li>
                <li className="mr-2 inline-block shrink-0">
                  <button className="inline-block px-6 py-1.5 hover:bg-[#2c2c2c]">
                    Edit profile
                  </button>
                </li>
                <li className="mr-2 inline-block shrink-0">
                  <button className="inline-block px-6 py-1.5 hover:bg-[#2c2c2c]">
                    Change password
                  </button>
                </li>
                <li className="mr-2 inline-block shrink-0">
                  <button className="inline-block bg-[#2c2c2c] px-6 py-1.5">
                    Bookmarked
                  </button>
                </li>
              </ul>
            </div>
            <div className="relative mb-2 w-full last:mb-0 sm:mb-4">
              <div className="flex border-b border-t border-white p-4 text-white sm:border-l sm:border-r">
                <div className="h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                  <img
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Mystical Wanderer"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="pl-4 pt-1">
                  <div className="mb-2 flex items-center gap-x-2">
                    <div className="w-full">
                      <h2 className="inline-block font-bold">
                        Mystical Wanderer
                      </h2>
                      <span className="ml-2 inline-block text-sm text-gray-400">
                        15 minutes ago
                      </span>
                    </div>
                    <button className="ml-auto shrink-0 hover:text-[#ae7aff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <p className="mb-4 text-sm sm:text-base">
                    Uncovering ancient secrets and mystical wonders. The journey
                    is the destination. 🔮🌟 #MythologyQuest
                  </p>
                  <div className="flex gap-x-4">
                    <button
                      className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)] text-[#ae7aff] focus:text-inherit"
                      data-like-count="46"
                      data-like-count-alt="45"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 fill-[#ae7aff] group-focus:fill-none"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        ></path>
                      </svg>
                    </button>
                    <button className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>13</span>
                    </button>
                    <div className="ml-auto">
                      <button className="mr-2 inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <button className="group inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff] focus:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 fill-[#ae7aff] text-[#ae7aff] group-focus:fill-none group-focus:text-inherit"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mb-2 w-full last:mb-0 sm:mb-4">
              <div className="flex border-b border-t border-white p-4 text-white sm:border-l sm:border-r">
                <div className="h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                  <img
                    src="https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Aqua Explorer"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="pl-4 pt-1">
                  <div className="mb-2 flex items-center gap-x-2">
                    <div className="w-full">
                      <h2 className="inline-block font-bold">Aqua Explorer</h2>
                      <span className="ml-2 inline-block text-sm text-gray-400">
                        1 hour ago
                      </span>
                    </div>
                    <button className="ml-auto shrink-0 hover:text-[#ae7aff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <p className="mb-4 text-sm sm:text-base">
                    Swimming with the dolphins today, and it was magical! 🐬🌊
                    #OceanAdventure
                  </p>
                  <div className="mb-4 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
                    <img
                      src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="attachment-0"
                      className="rounded-md"
                    />
                  </div>
                  <div className="flex gap-x-4">
                    <button
                      className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)] hover:text-[#ae7aff] focus:text-[#ae7aff]"
                      data-like-count="102"
                      data-like-count-alt="103"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 group-focus:fill-[#ae7aff]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        ></path>
                      </svg>
                    </button>
                    <button className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>18</span>
                    </button>
                    <div className="ml-auto">
                      <button className="mr-2 inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <button className="group inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff] focus:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 fill-[#ae7aff] text-[#ae7aff] group-focus:fill-none group-focus:text-inherit"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mb-2 w-full last:mb-0 sm:mb-4">
              <div className="flex border-b border-t border-white p-4 text-white sm:border-l sm:border-r">
                <div className="h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                  <img
                    src="https://images.pexels.com/photos/7775637/pexels-photo-7775637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Solar Flare "
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="pl-4 pt-1">
                  <div className="mb-2 flex items-center gap-x-2">
                    <div className="w-full">
                      <h2 className="inline-block font-bold">Solar Flare </h2>
                      <span className="ml-2 inline-block text-sm text-gray-400">
                        59 minutes ago
                      </span>
                    </div>
                    <button className="ml-auto shrink-0 hover:text-[#ae7aff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <p className="mb-4 text-sm sm:text-base">
                    Harnessing the power of the sun for a brighter future. ☀️🔋
                    #SolarEnergy
                  </p>
                  <div className="mb-4 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
                    <img
                      src="https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="attachment-0"
                      className="rounded-md"
                    />
                    <img
                      src="https://images.pexels.com/photos/18148933/pexels-photo-18148933/free-photo-of-city-road-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="attachment-1"
                      className="rounded-md"
                    />
                    <img
                      src="https://images.pexels.com/photos/18148937/pexels-photo-18148937/free-photo-of-city-road-traffic-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="attachment-2"
                      className="rounded-md"
                    />
                  </div>
                  <div className="flex gap-x-4">
                    <button
                      className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)] text-[#ae7aff] focus:text-inherit"
                      data-like-count="802"
                      data-like-count-alt="801"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 fill-[#ae7aff] group-focus:fill-none"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        ></path>
                      </svg>
                    </button>
                    <button className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>99</span>
                    </button>
                    <div className="ml-auto">
                      <button className="mr-2 inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <button className="group inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff] focus:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 fill-[#ae7aff] text-[#ae7aff] group-focus:fill-none group-focus:text-inherit"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mb-2 w-full last:mb-0 sm:mb-4">
              <div className="flex border-b border-t border-white p-4 text-white sm:border-l sm:border-r">
                <div className="h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                  <img
                    src="https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Aurora Starlight"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="pl-4 pt-1">
                  <div className="mb-2 flex items-center gap-x-2">
                    <div className="w-full">
                      <h2 className="inline-block font-bold">
                        Aurora Starlight
                      </h2>
                      <span className="ml-2 inline-block text-sm text-gray-400">
                        17 hours ago
                      </span>
                    </div>
                    <button className="ml-auto shrink-0 hover:text-[#ae7aff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <p className="mb-4 text-sm sm:text-base">
                    Embracing the lunar magic tonight. The full moon is my muse.
                    🌕🌌 #MoonlightDreams
                  </p>
                  <div className="group mb-4 border opacity-95 hover:opacity-100">
                    <div className="max-h-52 overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Aurora Starlight"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 font-bold">Aurora Starlight</h3>
                      <p className="mb-3 text-sm">
                        Digital artist | Creative mind | Color magician 🎨🖌️🖼️
                      </p>
                      <span className="inline-flex items-center gap-x-2 break-all text-sm text-[#ae7aff] no-underline group-hover:underline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                          ></path>
                        </svg>
                        https://www.aurorastarry.com/
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-x-4">
                    <button
                      className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)] hover:text-[#ae7aff] focus:text-[#ae7aff]"
                      data-like-count="420"
                      data-like-count-alt="421"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 group-focus:fill-[#ae7aff]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        ></path>
                      </svg>
                    </button>
                    <button className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>20</span>
                    </button>
                    <div className="ml-auto">
                      <button className="mr-2 inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <button className="group inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff] focus:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 fill-[#ae7aff] text-[#ae7aff] group-focus:fill-none group-focus:text-inherit"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mb-2 w-full last:mb-0 sm:mb-4">
              <div className="flex border-b border-t border-white p-4 text-white sm:border-l sm:border-r">
                <div className="h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                  <img
                    src="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Nova Sparks"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="pl-4 pt-1">
                  <div className="mb-2 flex items-center gap-x-2">
                    <div className="w-full">
                      <h2 className="inline-block font-bold">Nova Sparks</h2>
                      <span className="ml-2 inline-block text-sm text-gray-400">
                        1 day ago
                      </span>
                    </div>
                    <button className="ml-auto shrink-0 hover:text-[#ae7aff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <p className="mb-4 text-sm sm:text-base">
                    💡 Tech Poll: Which emerging technology excites you the
                    most?
                  </p>
                  <button
                    className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0 hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black before:bg-gray-400/10
              "
                    style="--data-vote-percentage:0%"
                  >
                    Artificial Intelligence{" "}
                  </button>
                  <button
                    className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0 hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black before:bg-gray-400/10
              "
                    style="--data-vote-percentage:0%"
                  >
                    Virtual Reality{" "}
                  </button>
                  <button
                    className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0 hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black before:bg-gray-400/10
              "
                    style="--data-vote-percentage:0%"
                  >
                    Quantum Computing{" "}
                  </button>
                  <button
                    className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0 hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black before:bg-gray-400/10
              "
                    style="--data-vote-percentage:0%"
                  >
                    5G Connectivity{" "}
                  </button>
                  <div className="flex gap-x-4">
                    <button
                      className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)] hover:text-[#ae7aff] focus:text-[#ae7aff]"
                      data-like-count="207"
                      data-like-count-alt="208"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 group-focus:fill-[#ae7aff]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        ></path>
                      </svg>
                    </button>
                    <button className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>63</span>
                    </button>
                    <div className="ml-auto">
                      <button className="mr-2 inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <button className="group inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff] focus:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 fill-[#ae7aff] text-[#ae7aff] group-focus:fill-none group-focus:text-inherit"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mb-2 w-full last:mb-0 sm:mb-4">
              <div className="flex border-b border-t border-white p-4 text-white sm:border-l sm:border-r">
                <div className="h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                  <img
                    src="https://images.pexels.com/photos/569314/pexels-photo-569314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Zen Garden"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="pl-4 pt-1">
                  <div className="mb-2 flex items-center gap-x-2">
                    <div className="w-full">
                      <h2 className="inline-block font-bold">Zen Garden</h2>
                      <span className="ml-2 inline-block text-sm text-gray-400">
                        7 days ago
                      </span>
                    </div>
                    <button className="ml-auto shrink-0 hover:text-[#ae7aff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <p className="mb-4 text-sm sm:text-base">
                    🧘‍♂️ Mindfulness Poll: Which mindfulness practice resonates
                    with you the most?
                  </p>
                  <button
                    className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0  before:bg-gray-400/10
              "
                    disabled=""
                    style="--data-vote-percentage:30%"
                  >
                    Meditation{" "}
                    <span className="ml-auto shrink-0 text-sm">30%</span>
                  </button>
                  <button
                    className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0  before:bg-[#ae7aff]
              "
                    disabled=""
                    style="--data-vote-percentage:33%"
                  >
                    Yoga <span className="ml-auto shrink-0 text-sm">33%</span>
                  </button>
                  <button
                    className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0  before:bg-gray-400/10
              "
                    disabled=""
                    style="--data-vote-percentage:27%"
                  >
                    Deep Breathing{" "}
                    <span className="ml-auto shrink-0 text-sm">27%</span>
                  </button>
                  <button
                    className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0  before:bg-gray-400/10
              "
                    disabled=""
                    style="--data-vote-percentage:20%"
                  >
                    Tai Chi{" "}
                    <span className="ml-auto shrink-0 text-sm">20%</span>
                  </button>
                  <div className="flex gap-x-4">
                    <button
                      className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)] text-[#ae7aff] focus:text-inherit"
                      data-like-count="97"
                      data-like-count-alt="96"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 fill-[#ae7aff] group-focus:fill-none"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        ></path>
                      </svg>
                    </button>
                    <button className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>13</span>
                    </button>
                    <div className="ml-auto">
                      <button className="mr-2 inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <button className="group inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff] focus:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 fill-[#ae7aff] text-[#ae7aff] group-focus:fill-none group-focus:text-inherit"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mb-2 w-full last:mb-0 sm:mb-4">
              <div className="flex border-b border-t border-white p-4 text-white sm:border-l sm:border-r">
                <div className="h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                  <img
                    src="https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Pixel Painter"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="pl-4 pt-1">
                  <div className="mb-2 flex items-center gap-x-2">
                    <div className="w-full">
                      <h2 className="inline-block font-bold">Pixel Painter</h2>
                      <span className="ml-2 inline-block text-sm text-gray-400">
                        1 months ago
                      </span>
                    </div>
                    <button className="ml-auto shrink-0 hover:text-[#ae7aff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <p className="mb-4 text-sm sm:text-base">
                    🎨 Art Poll: What&#x27;s your preferred art medium for
                    creating masterpieces?
                  </p>
                  <button
                    className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0  before:bg-gray-400/10
              "
                    disabled=""
                    style="--data-vote-percentage:20%"
                  >
                    Acrylic Paint{" "}
                    <span className="ml-auto shrink-0 text-sm">20%</span>
                  </button>
                  <button
                    className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0  before:bg-gray-400/10
              "
                    disabled=""
                    style="--data-vote-percentage:19%"
                  >
                    Watercolor{" "}
                    <span className="ml-auto shrink-0 text-sm">19%</span>
                  </button>
                  <button
                    className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0  before:bg-gray-400/10
              "
                    disabled=""
                    style="--data-vote-percentage:18%"
                  >
                    Digital Art{" "}
                    <span className="ml-auto shrink-0 text-sm">18%</span>
                  </button>
                  <button
                    className="relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0  before:bg-gray-400/10
              "
                    disabled=""
                    style="--data-vote-percentage:43%"
                  >
                    Charcoal Sketching{" "}
                    <span className="ml-auto shrink-0 text-sm">43%</span>
                  </button>
                  <div className="flex gap-x-4">
                    <button
                      className="group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)] hover:text-[#ae7aff] focus:text-[#ae7aff]"
                      data-like-count="99"
                      data-like-count-alt="100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 group-focus:fill-[#ae7aff]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        ></path>
                      </svg>
                    </button>
                    <button className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>13</span>
                    </button>
                    <div className="ml-auto">
                      <button className="mr-2 inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <button className="group inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff] focus:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 fill-[#ae7aff] text-[#ae7aff] group-focus:fill-none group-focus:text-inherit"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <aside className="hidden text-white lg:col-span-3 lg:block">
            <div className="sticky top-[100px] border p-4">
              <h2 className="mb-4 font-bold"># Trending Hashtags</h2>
              <ul className="list-disc pl-4">
                <li>
                  <button className="hover:text-[#ae7aff]">#javascript</button>
                </li>
                <li>
                  <button className="hover:text-[#ae7aff]">#typescript</button>
                </li>
                <li>
                  <button className="hover:text-[#ae7aff]">#java</button>
                </li>
                <li>
                  <button className="hover:text-[#ae7aff]">#python</button>
                </li>
                <li>
                  <button className="hover:text-[#ae7aff]">#golang</button>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Bookmark;
