import React, { useState, useEffect } from "react";
import { SMART_CONTRACT_ADDRESS } from "../../lib/constants";
import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function History({ number }) {
  const [showModal, setShowModal] = useState(false);
  const { contract } = useContract(SMART_CONTRACT_ADDRESS);
  const { data: getOwnershipHistory } = useContractRead(
    contract,
    "getOwnershipHistory",
    [number]
  );

  const historyDetailFunc = (item) => {
    return (
      <>
        <p>Owner Name : {item[2]}</p>
        <p>Contact Number : {item[3]}</p>
      </>
    );
  };

  return (
    <>
      <div className="flex items-center" onClick={() => setShowModal(true)}>
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
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto flex justify-center items-center outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-full max-w-md sm:max-w-lg md:max-w-2xl">
              <div className="flex-auto w-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                  <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                      <h3 className="text-xl font-semibold text-gray-900">
                        History
                      </h3>
                      <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="default-modal"
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>

                    <div className="p-4 w-full md:p-5 space-y-4">
                      {getOwnershipHistory &&
                        getOwnershipHistory.map((item, index) => (
                          <div key={index} className="mb-2">
                            <span className="font-bold ">{index + 1}:</span>{" "}
                            <button className="group relative">
                              <span className="">{item[6]}</span>
                              <span className="hidden group-hover:inline-block z-10 absolute right-3 bg-black text-white p-2 rounded-md">
                                <p>Owner Name : {item[2]}</p>
                                <p>Contact Number : {item[3]}</p>
                              </span>
                            </button>
                          </div>
                        ))}
                      {getOwnershipHistory.length === 0 && (
                        <p className="italic">No history found</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
