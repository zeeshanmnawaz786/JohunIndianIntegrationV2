export const SMART_CONTRACT_ADDRESS =
  "0x2af4F3EDf7c5f688717562A9194109F19a6ceE8b";
export const SMART_CONTRACT_ABI = [
  {
    type: "constructor",
    name: "",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "approveVehicleRegistration",
    inputs: [
      {
        type: "string",
        name: "_number",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getAllVehicles",
    inputs: [],
    outputs: [
      {
        type: "tuple[]",
        name: "",
        components: [
          {
            type: "string",
            name: "ownerName",
            internalType: "string",
          },
          {
            type: "string",
            name: "contact",
            internalType: "string",
          },
          {
            type: "string",
            name: "model",
            internalType: "string",
          },
          {
            type: "string",
            name: "color",
            internalType: "string",
          },
          {
            type: "string",
            name: "number",
            internalType: "string",
          },
          {
            type: "string",
            name: "category",
            internalType: "string",
          },
          {
            type: "string",
            name: "chassisNumber",
            internalType: "string",
          },
          {
            type: "address",
            name: "owner",
            internalType: "address",
          },
          {
            type: "uint8",
            name: "status",
            internalType: "enum VehicleManagement.RequestStatus",
          },
        ],
        internalType: "struct VehicleManagement.Vehicle[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getOwnershipHistory",
    inputs: [
      {
        type: "string",
        name: "_number",
        internalType: "string",
      },
    ],
    outputs: [
      {
        type: "tuple[]",
        name: "",
        components: [
          {
            type: "string",
            name: "number",
            internalType: "string",
          },
          {
            type: "address",
            name: "newOwner",
            internalType: "address",
          },
          {
            type: "string",
            name: "newOwnerName",
            internalType: "string",
          },
          {
            type: "string",
            name: "newOwnerContact",
            internalType: "string",
          },
          {
            type: "string",
            name: "previousOwnerName",
            internalType: "string",
          },
          {
            type: "string",
            name: "previousOwnerContact",
            internalType: "string",
          },
          {
            type: "address",
            name: "previousOwnerAddress",
            internalType: "address",
          },
        ],
        internalType: "struct VehicleManagement.OwnershipRequest[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ownershipHistory",
    inputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "number",
        internalType: "string",
      },
      {
        type: "address",
        name: "newOwner",
        internalType: "address",
      },
      {
        type: "string",
        name: "newOwnerName",
        internalType: "string",
      },
      {
        type: "string",
        name: "newOwnerContact",
        internalType: "string",
      },
      {
        type: "string",
        name: "previousOwnerName",
        internalType: "string",
      },
      {
        type: "string",
        name: "previousOwnerContact",
        internalType: "string",
      },
      {
        type: "address",
        name: "previousOwnerAddress",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "registerUser",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "rejectVehicleRegistration",
    inputs: [
      {
        type: "string",
        name: "_number",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "requestVehicleRegistration",
    inputs: [
      {
        type: "string",
        name: "_ownerName",
        internalType: "string",
      },
      {
        type: "string",
        name: "_contact",
        internalType: "string",
      },
      {
        type: "string",
        name: "_number",
        internalType: "string",
      },
      {
        type: "string",
        name: "_model",
        internalType: "string",
      },
      {
        type: "string",
        name: "_color",
        internalType: "string",
      },
      {
        type: "string",
        name: "_category",
        internalType: "string",
      },
      {
        type: "string",
        name: "_chassisNumber",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "userCounter",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "users",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "registered",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "vehicleCounter",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "vehicleOwnershipTransfer",
    inputs: [
      {
        type: "string",
        name: "_number",
        internalType: "string",
      },
      {
        type: "address",
        name: "_newOwner",
        internalType: "address",
      },
      {
        type: "string",
        name: "_newOwnerName",
        internalType: "string",
      },
      {
        type: "string",
        name: "_newOwnerContact",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "vehicles",
    inputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "ownerName",
        internalType: "string",
      },
      {
        type: "string",
        name: "contact",
        internalType: "string",
      },
      {
        type: "string",
        name: "model",
        internalType: "string",
      },
      {
        type: "string",
        name: "color",
        internalType: "string",
      },
      {
        type: "string",
        name: "number",
        internalType: "string",
      },
      {
        type: "string",
        name: "category",
        internalType: "string",
      },
      {
        type: "string",
        name: "chassisNumber",
        internalType: "string",
      },
      {
        type: "address",
        name: "owner",
        internalType: "address",
      },
      {
        type: "uint8",
        name: "status",
        internalType: "enum VehicleManagement.RequestStatus",
      },
    ],
    stateMutability: "view",
  },
];
