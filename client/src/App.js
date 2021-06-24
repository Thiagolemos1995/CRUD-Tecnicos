import React, { useState } from 'react'
import Axios from 'axios'

import "./App.css"

const App = () => {
  const [name, setName] = useState("")
  const [fone, setFone] = useState("")
  const [email, setEmail] = useState("")
  const [adress, setAdress] = useState("")

 const registerTec = () => {
    Axios.post('http://localhost:5000/create', {
      name:name,
      fone: fone,
      email: email,
      adress: adress
    }).then(()=>{
      console.log("success")
    })
 }

  return(
    <div className="App">
      <h1>Tela cadastro de Técnicos</h1>
        <div className="information">
            <label>Name: </label>
            <input type="text" id="name" onChange={(event)=>{setName(event.target.value)}}/>
            <label>Fone: </label>
            <input type="text" id="tel" onChange={(event)=>{setFone(event.target.value)}}/>
            <label>E-mail: </label>
            <input type="text" id="email" onChange={(event)=>{setEmail(event.target.value)}}/>
            <label>Adress: </label>
            <input type="text" id="adress" onChange={(event)=>{setAdress(event.target.value)}}/>
            <button type="submit" className="submitButton" onClick={registerTec}><b>Register</b></button>
        </div>
    </div>
      
      )
}

export default App;
