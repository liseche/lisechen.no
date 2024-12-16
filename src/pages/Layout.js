import { Outlet, Link } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <>
    <div data-bs-theme="dark">
      <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Lise Chen</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><Link to="/">Home</Link></a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#"><Link to="/blogs">Blogs</Link></a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="#"><Link to="/contact">Contact ☏</Link></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container-fluid vh-100 d-flex justify-content-center align-items-center bg-transparent">
        <div class="card bg-transparent text-center w-75 h-75 border-0">
          <div class="card-body">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
};

export default Layout;