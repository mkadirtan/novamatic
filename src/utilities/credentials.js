let credentials = {
    secret_key: "",
    token: ""
}

module.exports = {
    get: () => {
        return credentials
    },
    set: (newCredentials) => {
        credentials = newCredentials
    }
}