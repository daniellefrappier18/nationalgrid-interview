import React from 'react';
import { GoogleMap, LoadScript} from '@react-google-maps/api';
import MapData from './MapData';


function JobMap() {
  const mapStyles = {        
    height: "100vh",
    width: "70%",
    float: "left",  
  };
  
  const defaultCenter = {
    lat: 42.396308,
    lng: -71.272355,
  }
  return(
    <div> 
     
      <LoadScript
        googleMapsApiKey='AIzaSyCJli8pDDnA-mHXXf_0iyH9rb90LDyrNmM'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}> 
          <MapData/>
        </GoogleMap>
      </LoadScript>

     </div>

  )

}

export default JobMap