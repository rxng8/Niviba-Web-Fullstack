exports.development = {
    // "connectionString": "mongodb://localhost:27017/Test",
    "connectionString": "mongodb://mongo:27017/Test",
    "secret": "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
}

exports.production = {
    "connectionString": "mongodb://mongo:27017/Test",
    "secret": "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
}