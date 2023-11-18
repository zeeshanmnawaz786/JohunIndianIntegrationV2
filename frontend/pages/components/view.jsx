import { SMART_CONTRACT_ADDRESS } from "../../lib/constants";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import History from "../model/history";

export default function View() {
  const address = useAddress();
  const { contract } = useContract(SMART_CONTRACT_ADDRESS);
  const { data: getAllVehicles, isLoading } = useContractRead(
    contract,
    "getAllVehicles",
    []
  );

  const filterVehicle = getAllVehicles?.filter((item) => {
    return item.owner === address;
  });

  return (
    <>
      <div className="bg-white shadow px-4 mt-10 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="h-16 w-full text-sm leading-none text-gray-800">
              <th className="font-normal text-left pl-4">S No.</th>
              <th className="font-normal text-left pl-12">Number</th>
              <th className="font-normal text-left pl-12">Modal</th>
              <th className="font-normal text-left pl-12">Color</th>
              <th className="font-normal text-left pl-20">Category</th>
              <th className="font-normal text-left pl-20">ChassisNumber</th>
              <th className="font-normal text-left pl-16">History</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {filterVehicle &&
              filterVehicle.map((item, index) => {
                return (
                  <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                    <td className="pl-4 cursor-pointer">
                      <div className="flex items-center">
                        <div className="">
                          <p className="font-medium">{index + 1}</p>
                        </div>
                      </div>
                    </td>

                    <td className="pl-12">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        {item.number}
                      </p>
                    </td>
                    <td className="pl-12">
                      <p className="font-medium">{item.model}</p>
                    </td>
                    <td className="pl-12">
                      <p className="font-medium">{item.color}</p>
                    </td>
                    <td className="pl-20">
                      <p className="font-medium">{item.category}</p>
                    </td>
                    <td className="pl-20">
                      <p className="font-medium">{item.chassisNumber}</p>
                    </td>
                    <td className="pl-16">
                      <History number={item.number} />

                      {/* <div className="flex items-center">
                        <img
                          className="shadow-md w-8 h-8 rounded-full"
                          src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                        />
                        <img
                          className="shadow-md w-8 h-8 rounded-full -ml-2"
                          src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                        />
                        <img
                          className="shadow-md w-8 h-8 rounded-full -ml-2"
                          src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                        />
                        <img
                          className="shadow-md w-8 h-8 rounded-full -ml-2"
                          src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                        />
                      </div> */}
                    </td>
                  </tr>
                );
              })}

            {/* <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
              <td className="pl-4 cursor-pointer">
                <div className="flex items-center">
                  <div className="w-10 h-10">
                    <img
                      className="w-full h-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects(2).png"
                    />
                  </div>
                  <div className="pl-4">
                    <p className="font-medium">Dev Ops</p>
                    <p className="text-xs leading-3 text-gray-600 pt-2">
                      Weissnat Group
                    </p>
                  </div>
                </div>
              </td>
              <td className="pl-12">
                <p className="text-sm font-medium leading-none text-gray-800">
                  28%
                </p>
                <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                  <div className="w-8 h-3 bg-green-progress rounded-full" />
                </div>
              </td>
              <td className="pl-12">
                <p className="font-medium">32/47</p>
                <p className="text-xs leading-3 text-gray-600 mt-2">
                  5 tasks pending
                </p>
              </td>
              <td className="pl-20">
                <p className="font-medium">$13,000</p>
                <p className="text-xs leading-3 text-gray-600 mt-2">
                  $4,200 left
                </p>
              </td>
              <td className="pl-20">
                <p className="font-medium">22.12.21</p>
                <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
              </td>
              <td className="pl-16">
                <div className="flex items-center">
                  <img
                    className="shadow-md w-8 h-8 rounded-full"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                  />
                  <img
                    className="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                  />
                  <img
                    className="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                  />
                  <img
                    className="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                  />
                </div>
              </td>
              <td className="px-7 2xl:px-0">
                {show == 2 ? (
                  <button
                    onClick={() => setShow(null)}
                    className="focus:outline-none pl-7"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                        stroke="#A1A1AA"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                        stroke="#A1A1AA"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                        stroke="#A1A1AA"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={() => setShow(2)}
                    className="focus:outline-none pl-7"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                        stroke="#A1A1AA"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                        stroke="#A1A1AA"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                        stroke="#A1A1AA"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
                {show == 2 && (
                  <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                    <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                      <p>Edit</p>
                    </div>
                    <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                      <p>Delete</p>
                    </div>
                  </div>
                )}
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}
