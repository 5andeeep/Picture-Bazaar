import React from "react";

const ImageList = ({ images }) => {
    console.log(images);
  return (
    <>
      <div className="gallery">
        {images &&
          images.map((image, index) => {
            return (
              <div className="image">
                <img
                  src={image.urls.small}
                  alt={image.description}
                  key={index}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ImageList;
