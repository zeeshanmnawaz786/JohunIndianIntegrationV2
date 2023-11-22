import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { SMART_CONTRACT_ADDRESS } from "../../lib/constants";
import { useState } from "react";

export default function Transfer() {
  const { contract } = useContract(SMART_CONTRACT_ADDRESS);
  const address = useAddress();

  const [transferOwnerShipData, setTransferOwnerShipData] = useState({
    number: "",
    newOwner: "",
  });

  const { data: getAllVehicles } = useContractRead(
    contract,
    "getAllVehicles",
    []
  );

  const filterVehicle = getAllVehicles?.filter((item) => {
    return item.owner === address;
  });

  const {
    mutateAsync: vehicleOwnershipTransfer,
    isLoading: isLoadingVehicleOwnershipTransfer,
  } = useContractWrite(contract, "vehicleOwnershipTransfer");

  const callVehicleOwnershipTransfer = async () => {
    if (
      transferOwnerShipData.number === "" ||
      transferOwnerShipData.newOwner === ""
    ) {
      return alert("field is empty");
    } else {
      try {
        const data = await vehicleOwnershipTransfer({
          args: [transferOwnerShipData.number, transferOwnerShipData.newOwner],
        });
        transferOwnerShipData.number === "";
        transferOwnerShipData.newOwner === "";
        console.info("contract call successs", data);
      } catch (err) {
        console.error("contract call failure", err.reason);
        alert(err.reason);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTransferOwnerShipData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white  rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-5">
        <p className="text-2xl font-extrabold leading-6 text-gray-800">
          Transfer Vehicle Ownership
        </p>
        <p className="text-sm mt-4 font-medium leading-none text-gray-500">
          Transfer your ownership to a new owner
        </p>
        <div className="w-full flex items-center justify-between py-5">
          <hr className="w-full bg-gray-400" />

          <hr className="w-full bg-gray-400" />
        </div>
        <div className="mt-4">
          <label
            htmlFor="vehicleNumber"
            className="text-base font-medium leading-none text-gray-800"
          >
            Vehicle Number
          </label>
          <select
            id="vehicleNumber"
            onChange={handleInputChange}
            name="number"
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
          >
            <option value="" selected disabled>
              Select a vehicle number
            </option>

            {filterVehicle &&
              filterVehicle.map((item) => {
                return (
                  <option key={index} value={item.number}>
                    {item.number}
                  </option>
                );
              })}
          </select>
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
            onChange={handleInputChange}
            name="newOwner"
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
          />
          <p className="mt-3 text-xs leading-3 text-gray-600">
            Set a simple and precise meta title
          </p>
        </div>
        <div className="mt-8">
          {isLoadingVehicleOwnershipTransfer ? (
            <button
              type="button"
              className="inline-flex items-center justify-center bg-indigo-700 whitespace-nowrap rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white  w-full "
              disabled=""
            >
              <svg
                class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading...
            </button>
          ) : (
            <button
              onClick={callVehicleOwnershipTransfer}
              className="focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
            >
              Transfer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
