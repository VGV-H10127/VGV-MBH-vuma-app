import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify';
import React, { userEffect, useState } from 'react';

const myAPI = 'vumaapi';
const path = '/versorgungswerke';

const App = () => {
  const [input, setInput] = useState("");
  const [werke, setWerke] = useState([]);
  function getWerke(e) {

    let bukrs = e.input;
    API.get(myAPI, path + "/" + bukrs)
      .then(response => {
        console.log(response)
        let newWerke = [...werke]
        newWerke.push(response)
        setWerke(newWerke)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <h1>Einfache React App mit Amplify</h1>
      <div>
        <input
          placeholder='bukrs'
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <br />
      <button onClick={() => getWerke({input})}>Get Versorgungswerk from Backend</button>
      <h2 style={{ visibility: werke.length > 0 ? 'visible' : 'hidden' }}>Response </h2>
      {

        werke.map((thisWerke, index) => {
          return (
            <div key={thisWerke.Bukrs}>
              <span><b>Das Versorgungwerk {thisWerke.Bukrs} ist : </b>{thisWerke.VwName}</span>
            </div>)
        })
      }
    </div>
  )
}
export default App;