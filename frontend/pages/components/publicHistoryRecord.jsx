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
      <div className="relative bg-[#14000b] text-white rounded-lg shadow p-4 md:p-5">
        <span className="font-bold mb-0 pb-0">History</span>
        {getOwnershipHistory && getOwnershipHistory?.length > 0 ? (
          getOwnershipHistory.map((item, index) => (
            <div key={index} className="">
              <span className="text-start text-xs mt-0 pt-0 tracking-normal text-white ">
                {item}
              </span>
            </div>
          ))
        ) : (
          <p className="italic">No history found</p>
        )}
      </div>
    </>
  );
}
