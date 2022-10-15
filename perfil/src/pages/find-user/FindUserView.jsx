import React, { useEffect, useState } from "react";

import { findUser } from "../../services/api";
import "./style.css";

export default function FindUserView() {
  const [userName, setUserName] = useState("");
  const [idade, setIdade] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setUserName(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => { 
    event.preventDefault()
    setIsLoading(true);

    findUser(userName)
      .then((r) => {
        setIdade(r.data.age);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
      });
  };

  return (
    <div className="d-flex flex-column  align-items-center pt-5 vh-100 find-user-content ">
      
    <div>
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

      <div className="mt-2">
      
        {!isLoading ? (
          <h5>Idade: {idade}</h5>  
        ) : (
          <div>
            <div className="spinner-border" role="status">
            </div>
          </div>
        )}
      </div>
    </div>

    
    </div>
  );
}
