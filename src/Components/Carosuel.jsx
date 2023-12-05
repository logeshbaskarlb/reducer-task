import React from "react";
import "../1.jpg"

function Carosuel({src}) {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000">
      <img src= {src} className="d-block object-fit-fill " alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src= {src} className="d-block object-fit-fill " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src= {src} className="d-block object-fit-fill" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default Carosuel;
