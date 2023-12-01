import { SMART_CONTRACT_ADDRESS } from "../../lib/constants";
import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function PublicHistory({ number }) {
  const { contract } = useContract(SMART_CONTRACT_ADDRESS);
  const { data: getOwnershipHistory } = useContractRead(
    contract,
    "getOwnershipHistory",
    [number]
  );

  return (
    <>
      <div className="bg-[#14000b] text-white rounded-lg shadow p-4 md:p-5">
        <span className="font-bold mb-0 pb-0">History</span>
        {getOwnershipHistory && getOwnershipHistory?.length > 0 ? (
          getOwnershipHistory.map((item, index) => (
            <div key={index}>
              {/* <span className="text-start text-xs mt-0 pt-0 tracking-normal text-white ">
                {item}
              </span> */}
              <button className="group relative">
                <span className="text-xs">{item[6]}</span>
                <span className="hidden text-sm group-hover:inline-block absolute z-10 right-3 bg-black text-white p-2 rounded-md">
                  <p>Owner Name : {item[2]}</p>
                  <p>Contact Number : {item[3]}</p>
                </span>
              </button>
            </div>
          ))
        ) : (
          <p className="italic">No history found</p>
        )}
      </div>
    </>
  );
}
