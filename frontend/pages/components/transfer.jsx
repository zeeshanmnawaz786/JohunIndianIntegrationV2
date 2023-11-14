export default function Transfer() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white  rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
        <p className="text-2xl font-extrabold leading-6 text-gray-800">
          Transfer Vehicle Ownership
        </p>
        <p className="text-sm mt-4 font-medium leading-none text-gray-500">
          Transfer your ownership to a new owner
        </p>
        <div className="w-full flex items-center justify-between py-5">
          <hr className="w-full bg-gray-400" />

          <hr className="w-full bg-gray-400  " />
        </div>
        <div className="mt-4">
          <p className="text-base font-medium leading-none text-gray-800">
            Vehicle Number
          </p>
          <input
            placeholder="xxxxxxx"
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
          />
          <p className="mt-3 text-xs leading-3 text-gray-600">
            Set a simple and precise meta title
          </p>
        </div>
        <div className="mt-4">
          <p className="text-base font-medium leading-none text-gray-800">
            New Owner Address
          </p>
          <input
            placeholder="0x00000000000000"
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
          />
          <p className="mt-3 text-xs leading-3 text-gray-600">
            Set a simple and precise meta title
          </p>
        </div>
        <div className="mt-4">
          <p className="text-base font-medium leading-none text-gray-800">
            Old Owner Address
          </p>
          <input
            placeholder="0x00000000000000"
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
          />
          <p className="mt-3 text-xs leading-3 text-gray-600">
            Set a simple and precise meta title
          </p>
        </div>
        <div className="mt-8">
          <button
            role="button"
            aria-label="create my account"
            className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
          >
            Change
          </button>
        </div>
      </div>
    </div>
  );
}
