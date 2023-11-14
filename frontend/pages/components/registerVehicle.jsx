import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { SMART_CONTRACT_ADDRESS } from "../../lib/constants";
import { useState } from "react";

export default function RegisterVehicle() {
  const [vehicleData, setVehicleData] = useState({
    number: "",
    model: "",
    color: "",
    category: "",
    chassisNumber: "",
  });
  const { contract } = useContract(SMART_CONTRACT_ADDRESS);
  const {
    mutateAsync: requestVehicleRegistration,
    isLoading: isLoadingRequestVehicleRegistration,
  } = useContractWrite(contract, "requestVehicleRegistration");

  const callRequestVehicleRegistration = async () => {
    try {
      const data = await requestVehicleRegistration({
        args: [
          vehicleData.number,
          vehicleData.model,
          vehicleData.color,
          vehicleData.category,
          vehicleData.chassisNumber,
        ],
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="px-2 py-2 pb-10 ">
        <div className="flex flex-no-wrap items-start">
          <div className="w-full ">
            {/* end */}
            <div className="mt-10 px-7">
              <p className="text-xl font-semibold leading-tight text-gray-800">
                Vehicle Registration
              </p>
              <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                <div>
                  <p className="text-base font-medium leading-none text-gray-800">
                    Vehicle Number
                  </p>
                  <input
                    placeholder="xxxxxxxxxxxxxxxxxxxx"
                    name="number"
                    onChange={handleInputChange}
                    className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                  />
                  <p className="mt-3 text-xs leading-3 text-gray-600">
                    Set a simple and precise meta title
                  </p>
                </div>
                <div>
                  <p className="text-base font-medium leading-none text-gray-800">
                    Vehicle Model
                  </p>
                  <input
                    placeholder="xxxxxxxxxxxxxxxxxxxx"
                    name="model"
                    onChange={handleInputChange}
                    className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                  />
                  <p className="mt-3 text-xs leading-3 text-gray-600">
                    Set a simple and precise meta title
                  </p>
                </div>
                <div>
                  <p className="text-base font-medium leading-none text-gray-800">
                    Vehicle Color
                  </p>
                  <input
                    placeholder="xxxxxxxxxxxxxxxxxxxx"
                    name="color"
                    onChange={handleInputChange}
                    className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                  />
                  <p className="mt-3 text-xs leading-3 text-gray-600">
                    Set a simple and precise meta title
                  </p>
                </div>
                <div>
                  <p className="text-base font-medium leading-none text-gray-800">
                    Vehicle Category
                  </p>
                  <input
                    placeholder="xxxxxxxxxxxxxxxxxxxx"
                    name="category"
                    onChange={handleInputChange}
                    className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                  />
                  <p className="mt-3 text-xs leading-[15px] text-gray-600">
                    Set words that are related to the product
                  </p>
                </div>
                <div>
                  <p className="text-base font-medium leading-none text-gray-800">
                    Vehicle Chassis Number
                  </p>
                  <input
                    placeholder="xxxxxxxxxxxxxxxxxxxx"
                    name="chassisNumber"
                    onChange={handleInputChange}
                    className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                  />
                  <p className="mt-3 text-xs leading-[15px] text-gray-600">
                    Set words that are related to the product
                  </p>
                </div>
                <div>
                  {isLoadingRequestVehicleRegistration ? (
                    <button
                      type="button"
                      className="inline-flex items-center justify-center bg-indigo-700 whitespace-nowrap lg:mt-8 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full "
                      // class="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 rounded-md shadow cursor-not-allowed hover:bg-indigo-600"
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
                      onClick={callRequestVehicleRegistration}
                      className="bg-indigo-700 whitespace-nowrap lg:mt-8 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full "
                    >
                      Register Vehicle
                    </button>
                  )}
                </div>
              </div>
            </div>
            <hr className="h-[1px] bg-gray-100 my-14" />
          </div>
        </div>
      </div>
    </>
  );
}
