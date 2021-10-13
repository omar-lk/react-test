import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/albums.css";

const ListAlbum = () => {
  let [albums, setAlbums] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums?_start=0&_limit=6")
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
        {albums &&
          albums.map((album: any, i) => {
            return (
              <li key={i}>
                <NavLink
                  activeClassName="active-link"
                  className="link"
                  to={`/album/${album.id}/${album.title}`}
                >
                  Photo {album.title.substring(0, 6)}...
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default ListAlbum;
