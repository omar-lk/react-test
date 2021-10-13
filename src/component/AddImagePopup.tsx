import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
const AddImagePopup = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos", {
      method: "POST",
      body: JSON.stringify({
        title: data.name,
        url: data.image
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        props.closePopup();
      });
  };
  return (
    <div className="popup">
      <button id="x" onClick={props.closePopup}>
        X
      </button>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <p className="popupTitle">Add Image to photo {props.albumTitle}</p>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Enter Image name"
            {...register("name", { required: true })}
          />
          <input
            type="text"
            placeholder="Enter Image Url"
            {...register("image", { required: true })}
          />
          <button type="submit" className="btn">
            Save Image
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddImagePopup;
