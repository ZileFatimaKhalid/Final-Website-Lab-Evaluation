import React, { useState } from 'react'
import './Banners.css'
import { Button} from "@material-ui/core"
import Search from './Search'
import { useHistory } from "react-router-dom";

function Banners() {
    const history = useHistory();
    const [showSearch, setshowSearch] = useState(false);
    return (
        <div className='banners'>
            <div className='banners_search'>
                {showSearch && <Search />}
                <Button onClick= {() =>
                setshowSearch(!showSearch)
                }
                    className='banners_searchButton'
                    variant='outlined'>
                        {showSearch ? "Hide" :
                        "Search Dates"}
                    </Button>
            </div>
            <div className='banners_info'>
                <h1>Live Anywhere</h1>
                <h5>
                    Plan a different kind of getaway to uncover the places around you.             
                    </h5>
                    <Button onClick={()=> history.push('/search')}
                        variant='outlined'>
                        Explore Nearby</Button>
            </div>

        </div>
    )
}

export default Banners
