import React, { useState, useEffect } from "react";
import "../styles/deletPopUpStyle.css";

const DeleteImagePopup = (props) => {
  const deleteImage = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/albums/${props.albumId}/photos/${props.imageId}`,
      {
        method: "DELETE"
      }
    );
    props.closePopup();
    props.filter();
  };

  return (
    <div className="popup2">
      <div className="messageContainer">
        <h2>Delete Image</h2>
        <p>
          Are you sure that you want to delete this image.<br></br> this action
          cannot be undone
        </p>
      </div>
      <div className="btnContainer">
        <button
          type="submit"
          className="btnCancel btn2"
          onClick={props.closePopup}
        >
          Cancel
        </button>
        <button onClick={deleteImage} className="btnConfirm btn2 ">
          Confirm Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteImagePopup;
