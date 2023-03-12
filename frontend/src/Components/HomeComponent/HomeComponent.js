import { Map, Marker, Overlay, ZoomControl } from "pigeon-maps"
import { useState } from "react";

function HomeComponent() {

  const MAPTILER_ACCESS_TOKEN = '1rrDzrqklQWsuKoJl5iy'
  const MAP_ID = 'topo-v2'

  const markers = [
    {
      name: 'Palamas',
      position: [39.50, 22.10],
      message: 'Devastating floods that occured in Palamas.'
    },
    {
      name: 'Chennai',
      position: [13.08, 80.27],
      message: 'Devastating floods that occured in Chennai.'
    },
    {
      name: 'Assam',
      position: [26.59, 93.18],
      message: 'Devastating floods that occured in Assam.'
    },
    {
      name: 'Pakistan',
      position: [27.84, 67.91],
      message: 'Devastating floods that occured in Pakistan.'
    },
    {
      name: 'Germany',
      position: [50.44, 6.91],
      message: 'Devastating floods that occured in Germany.'
    },
  ];

  const [hoveredMarker, setHoveredMarker] = useState(null);
  const mapPosition = [37.4974, 0.1278];


  function mapTiler(x, y, z, dpr) {
    return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`
  }

  return (
    <div className="HomeComponent">
      <Map provider={mapTiler} defaultCenter={mapPosition} height={window.innerHeight} width={window.innerWidth} defaultZoom={3} minZoom={3} limitBounds={true}>
        {markers.map((marker, index) => (
          <Marker width={60} key={index} anchor={marker.position} onMouseOver={() => setHoveredMarker(marker)} onMouseOut={() => setHoveredMarker(null)} />
        ))}
        {hoveredMarker && (
          <Overlay anchor={hoveredMarker.position} offset={[0, 20]}>
            <div className="w-2/3"style={{ backgroundColor: 'white', padding: '10px', opacity: "80%"}}>{hoveredMarker.message}</div>
          </Overlay>
        )}
        <ZoomControl style={{top: '2%'}}></ZoomControl>
      </Map>
    </div>
  )
}

export default HomeComponent;
