import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import AddImagePopup from "./AddImagePopup";
const Gallery = () => {
  let [photos, setPhotos] = useState<any[]>([]);
  let { id } = useParams();

  let [showAddPopup, setShowAddPopup] = useState<any[]>(false);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos?_start=0&_limit=12`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data");
        console.log(data);
        setPhotos(data);
      });
  }, [id]);

  function showPopup() {
    setShowAddPopup(!showAddPopup);
    console.log(showAddPopup);
  }
  return (
    <div className="galleryContainer">
      {photos &&
        photos.map((photo, i) => {
          return (
            <div className="imageComtiner">
              <img src={photo.url}></img>
            </div>
          );
        })}
      <div className="footer">
        <span>
          <button className="button buttonDelete">
            <FontAwesomeIcon icon={faTrash} />
          </button>
          delete
        </span>
        <span>
          Add image
          <button className="button buttonAdd" onClick={showPopup}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </span>
      </div>
      {showAddPopup ? <AddImagePopup /> : null}
    </div>
  );
};
export default Gallery;
