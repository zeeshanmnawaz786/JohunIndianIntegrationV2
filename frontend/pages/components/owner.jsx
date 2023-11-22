import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { SMART_CONTRACT_ADDRESS } from "../../lib/constants";

export default function Owner() {
  const { contract } = useContract(SMART_CONTRACT_ADDRESS);
  const { data: getAllVehicleRequests, isLoading } = useContractRead(
    contract,
    "getAllVehicleRequests",
    []
  );
  console.log(
    "🚀 ~ file: owner.jsx:8 ~ Owner ~ getAllVehicleRequests:",
    getAllVehicleRequests
  );

  const {
    mutateAsync: approveVehicleRegistration,
    isLoading: isLoadingAcceptVehicleRegistration,
  } = useContractWrite(contract, "approveVehicleRegistration");

  const callApprove = async (vehicleNumber) => {
    try {
      const data = await approveVehicleRegistration({ args: [vehicleNumber] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const {
    mutateAsync: rejectVehicleRegistration,
    isLoading: isLoadingRejectVehicleRegistration,
  } = useContractWrite(contract, "rejectVehicleRegistration");

  const callReject = async (vehicleNumber) => {
    try {
      const data = await rejectVehicleRegistration({ args: [vehicleNumber] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  return (
    <>
      <div className="bg-white shadow mt-20 px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="h-16 w-full text-sm leading-none text-gray-800">
              <th className="font-normal text-left pl-4">S No.</th>
              <th className="font-normal text-left pl-12">Number</th>
              <th className="font-normal text-left pl-12">Modal</th>
              <th className="font-normal text-left pl-12">Color</th>
              <th className="font-normal text-left pl-12">Category</th>
              <th className="font-normal text-left pl-12">ChassisNumber</th>
              <th className="font-normal text-left pl-12">Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {getAllVehicleRequests &&
              getAllVehicleRequests.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                  >
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
                    <td className="pl-12">
                      <p className="font-medium">{item.category}</p>
                    </td>
                    <td className="pl-12">
                      <p className="font-medium">{item.chassisNumber}</p>
                    </td>
                    <td className="pl-12">
                      {isLoadingAcceptVehicleRegistration ||
                      isLoadingRejectVehicleRegistration ? (
                        <svg
                          aria-hidden="true"
                          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      ) : (
                        <>
                          <button
                            onClick={() => {
                              callApprove(item.number);
                            }}
                            className="bg-green-700 mr-3 whitespace-nowrap  rounded hover:bg-green-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white "
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => {
                              callReject(item.number);
                            }}
                            className="bg-red-700 whitespace-nowrap  rounded hover:bg-red-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}

            {/* <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
              <td className="pl-4 cursor-pointer">
                <div className="flex items-center">
                  <div className="">
                    <p className="font-medium">1</p>
                  </div>
                </div>
              </td>
              <td className="pl-12">
                <p className="text-sm font-medium leading-none text-gray-800">
                  8030
                </p>
              </td>
              <td className="pl-12">
                <p className="font-medium">2023</p>
              </td>
              <td className="pl-12">
                <p className="font-medium">Red</p>
              </td>
              <td className="pl-12">
                <p className="font-medium">Car</p>
              </td>
              <td className="pl-12">
                <p className="font-medium">221434354</p>
              </td>
              <td className="pl-12">
                <button className="bg-green-700 mr-3 whitespace-nowrap  rounded hover:bg-green-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white ">
                  Accept
                </button>
                <button className="bg-red-700 whitespace-nowrap  rounded hover:bg-red-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white">
                  Reject
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}
