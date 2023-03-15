import { Map, Marker, ZoomControl, Overlay } from "pigeon-maps"
import { useEffect, useState } from "react"

function MapComponent({location, coordinates}) {

    const MAPTILER_ACCESS_TOKEN = '1rrDzrqklQWsuKoJl5iy'
    const MAP_ID = 'basic-v2'
    
    const locationMap = {
        'Palamas': [39.50,22.10],
        'Chennai': [13.08, 80.27],
        'Assam':[26.59, 93.18],
        'Pakistan':[27.84, 67.91],
        'Germany':[50.44, 6.91]
    }

    const messageMap = {
        'Palamas': "Details of the devastating flood that occured in Palamas",
        'Chennai': "One of the catastrophic floods that occured in Chennai",
        'Assam': "Assam suffered because of the devastating floods",
        'Pakistan': "Pakistan was massively impacted by these floods",
        'Germany': "Germany was surprisingly struck by these floods"
    }

    const [center, setCenter] = useState(location)
    const [zoom, setZoom] = useState(11)
    const [showPopup, setShowPopup] = useState(false)
    const [message, setMessage] = useState(location)

    function mapTiler (x, y, z, dpr) {
        return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`
      }
      
    
    useEffect(() => {
        setCenter(locationMap[location]);
        setMessage(messageMap[location]);
    },[location]);

    useEffect(() => {
        setCenter(coordinates);
    }, [coordinates]);
    
    return(
        <div className="MapComponent col-span-1">
            <Map provider={mapTiler} height={window.innerHeight} width={window.innerWidth * 0.5} 
            defaultZoom={12} center={center} zoom={zoom}>
                <Marker width={50} anchor={center} 
                    onMouseOver={() => setShowPopup(true)}
                    onMouseOut={() => setShowPopup(false)}
                />
                {showPopup && (
                    <Overlay anchor={center} offset={[0, -25]}>
                        <div className="w-3/4"style={{ backgroundColor: 'white', padding: '10px' }}>{message}</div>
                    </Overlay>
                )}
                <ZoomControl></ZoomControl>
            </Map>
        </div>
    )
}

export default MapComponent;