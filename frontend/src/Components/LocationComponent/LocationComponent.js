import { useState } from 'react';
import MapComponent from '../MapComponent/MapComponent';
import DetailsComponent from '../DetailsComponent/DetailsComponent';

function LocationComponent() {

    const [location, setLocation] = useState([39.50,22.10]);

    return (
        <div className="LocationComponent grid grid-cols-2 h-screen">
            <MapComponent className="col-start-1 fixed top-0 left-0 h-full w-1/2" location={location}></MapComponent>
            <div className="col-start-2 overflow-y-auto h-full">
                <DetailsComponent location={location} setLocation={setLocation}></DetailsComponent>
            </div>
        </div>
    )
}

export default LocationComponent;
