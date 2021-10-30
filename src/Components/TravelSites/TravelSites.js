import { CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import SingleSpot from '../SingleSpot/SingleSpot';

const TravelSites = () => {
    const [spots, setSpots] = useState([])
    useEffect(() => {
        fetch('https://obscure-river-55852.herokuapp.com/allspots')
        .then(res => res.json())
        .then(data => {
            setSpots(data)
            console.log(data)
        })
    }, [])
    return (
        <div className="container mb-5">
            <h1 className='fs-1 m-4 text-center'>TOP TRAVEL <span className="text-success">SPOTS</span></h1>
                <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
                    {
                        spots.map(spot => <SingleSpot key={spot._id} spot={spot} />)
                    }
                </CRow>

        </div>
    );
};

export default TravelSites;