import React from 'react'
import './SearchPage.css'
import { Button } from "@material-ui/core";
import SearchResultComponents from "./SearchResultComponents";

function SearchPage() {
    return (
        <div className='searchPage'>
             <div className='searchPage__info'>
                <p>63 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays Nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResultComponents
                img="https://luxport-dev.s3.amazonaws.com/119374/6613a79b-3-1-EXT.jpg"
                location="Private room in center of Lahore"
                title="Stay at this spacious Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1 bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
                star={4.73}
                price="£30 / night"
                total="£70 total incl.tax"
            />

            <SearchResultComponents
                img="https://blog.furnishedquarters.com/wp-content/uploads/2017/10/living-room-furnishings-1024x684.jpg"
                location="Private room in center of Islamabad"
                title="Independant luxury studio apartment"
                description="2 guest . 3 bedroom . 2 bed . 2 bathrooms . Free-Wifi . Kitchen"
                star={4.3}
                price="£40 / night"
                total="£90 total incl.tax"
            />

            <SearchResultComponents
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Private room in center of Karachi"
                title="Studio Apartments"
                description="4 guest . 4 bedrooms . 4 bed . 2 bathrooms . Free parking . Washing Machine"
                star={3.8}
                price="£35 / night"
                total="£72 total incl.tax"
            />
            <SearchResultComponents
                img="https://q-xx.bstatic.com/xdata/images/hotel/840x460/228806770.jpg?k=59091cd873437a363bbc644750386806c5035dc71ef9f7e78dded18524d7ab02&o="
                location="Private rooms in Lahore"
                title="30 mins to Johar Street, Emporium by Nishat"
                description="1 guest . 1 bedroom . 1 bed . 1 bathrooms . Free-Wifi . Kitchen . Free parking . Washing Machine"
                star={4.1}
                price="£55 / night"
                total="£100 total incl.tax"
            />
            <SearchResultComponents
                img="https://www.pchotels.com/uploads/roomImages/21_01567665005.jpg"
                location="Spacious room in Murree"
                title="Spacious Peaceful Modern Bedroom of PC Burban"
                description="3 guest . 1 bedroom . 1 bed . 1 bathrooms . Free-Wifi . Free parking . Dry Cleaning"
                star={5.0}
                price="£60 / night"
                total="£120 total incl.tax"
            />
            <SearchResultComponents
                img="https://lh5.googleusercontent.com/p/AF1QipN0MZ17rQ2UvH0dxazXrD_bPcvTavl48UTBhMIL=w325-h216-k-no"
                location="Private room in center of Multan"
                title="The Hotel One Room"
                description="2 guest . 1 bedroom . 1 bed . 1 bathrooms . Wifi · Washing Machine"
                star={4.23}
                price="£65 / night"
                total="£130 total incl.tax"
            />
            <SearchResultComponents
                img="https://www.pchotels.com/uploads/roomImages/6_01565334884.jpg"
                location="Private rooms in Lahore"
                title="5 Star Luxury Rooms"
                description="3 guest . 1 bedroom . 1 bed . 1 bathrooms . Free-Wifi . Kitchen . Free parking . Washing Machine"
                star={4.3}
                price="£90 / night"
                total="£150 total incl.tax"
            />
        </div>
    )
}

export default SearchPage
     