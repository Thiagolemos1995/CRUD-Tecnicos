const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const { msSqlConn } = require('./mssql-db')



app.post('/create', (req, res) => {
    const name = req.body.name
    const fone = req.body.fone
    const email = req.body.email
    const adress = req.body.adress

    console.log(`${name},${fone},${email},${adress}`)

    registerData(name, fone, email, adress)
})


app.get('/', (req, res)=>{
    res.send('<h1>The server is up and running at port 5000</h1>')
    })

app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
})


const getData = async (req, res) =>{
    try{
        const pool = await msSqlConn
        const result = await pool.request()
                .query('SELECT * FROM [dbo].[lista_tecnicos]')
        if(result){
            console.dir(result)
        }else{
            console.log("Se fudeu!")
        }
    }catch (err){
        console.log(res)
        console.log(err)
    }
}
const registerData = async (nome, fone, email, endereco, req,res) => {
    try {
        if(nome != null && fone && email != null && endereco != null) {
          const pool = await msSqlConn
          const result = await pool.request()
            //  .input('nome',sql.VarChar , nome)
            //  .input('telefone',sql.VarChar , fone)
            //  .input('email',sql.VarChar , email)
            //  .input('endereco',sql.VarChar, endereco)
            .query(`INSERT INTO [tecnicos].[dbo].[lista_tecnicos] ([nome],[telefone],[email],[endereco]) VALUES ('asd','asd','asd','asd')`)
        } else {
          console.log('Please fill all the details!')
        }
      } catch (error) {
        console.log(error)
    }
}