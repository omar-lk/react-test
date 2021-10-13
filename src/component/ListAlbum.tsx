import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/albums.css";
import AddAlbumPopup from "../component/AddAlbumPopup";

const ListAlbum = () => {
  let [albums, setAlbums] = useState<any[]>([]);
  let [showAlbumPopup, setShowAlbumPopup] = useState<any[]>(false);
  let [refresh, setRefresh] = useState<any[]>(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums?_start=0&_limit=6")
      .then((res) => res.json())
      .then((data) => {
        console.log("data");
        console.log(data);
        setAlbums(data);
      });
  }, [refresh]);

  function showPopup() {
    setShowAlbumPopup(!showAlbumPopup);
  }

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
        <li>
          Add Album
          <button className="button buttonAdd" onClick={showPopup}>
            <FontAwesomeIcon icon={faPlus} className="highlight" />
          </button>
        </li>
      </ul>
      {showAlbumPopup ? (
        <AddAlbumPopup
          closePopup={showPopup}
          refresh={() => {
            setRefresh(!refresh);
          }}
        />
      ) : null}
    </div>
  );
};
export default ListAlbum;
