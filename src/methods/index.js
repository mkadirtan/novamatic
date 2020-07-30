const axios = require("axios");
const methods = require("./methods");
const { Builder } = require("xml2js");
const credentials = require("../utilities/credentials");

// All requests use "GET" method.
async function createRequestAsync(type, queryParameters){
    const method = methods[type];
    if(!method) { throw new Error("Can't find method: " + type) }

    const { url } = method;
    return axios.get(url, { params: {...queryParameters, ...credentials.get()} });
}

async function createXMLResponseAsync(type, parameters){
    const builder = new Builder({ explicitArray: false });
    return builder.buildObject(parameters);
}

module.exports = {
    createRequestAsync,
    createXMLResponseAsync
}