// export const SMART_CONTRACT_ADDRESS =
//   "0x9b0Cb0fE362b6089B03B8A8621CaA3914aC71527";
export const SMART_CONTRACT_ADDRESS =
  "0xBAb05c19FfE51b187b9Be8019fd9F9c3f52558a3";
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
        type: "address[]",
        name: "",
        internalType: "address[]",
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
        type: "address",
        name: "",
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
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "vehicleRequests",
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
        name: "number",
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
        name: "requester",
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
