module.exports = {
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ['./rtl.setup.js'],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
  }
};