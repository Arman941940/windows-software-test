console.log("Software test started...");

const result = 2 + 3;

if (result !== 5) {
  throw new Error("Test failed!");
}

console.log("Test passed!");
