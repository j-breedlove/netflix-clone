import React from "react";
import "./Banner.css";
import bannerImage from "../../assets/images/netflix-banner-img.jpg";

const Banner = () => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  // Import the image
  return (
    <header
      className={"banner"}
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className={"banner__contents"}>
        <h1 className={"banner__title"}>Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className={"banner__description"}>
          {truncate(
            "Congue volutpat, molestie nobis soluta molestie iure mollit enim euismod id laboris diam excepteur, diam duis congue dignissim rebum aliquid stet molestie eiusmod nisi duo sea laboris eleifend rebum vel. Dolor sanctus nibh. Reprehenderit pariatur tincidunt. Vero feugait elitr dignissim consectetuer. Labore rebum mazim. Erat vulputate rebum. Laboris aliquam quis commodi enim voluptate fugiat. Stet illum excepteur.",
            150,
          )}
        </h1>
      </div>
      <div className={"banner--fadeBottom"}></div>
    </header>
  );
};

export default Banner;
