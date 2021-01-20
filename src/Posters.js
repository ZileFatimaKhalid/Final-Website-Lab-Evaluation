import React from 'react'
import './Posters.css'
import { useHistory } from 'react-router-dom';



function Posters({src, title, description, price, onItemSelected}) {
    {
        const history = useHistory();
        const post = () => {
            // onItemSelected.updateDetailName(title);
            // onItemSelected.updateDetailDescription(description);
            // onItemSelected.updateDetailPrice(price);
            history.push('/search');
        
        };
    return (
        <div className='posters'>
            <img src={src} onClick={ post }></img>
           
            <div className="posters_info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}
}
export default Posters
