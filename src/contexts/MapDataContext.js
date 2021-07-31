import React, { createContext, useState, useEffect } from 'react';
export const MapDataContext = createContext();

export const MapDataProvider = props => {

    const [mapData, setMapData] = useState ();

    useEffect(() => {
        fetch('/map')
          .then(response => response.json())
          .then(data =>  {
            console.log(data)
            setMapData(data);
          });
      }, []);
    
    return ( 
      <MapDataContext.Provider value={mapData}>
          {props.children} 
      </MapDataContext.Provider>
    );
}