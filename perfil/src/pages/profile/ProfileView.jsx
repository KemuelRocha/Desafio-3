import React, { useEffect, useState } from "react";

import { getUserData } from "../../services/api";

import "./style.css";

function Profile() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserData()
      .then(function (response) {
        setIsLoading(false); 

        setUser(response.data.results[0]);
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <>
      {!isLoading ? (
        <div>
          <div>
            <div
              id="tela-usuario"
              className="container-fluid vh-100 profile-content"
            >
              <div className="container d-flex flex-column  align-items-center">
                <div className="profile-image   ">
                  <img src={user.picture.large} width="180" alt="" />
                </div>

                <div className="mt-2 user-name">
                  <span className="text ">
                    {user.name.first + " " + user.name.last}, {user.dob.age}
                  </span>
                </div>

                <div >
                  <span className="text"> {user.location.city}, {user.location.country}</span>
                </div>

                <div >
                  <span className="numero-contato">{user.phone}</span>
                </div>
                
                <div >
                  <span className="email">{user.email}</span>
                </div>
                
               
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="spinner-border" role="status"></div>
        </div>
      )}
    </>
  );
}

export default Profile;
