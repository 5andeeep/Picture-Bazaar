import React from "react";

const SingleImage = ({image, index}) => {

    function clickOnImage(){
        window.open(image.urls.full, '_blank');
    }

    return (
        <div className="image">
        <img 
            src={image.urls.small} 
            alt={image.description} 
            onClick={clickOnImage}
            key={index}
        />
        </div>
    );
};

export default SingleImage;
