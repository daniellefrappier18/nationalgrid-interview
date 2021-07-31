import React from 'react';
import { Marker } from '@react-google-maps/api';

export default function Markers ({item}){
//I'm using these icons from google because the supplied icons did not match the requirement details
const redIcon = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
const orangeIcon = 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png';
const yellowIcon = 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png';

    return(
        <div>
            <Marker key={item.id} position={item.location} icon={item.priority === 'high' ? redIcon : item.priority === 'medium' ? orangeIcon : yellowIcon} />  
        </div>
    )
}