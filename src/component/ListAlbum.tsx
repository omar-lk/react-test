import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/albums.css"

const ListAlbum = () => {

  let [albums, setAlbums] = useState<any[]>([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        console.log("data");
        console.log(data);
         setAlbums(data);
      });
  }, []);

  return (
    <div className="albumsContainer">
      <ul>
        {albums&& albums.map((album:any, i) => {
          
        return <Link to={`/album/${album.id}`}> <li key={i}>Photo {album.title} {album.id}</li></Link>;
        })}
      </ul>
    </div>
  );
};
export default ListAlbum;
