import React from "react";

const SingleImage = ({
    urls: { small, full },
    alt_description,
    likes,
    user: {
      name,
      links: {
        html
      },
      portfolio_url,
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
                <div>
                    <h4>{name}</h4>
                    <p>{likes}</p>
                </div>
                <img src={medium} id="owner-img" alt="onwerImage" onClick={clickOnOwner}/>
                {/* <a href={html}>
                </a> */}
            </div>
        </div>
    );
};

export default SingleImage;
