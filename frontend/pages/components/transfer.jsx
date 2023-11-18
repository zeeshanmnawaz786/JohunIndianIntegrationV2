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
  console.log(
    "🚀 ~ file: transfer.jsx:18 ~ Transfer ~ transferOwnerShipData:",
    transferOwnerShipData
  );
  const { data: getAllVehicles } = useContractRead(
    contract,
    "getAllVehicles",
    []
  );

  const filterVehicle = getAllVehicles?.filter((item) => {
    return item.owner === address;
  });

  const { mutateAsync: vehicleOwnershipTransfer, isLoading } = useContractWrite(
    contract,
    "vehicleOwnershipTransfer"
  );

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
      <div className="bg-white  rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
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
                return <option value={item.number}>{item.number}</option>;
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
          <button
            onClick={callVehicleOwnershipTransfer}
            className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
          >
            Change
          </button>
        </div>
      </div>
    </div>
  );
}
