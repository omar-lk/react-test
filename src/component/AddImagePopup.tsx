import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
const AddImagePopup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="popup">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <p className="popupTitle">Add Image to</p>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Enter Image name"
            {...register("name")}
          />
          <input
            type="text"
            placeholder="Enter Image Url"
            {...register("image")}
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
