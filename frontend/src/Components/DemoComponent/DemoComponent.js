import { useState } from 'react';
import InputComponent from '../InputComponent/InputComponent';
import MapComponent from '../MapComponent/MapComponent';

function DemoComponent () {

    const demoLocation = [51.50, 0.12]
    const [location, setLocation] = useState();
    const [coordinates, setCoordinates] = useState();

    return (
        <div className="DemoComponent">
            <div className="LocationComponent grid grid-cols-2 h-screen">
                <MapComponent className="col-start-1 fixed top-0 left-0 h-full w-1/2" location={demoLocation} coordinates={coordinates}></MapComponent>
                <div className="col-start-2 overflow-y-auto h-full">
                    <InputComponent location={demoLocation} setLocation={setLocation} setCoordinates={setCoordinates}></InputComponent>
                </div>
            </div>
        </div>
    )
}

export default DemoComponent;
