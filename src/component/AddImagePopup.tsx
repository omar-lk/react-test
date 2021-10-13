import React, { useState, useEffect } from "react";

const AddImagePopup = () => {
  return (
    <div className="popup">
      <form action="/action_page.php" className="form-container">
        <p className="popupTitle">Add Image to</p>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Enter Imane name"
            name="email"
            required
          />
          <input
            type="text"
            placeholder="Enter Image Url"
            name="psw"
            required
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
