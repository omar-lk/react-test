import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import AddImagePopup from "./AddImagePopup";
import DeleteImagePopup from "./DeleteImagePopup";

const Gallery = () => {
  let [photos, setPhotos] = useState<any[]>([]);
  let { id } = useParams();
  let { title } = useParams();
  const [style, setStyle] = useState("imageComtiner");

  let [showAddPopup, setShowAddPopup] = useState<any[]>(false);
  let [showDeletePopup, setShowDeletePopup] = useState<any[]>(false);
  let [activeIndex, setActiveIndex] = useState<any[]>("");
  let [selectedImageId, setSelectedImageId] = useState<any[]>();

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

  function filterDeletedImage() {
    setPhotos(
      photos.filter((photo) => {
        return photos.id !== selectedImageId;
      })
    );
    console.log(photos);
  }

  function showPopup() {
    setShowAddPopup(!showAddPopup);
    if (showDeletePopup) {
      setShowDeletePopup(false);
    }
    console.log(showAddPopup);
  }

  function showDeletePopupfunction() {
    if (selectedImageId == undefined) {
      alert("you need to select Image before");
      return;
    }
    setShowDeletePopup(!showDeletePopup);
    if (showAddPopup) {
      setShowAddPopup(false);
    }
    console.log(showDeletePopup);
  }
  function imageSelected(photo) {
    setSelectedImageId(photo.id);
  }

  return (
    <div className="galleryContainer">
      {photos &&
        photos.map((photo, i) => {
          return (
            <div>
              <img
                data-id={i}
                onClick={() => {
                  setActiveIndex(i);
                  imageSelected(photo);
                }}
                className={i === activeIndex ? "selected" : null}
                src={photo.url}
              ></img>
            </div>
          );
        })}
      <div className="footer">
        <span>
          <button
            className="button buttonDelete"
            onClick={showDeletePopupfunction}
          >
            <FontAwesomeIcon icon={faTrash} className="highlight" />
          </button>
          delete photo {title}
        </span>
        <span>
          Add image
          <button className="button buttonAdd" onClick={showPopup}>
            <FontAwesomeIcon icon={faPlus} className="highlight" />
          </button>
        </span>
      </div>
      {showAddPopup ? (
        <AddImagePopup closePopup={showPopup} albumTitle={title} />
      ) : null}
      {showDeletePopup ? (
        <DeleteImagePopup
          imageId={selectedImageId}
          albumId={id}
          filter={filterDeletedImage}
          closePopup={showDeletePopupfunction}
        />
      ) : null}
    </div>
  );
};
export default Gallery;
