import React from "react";
import MarkerIcon from "../assets/marker.png";

const Entry = (props) => {
  console.log(props);
  return (
    <>
      <article className="entry-wrapper">
        <img src={props.img.src} alt={props.img.alt} />
        <div>
          <div className="country-wrapper">
            <img src={MarkerIcon} alt="Marker icon" />
            <span className="country-name">{props.country}</span>
            <a target="_blank" href={props.googleMapsLink}>
              View on Google Maps
            </a>
          </div>
          <div className="location-wrapper">
            <h2>{props.title}</h2>
            <h4>{props.dates}</h4>
            <p>{props.text}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Entry;
