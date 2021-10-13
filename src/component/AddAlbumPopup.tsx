import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../styles/AlbumPopup.css";

const AddAlbumPopup = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify({
        title: data.name
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        props.refresh();
        props.closePopup();
      });
  };

  return (
    <div className="popup2">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div className="topContainer">
          <h2 className="title">New Album</h2>
          <input
            id="albumInput"
            type="text"
            placeholder="Enter Albun name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="btnSaveContainer">
          <button type="submit" className="btn">
            Save Image
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAlbumPopup;
