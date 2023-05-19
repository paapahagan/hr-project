import React from "react";

function Message() {
  return (
    <div className="flex">
      {/* Side Bar */}
      <div className=" flex flex-col justify-between px-5 py-5 text-white bg-slate-900 w-96 h-screen">
        <div>
          <div className=" flex ">
            <div>
              <img src="/src/assets/icons/a.svg" className="mr-2" />
            </div>
            <div className=" grid content-center ml-2 mr-5">
              <p>Obsidian archernar</p>
              <p>Banking clients</p>
            </div>
            <button className=" grid content-center">
              <img src="/src/assets/icons/down.svg" />
            </button>
          </div>

          {/* app menu */}
          <div className=" mt-10 grid gap-y-10 ">
            <div>
              <p>APP</p>
            </div>
            <button className=" flex hover:border px-2 py-2">
              <img src="/src/assets/icons/comp.svg" className="mr-5" />
              <p>Compose</p>
            </button>
            <button className=" flex  hover:border px-2 py-2">
              <img src="/src/assets/icons/bell.svg" className="mr-5" />
              <p>Sent Messages</p>
            </button>
            <button className=" flex  hover:border px-2 py-2">
              <img src="/src/assets/icons/user.svg" className="mr-5" />
              <p>Users</p>
            </button>
            <button className=" flex  hover:border px-2 py-2">
              <img src="/src/assets/icons/set.svg" className="mr-5" />
              <p>Settings</p>
            </button>
          </div>
        </div>

        {/* Others */}
        <div className="grid gap-y-10 mt-10 mb-10">
          <div>
            <p>Other</p>
          </div>
          <button className=" flex  hover:border px-2 py-2">
            <img src="/src/assets/icons/contact.svg" className="mr-5" />
            <p>Contact Support</p>
          </button>
          <button className=" flex  hover:border px-2 py-2">
            <img src="/src/assets/icons/roc.svg" className="mr-5" />
            <a>oamarkets.com</a>
          </button>
        </div>
      </div>
      {/* compose page */}
      <div className="container flex flex-col justify-between  px-5 py-5">
        <div>
          <div className="flex justify-between">
            <div className=" font-bold grid content-center">
              Compose Message
            </div>
            <div className=" flex gap-x-5">
              <button>
                <img src="notification.png" className="w-10" />
              </button>
              <div className="flex">
                <div className="mr-5">
                  <p className=" font-bold">Mahali Asamah</p>
                  <p className=" text-xs text-gray-500">maa@oamarkeks.com</p>
                </div>
                <img src="Jan .png" />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-11/12 mt-5">
              <div className="mt-10">
                <input
                  className="px-4 py-4 border rounded-lg w-8/12 "
                  placeholder="Receipt, email, group"
                />
              </div>
              <div className="mt-8">
                <input
                  className="px-4 py-4  border rounded-lg w-8/12 "
                  placeholder="Notification title"
                />
              </div>
              <div className="mt-8">
                <textarea
                  className="px-4 py-2 border rounded-lg w-8/12 h-60 text-start"
                  placeholder="Content"
                />
              </div>
            </div>
            <div className="px-4 py-4 border rounded-lg mt-5 pb-28">
              <div className="border rounded-lg px-2 py-2 w-96">
                <p className="px-2">Search</p>
                <input
                  type="text"
                  placeholder="Birthday Mess"
                  className=" w-80 px-2 py-2 rounded-lg"
                />
              </div>
              <div className="mt-5 grid gap-y-5">
                <div className="px-4 py-4 text-sm border rounded-lg w-96">
                  <p className="mb-2 font-bold">Birthday message</p>
                  <div className=" text-gray-500">
                    <p>Dear [Name],</p>
                    <p>Wishing you a very happy birthday! May this special </p>
                    <p>
                      day be filled with joy, laughter, and lots of love. As{" "}
                    </p>
                    <p>you celebrate another year of life...</p>
                  </div>
                </div>
                <div className="px-4 py-4 text-sm border rounded-lg w-96">
                  <p className="mb-2 font-bold">Birthday message</p>
                  <div className=" text-gray-500">
                    <p>Dear [Name],</p>
                    <p>Wishing you a very happy birthday! May this special </p>
                    <p>
                      day be filled with joy, laughter, and lots of love. As{" "}
                    </p>
                    <p>you celebrate another year of life...</p>
                  </div>
                </div>
                <div className="px-4 py-4 text-sm border rounded-lg w-96">
                  <p className="mb-2 font-bold">Birthday message</p>
                  <div className=" text-gray-500">
                    <p>Dear [Name],</p>
                    <p>Wishing you a very happy birthday! May this special </p>
                    <p>
                      day be filled with joy, laughter, and lots of love. As{" "}
                    </p>
                    <p>you celebrate another year of life...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-between bg-slate-900 px-4 py-4 rounded-xl">
          <div className="flex gap-x-5">
            <div>
              <img src="/src/assets/icons/loading.svg" />
            </div>
            <div>
              <p className="  text-white grid content-center">
                Changes are autosaving
              </p>
            </div>
          </div>
          <div>
            <button className=" w-36 py-2  bg-orange-600 rounded-lg  text-white">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
