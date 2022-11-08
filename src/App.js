import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
export default function App() {
  const [img, setImg] = useState(" ");

  //inputEvent
  const inputEvent = (e) => {
    const data = e.target.value;
    setImg(data);
  };
  return (
    <>
      <div className="row">
        <div className="col mt-5 w-50">
          <form className="form-inline d-flex justify-content-center md-form form-sm">
            <i className="fas fa-search" aria-hidden="true"></i>
            <input
              className="form-control form-control-sm ml-3 w-74"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={img}
              onChange={inputEvent}
            />
          </form>
        </div>
      </div>
      {img === " " ? null : <SearchFilter name={img} />}
    </>
  );
}
