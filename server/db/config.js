exports.sql = {
    user: 'DESKTOP-36V82EH\\ALEXNGUYEN',
    password: '',
    server: 'localhost', 
    database: 'Test',
    port: 1433,
    options: {
        encrypt: false
    }
}
 
exports.mongo = {
    "connectionString": "mongodb://mongo:27017/Test",
    // "connectionString": "mongodb://localhost:27017/Test",
    "secret": "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
}