import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
        <div className="container-fluid main-navbar">
          <a className="navbar-brand text-white" href="#">
            Meu Cartão
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse main-navbar-items" id="navbarNav">
            <ul className="navbar-nav">
              
              
              <li className="nav-item">
            
              {/* <Link to="/">Tela de Perfil</Link> */}

                <a className="nav-link active text-white" aria-current="page" href="#">
                  Tela Perfil
                </a>
              </li>

              {/* <Link to="/">Idade</Link> */}
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Retorno da Idade
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
