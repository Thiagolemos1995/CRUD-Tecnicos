const express = require('express')
const app = express()
const sql = require('mssql')

var dbConfig = {
    user: "sa",
    password: "123456",
    server: "DESKTOP-5SE6RM7",
    database: "tecnicos",
    port: 1433,
    options: {
        trustServerCertificate: true,
    },
}

app.post('/create', (req, res) => {
    const name = req.body.name
    const fone = req.body.fone
    const email = req.body.email
    const adress = req.body.adress

    sql.connect(dbConfig).then(()=>{
        sql.query(`INSERT INTO lista_tecnicos (nome, telefone, email, endereço) VALUES (? ,? ,? , ?)`,
        [name, fone, email, adress],
         (err, result) => {
            if(err) console.log(err)
            res.send("Values inserted")
        })
        sql.close()
    })
})

app.get('/', (req, res)=>{
    res.send('<h1>The server is up and running at port 5000</h1>')
})

const connStr = "Server=DESKTOP-5SE6RM7;Database=tecnicos; User ID=sa; Password=123456"

// sql.connect(dbConfig)
//    .then(conn => console.log("conectou!"))
//    .catch(err => console.log("erro! " + err));

app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
})
