import React from "react";
import SingleImage from "./SingleImage";

const ImageList = ({ images }) => {
    return (
      <>
        <div className="gallery">
          {images &&
            images.map((image, index) => {
              return (
                <SingleImage image={image} key={index}/>
              );
            })}
        </div>
      </>
    );
};

export default ImageList;
