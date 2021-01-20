import React from 'react'


const Post = ({ article }) => {
    console.log(article)
    const { name, featuredImage, nearbyplaces, description, nearbyfoodplaces } = article.fields
    
    return (
        <div className='post'>
            <h2 className='title'>{name}</h2>
            <section>{description}</section>
            {featuredImage && <img className='featuredImage' src={featuredImage.fields.file.url} alt={name} title={name} />}
            <section dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    )
}

export default Post