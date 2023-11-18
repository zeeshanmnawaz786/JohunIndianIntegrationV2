export const SMART_CONTRACT_ADDRESS =
  "0xfE7f35052AeD700137922D4daa237BA90716291C";
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
    name: "getAllVehicleRequests",
    inputs: [],
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
        ],
        internalType: "struct VehicleManagement.VehicleRequest[]",
      },
    ],
    stateMutability: "view",
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
        ],
        internalType: "struct VehicleManagement.Vehicle[]",
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
    name: "requestNumbers",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
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
    ],
    stateMutability: "view",
  },
];
