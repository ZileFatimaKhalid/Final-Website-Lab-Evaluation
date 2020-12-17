import React from 'react'
import './HomePage.css';
import Banners from './Banners';
import Posters from './Posters';

function Homepage() {
    return (
        <div className='HomePage'>
            <h1></h1>
            <Banners />

            <div className='home_section'>
                <Posters
                     src="https://i.pinimg.com/originals/0e/a0/32/0ea032f1b26b25639f9f9ade1333c428.jpg"
                     title="Online Experiences"
                     description="Unique activities we can do together, book comfortable Cottages and farm house
                      led by many hosts." 
                />
                <Posters
                    src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=320" 
                    title="Unique Stays"
                    description="Comfortable uniques adventurous places with enough space for friends and family to stay"
               />
                <Posters
                      src="http://88designbox.com/upload/2016/02/26/farmhouse-01.jpg"
                      title="Entire homes"
                      description="Book the most comfortable private places, with rooms spacious enough for friends or family." 
                />
            </div>

            <div className='home_section'>
            <Posters
                src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F307i215%2Fw4cpzz4ez81gmapa2w6rz51g94i215&option=N&h=472&permitphotoenlargement=false"
                title="3 Bedroom Flat"
                description="Comfortable Rooms avaiable with stunning view"
                price="£180/night"
            />
            <Posters
                src="https://www.idesignarch.com/wp-content/uploads/The-Lanesborough-Penthouse_1.jpg"
                title="Penthouse"
                description="Enjoy the amazing views with a stunning penthouse"
                price="£450/night"
            />
            <Posters
                src="https://res.cloudinary.com/apartmentlist/image/fetch/t_renter_life_cover/https://images.ctfassets.net/jeox55pd4d8n/63f7dRCQZRCXDDOYx6p9fo/5d0dd6ba4a252bbc5415d437ee09270a/images_Studio-Apartment-.jpg"
                title="1 Bedroom apartment"
                description="Comfortable room with numerous shopping complex nearby in town"
                price="£150/night"
            />
            </div>

        </div>
    )
}

export default Homepage
