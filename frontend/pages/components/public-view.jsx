import { SMART_CONTRACT_ADDRESS } from "../../lib/constants";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import History from "../model/history";

export default function PublicView() {
  const address = useAddress();
  const { contract } = useContract(SMART_CONTRACT_ADDRESS);
  const { data: getAllVehicles, isLoading } = useContractRead(
    contract,
    "getAllVehicles",
    []
  );

  return (
    <>
      <div className="bg-white shadow px-4 lg:mt-0 md:mt-10 mt-20 sm:mt-0 md:px-10 lg:pt-0 md:pt-0 pb-5 overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="h-16 w-full text-sm leading-none text-gray-800">
              <th className="font-normal text-left pl-4">S No.</th>
              <th className="font-normal text-left pl-2 md:pl-12">Number</th>
              <th className="font-normal text-left pl-2 md:pl-12">Modal</th>
              <th className="font-normal text-left pl-2 md:pl-12">Color</th>
              <th className="font-normal text-left pl-4 md:pl-20">Category</th>
              <th className="font-normal text-left pl-4 md:pl-20">
                ChassisNumber
              </th>
              <th className="font-normal text-left pl-4 md:pl-16">History</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {getAllVehicles &&
              getAllVehicles.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                  >
                    <td className="pl-4 md:pl-2 cursor-pointer">
                      <div className="flex items-center">
                        <div className="">
                          <p className="font-medium">{index + 1}</p>
                        </div>
                      </div>
                    </td>

                    <td className="pl-2 md:pl-12">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        {item.number}
                      </p>
                    </td>
                    <td className="pl-2 md:pl-12">
                      <p className="font-medium">{item.model}</p>
                    </td>
                    <td className="pl-2 md:pl-12">
                      <p className="font-medium">{item.color}</p>
                    </td>
                    <td className="pl-4 md:pl-20">
                      <p className="font-medium">{item.category}</p>
                    </td>
                    <td className="pl-4 md:pl-20">
                      <p className="font-medium">{item.chassisNumber}</p>
                    </td>
                    <td className="pl-4 md:pl-16">
                      <History number={item.number} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
