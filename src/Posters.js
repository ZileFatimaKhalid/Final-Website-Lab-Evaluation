import React from 'react'
import './Posters.css'

function Posters({src, title, description, price}) {
    return (
        <div className='posters'>
            <img src={src} alt="" />
            <div className="posters_info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Posters
