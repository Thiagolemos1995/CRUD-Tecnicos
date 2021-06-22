import React, { useState } from 'react'

import "./App.css"

const App = () => {
  const [name, setName] = useState("")
  const [fone, setFone] = useState("")
  const [email, setEmail] = useState("")
  const [adress, setAdress] = useState("")

  const displayInfo = () => {
    console.log(name + fone + email + adress)
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
            <button type="submit" className="submitButton" onClick={displayInfo}><b>Register</b></button>
        </div>
    </div>
      
      )
}

export default App;
