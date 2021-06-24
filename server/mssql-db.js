
sql = require('mssql')

const dbConfig = {
    user: "sa",
    password: "123456",
    server: "DESKTOP-5SE6RM7",
    database: "tecnicos",
    port: 1433,
    options: {
        trustServerCertificate: true
    },
}

const msSqlConn = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => {
        console.log("Connected to MSSQL")
        return pool
    })
    .catch(err => {
        console.log("Database Connection Failed! Bad Config:", err)
    })

module.exports = {msSqlConn}