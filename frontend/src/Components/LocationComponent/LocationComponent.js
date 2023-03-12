import { useState } from 'react';
import MapComponent from '../MapComponent/MapComponent';
import DetailsComponent from '../DetailsComponent/DetailsComponent';

function LocationComponent() {

    const [location, setLocation] = useState([39.50,22.10]);

    return (
        <div className="LocationComponent grid grid-cols-2">
            <MapComponent className="col-start-1" location={location}></MapComponent>
            <DetailsComponent className="col-start-2" location={location} setLocation={setLocation}></DetailsComponent>
        </div>
    )
}

export default LocationComponent;