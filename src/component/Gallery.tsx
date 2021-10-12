import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Gallery.css"

const Gallery = () => {

  let [photos, setPhotos] = useState<any[]>([]);
 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => res.json())
      .then((data) => {
        console.log("data");
        console.log(data);
        setPhotos(data);
      });
  }, []);

  return (
    <div className="container">
      
        {photos&& photos.map((photo, i) => {
          
        return  <div className="imageComtiner">
            <img src={photo.url}></img>
        </div>;
        })}
    </div>
  );
};
export default Gallery;
