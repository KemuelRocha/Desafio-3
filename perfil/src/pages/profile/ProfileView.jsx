import React, { useEffect, useState } from "react";

import { getUserData } from "../../services/api";

import "./style.css";

function Profile() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUserData()
      .then(function (response) {
        setIsLoading(false);

        console.log(response.data);

        setUser(response.data.results[0]);
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <>
     <div >
        <div id="tela-usuario" className="container-fluid vh-100 profile-content">

<div className="container d-flex flex-column  align-items-center">

    <div>
        <img src="{}" width="160"   alt="" />
    </div>

    <div className="mt-2 mb-1">
        <span className="text">UserName, IDADE</span>
    </div>
    
    <div className="mt-2 mb-1">
        <span className="text"> PETROLINA, BRASIL</span>
    </div>

    <div className="d-flex flex-row">
       <div className="me-4">
            <i className="fa fa-phone icon"></i>
            <span className="numero-contato">Numero-con</span>
       </div>

       <div>
            <i className="fa fa-envelope icon"></i>
            <span className="numero-contato">USER EMail</span>
       </div>

    </div>

</div>
</div>
</div>
     

      {/* {isLoading && (
       
      )} */}
    </>
  );
}

export default Profile;
