import React, { useEffect, useState } from "react";

import { findUser } from "../../services/api";
import "./style.css";

export default function FindUserView() {
  const [userName, setUserName] = useState("");
  const [idade, setIdade] = useState("");
  const [isLoading, setIsLoading] = useState(false);
 
  const handleChange = (event) => {
    setUserName(event.target.value);
    console.log(event.target.value)
  };

  const handleSubmit = (event) => {
    // alert("Um nome foi enviado: " + userName);
    event.preventDefault();

    findUser(userName)
    .then((r) => {
      setIdade(r.data.age)
      setIsLoading(true)
    })
    .catch((e) => {
      setIsLoading(true)
      console.log(e)
    })
    
  };

  return (
    <div>
      <h1>Nome</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={userName}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>

      <div>
        <h1>Idade</h1>
        {
          (!isLoading && idade) ? (
            <h3>{idade}</h3> :
            <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>


          )
        }
      </div>
    </div>
  );
}
