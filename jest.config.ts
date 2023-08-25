module.exports = {
  preset: "ts-jest", // Use ts-jest for all .ts files
  testEnvironment: "node", // Use the node environment
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
