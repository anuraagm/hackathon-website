import { useState } from 'react';
import InputComponent from '../InputComponent/InputComponent';
import MapComponent from '../MapComponent/MapComponent';

function DemoComponent () {

    const demoLocation = [51.50, 0.12]
    const [location, setLocation] = useState();

    return (
        <div className="DemoComponent">
            <div className="LocationComponent grid grid-cols-2">
                <MapComponent className="col-start-1" location={demoLocation}></MapComponent>
                <InputComponent className="col-start-2" location={demoLocation} setLocation={setLocation}></InputComponent>
            </div>
        </div>
    )
}

export default DemoComponent;