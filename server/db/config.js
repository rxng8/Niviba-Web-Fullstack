exports.mongo_without_docker = {
    "connectionString": "mongodb://localhost:27017/Test",
    "secret": "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
}

exports.mongo_with_docker = {
    "connectionString": "mongodb://mongo:27017/Test",
    "secret": "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
}

exports.mongo_production = {
    "connectionString": "mongodb+srv://rxng:dung1234@cluster0-fufvv.mongodb.net/Niviba?retryWrites=true&w=majority",
    "secret": "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
}