import React from "react";

function Compose() {
  return (
    <div className="flex">
      {/* Side Bar */}
      <div className=" flex flex-col justify-between px-5 py-5 text-white bg-slate-900 w-96 h-screen">
        <div>
          <div className=" flex ">
            <div>
              <img src="a.png" className="mr-2" />
            </div>
            <div className=" grid content-center ml-2 mr-5">
              <p>Obsidian archernar</p>
              <p>Banking clients</p>
            </div>
            <button className=" grid content-center">
              <img src="down.png" />
            </button>
          </div>

          {/* app menu */}
          <div className=" mt-10 grid gap-y-10 ">
            <div>
              <p>APP</p>
            </div>
            <button className=" flex hover:border px-2 py-2">
              <img src="arrow.png" className="mr-5" />
              <p>Compose</p>
            </button>
            <button className=" flex  hover:border px-2 py-2">
              <img src="bell.png" className="mr-5" />
              <p>Sent Messages</p>
            </button>
            <button className=" flex  hover:border px-2 py-2">
              <img src="user.png" className="mr-5" />
              <p>Users</p>
            </button>
            <button className=" flex  hover:border px-2 py-2">
              <img src="set.png" className="mr-5" />
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
            <img src="contact.png" className="mr-5" />
            <p>Contact Support</p>
          </button>
          <button className=" flex  hover:border px-2 py-2">
            <img src="roc.png" className="mr-5" />
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
          <div></div>
          <div className=" grid gap-y-6 mt-10">
            <input
              className="px-4 py-2 border rounded-lg w-6/12"
              placeholder="Receipt, email, group"
            />
            <input
              className="px-4 py-2  border rounded-lg w-6/12 "
              placeholder="Notification title"
            />
            <textarea
              className="px-4 py-2 border rounded-lg w-6/12 h-60 text-start"
              placeholder="Content"
            />
          </div>
        </div>
        <div className=" flex justify-between bg-slate-900 px-4 py-4 rounded-xl">
          <div className="flex gap-x-5">
            <div>
              <img src="load.png" />
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

export default Compose;
