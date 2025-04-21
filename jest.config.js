/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    testEnvironment: "node",
    transform: {
        "^.+\.tsx?$": ["ts-jest", {}],
    },
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
};
