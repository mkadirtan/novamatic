const credentials = require("./src/utilities/credentials");
const methods = require("./src/methods");

module.exports = {
    setCredentials: credentials.set,
    createRequestAsync: methods.createRequestAsync,
    createXMLResponseAsync: methods.createXMLResponseAsync,
}