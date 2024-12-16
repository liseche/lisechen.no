import { Outlet, Link } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <>
    <div data-bs-theme="dark">
      <nav class="navbar navbar-expand-lg bg-transparent fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">Lise Chen</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">
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