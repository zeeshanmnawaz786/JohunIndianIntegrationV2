const { ethers } = require("hardhat");

describe("VehicleManagement Smart Contract", function () {
  let vehicleManagement, owner, a1, a2, a3, a4, a5, a6, a7;

  before(async function () {
    [owner, a1, a2, a3, a4, a5, a6, a7] = await ethers.getSigners();

    const VehicleManagement = await ethers.getContractFactory(
      "VehicleManagement"
    );
    vehicleManagement = await VehicleManagement.deploy(a7.getAddress());
    await vehicleManagement.waitForDeployment();
  });

  it("registerUser", async function () {
    await vehicleManagement.connect(a1).registerUser();
  });
  it("registerUser", async function () {
    await vehicleManagement.connect(a2).registerUser();
  });
  it("registerUser", async function () {
    await vehicleManagement.connect(a3).registerUser();
  });
  it("registerUser", async function () {
    await vehicleManagement.connect(a4).registerUser();
  });

  it("requestVehicleRegistration", async function () {
    await vehicleManagement
      .connect(a1)
      .requestVehicleRegistration("8030", "2000", "black", "bike", "12345678");
  });
  it("requestVehicleRegistration", async function () {
    await vehicleManagement
      .connect(a1)
      .requestVehicleRegistration("8040", "2000", "black", "bike", "12345678");
  });
  // it("rejectVehicleRegistration", async function () {
  //   await vehicleManagement.connect(owner).rejectVehicleRegistration("8030");
  // });

  it("approveVehicleRegistration", async function () {
    await vehicleManagement.connect(owner).approveVehicleRegistration("8030");
  });
  it("approveVehicleRegistration", async function () {
    await vehicleManagement.connect(owner).approveVehicleRegistration("8040");
  });

  it("getAllVehicles", async function () {
    // console.log(await vehicleManagement.connect(owner).getAllVehicleRequests());
    console.log(await vehicleManagement.connect(a1).getAllVehicles());
  });
  it("userCounter", async function () {
    // console.log(await vehicleManagement.connect(owner).getAllVehicleRequests());
    console.log(await vehicleManagement.connect(a1).userCounter());
  });

  // it("vehicleOwnershipTransfer", async function () {
  //   await vehicleManagement
  //     .connect(a1)
  //     .vehicleOwnershipTransfer("8030", a2.getAddress());
  //   console.log(await vehicleManagement.connect(a1).vehicles("8030"));
  // });
  // it("vehicleOwnershipTransfer", async function () {
  //   await vehicleManagement
  //     .connect(a2)
  //     .vehicleOwnershipTransfer("8030", a3.getAddress());
  //   console.log(await vehicleManagement.connect(a2).vehicles("8030"));
  // });

  // it("ownershipHistory", async function () {
  //   console.log(
  //     await vehicleManagement.connect(a1).ownershipHistory("8030", 0)
  //   );
  //   console.log(
  //     await vehicleManagement.connect(a1).ownershipHistory("8030", 1)
  //   );
  // });
});
