import React from 'react';
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react';

const libraries = ['places'];

const containerStyle = {
    width: '100%',
    height: '620px',
    position: 'relative',
};

const center = {
    lat: 30.3470,
    lng: 76.3961,
};

const markers = [
    {
        id: 1,
        position: { lat: 30.352866931849626, lng: 76.3968979379046 },
        name: 'Hargobind Nagar',
        detail: 'Workplace',
    }
];

function MapComponent() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries
    });
    const [activeMarker,setActiveMarker] = useState([])

    const handleMarkerClick = (marker) =>{
        setActiveMarker(marker)
    }

    return isLoaded ? (
        <>
            <div style={containerStyle}>
                <GoogleMap
                    mapContainerStyle={{ width: '99%', height: '150%' }}
                    center={center}
                    zoom={16}
                    options={{ fullscreenControl: false }}
                >
                    {markers.map((marker) => (
                        <MarkerF key={marker.id} position={marker.position} onMouseOver={()=>handleMarkerClick(marker)}>
                        {activeMarker && activeMarker.id===marker.id ? (
                             <InfoWindowF>
                             <div style={{ color: 'black', fontSize: '14px', padding: '5px' }}>
                                 <h1>{marker.name}</h1>
                                 <p>{marker.detail}</p>
                             </div>
                         </InfoWindowF>
                        ):null}
                        </MarkerF>
                    ))}
                </GoogleMap>
            </div>
        </>
    ) : (
        <>
            <h1 className='text-5xl font-extralight text-red-500'>Map Not Found</h1>
        </>
    );
}

export default MapComponent;
