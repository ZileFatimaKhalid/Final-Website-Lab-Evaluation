import React from 'react';
import { useHistory } from 'react-router-dom';
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
    onItemSelected,
    type,
}) {
    const history = useHistory();

    const search = () => {
        onItemSelected.updateDetailName(title);
        onItemSelected.updateDetailDescription(description);
        onItemSelected.updateDetailPrice(price);
        onItemSelected.updateDetailImage(img);
        onItemSelected.updateDetailType(type);
        history.push('/detail');
    };

    return (
        <div className='searchResultComponents'>
            <img src={img} onClick={ search }></img>
            {/* //<img src={img} alt="" />// */}
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

export default SearchResultComponents;
