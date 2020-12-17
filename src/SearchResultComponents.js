import React from 'react';
import './SearchResultComponents.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResultComponents({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className='searchResultComponents'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchResultComponents_heart" />

            <div className='searchResultComponents_info'>
                <div className="searchResultComponents_infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>___</p>
                    <p>{description}</p>
                </div>

                <div className="searchResultComponents_infoBottom">
                    <div className="searchResultComponents_stars">
                        <StarIcon className="searchResultComponents_star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResultsComponents_price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResultComponents
   