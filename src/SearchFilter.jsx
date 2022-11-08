import React from "react";

export default function SearchFilter(props) {
  const images = `https://source.unsplash.com/500x400/?${props.name}`;
  return (
    <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4"></div>
      <div className="col-4 col-lg-4">
        <img src={images} alt="myImg" />
      </div>
    </div>
  );
}
