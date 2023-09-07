import React from "react";

const SingleImage = ({
    urls: { small, full },
    alt_description,
    user: {
      name,
      links: {
        html
      },
      profile_image: { medium },
    },
    index
  }) => {


    function clickOnImage(){
        window.open(full, '_blank');
    }
    function clickOnOwner(){
        window.open(html, '_blank');
    }

    return (
        <div className="image">
            <img 
                src={small} 
                alt={alt_description}
                onClick={clickOnImage}
                key={index}
            />
            <div className="picture-info">
                <img src={medium} id="owner-img" alt="onwerImage" onClick={clickOnOwner}/>
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default SingleImage;
