import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import Markers from './Markers';

const MapData = ({priorityFilter, statusFilter}) => {
  const [mapLoaded, setmapLoaded] = useState(false); //state that tell application if the map data is done loading
  const [mapData, setMapData] = useState(); //state that holds the map data
  const [newMapLocations, setLocations] = useState(); //state that holds the restructure map data

  useEffect(() => {

    //Fetech the data from express route
    async function fetchMapData() {
      const response = await fetch('/map');
      const data = await response.json();
      return data;
    }
    
    fetchMapData().then(data => {
      setMapData(data);
      setmapLoaded(true); //tell restructure function data is done loading 
    });

    //Restructure data so lat and long is in an object call location
    let array = []
    if (mapLoaded) {
      for (let key in mapData) {
        array.push(
          {
            id: mapData[key].id, 
            location: {
              lat: mapData[key].lat,
              lng: mapData[key].long
            },
            priority: mapData[key].priority,
            required_date: mapData[key].required_date,
            status: mapData[key].status,
          }
        )
      }
    } 
    else {
      console.log("mapData is empty")
    }
    setLocations(array)
     
  }, [mapLoaded]);

  console.log(newMapLocations);

    return (
      <div>
        {
          // All filters are set to all
          mapLoaded && priorityFilter === 'all' && statusFilter === 'all' ? newMapLocations.map(item => {
            return <Markers item={item} />
          }) 
          
          //If the priority filter is in use but not status
          : mapLoaded && priorityFilter !== 'all' && statusFilter === 'all' ? newMapLocations.filter(item => {
          if (item.priority === priorityFilter) {
            return true
          } else return false
          }).map(item => {
            return <Markers item={item} />
          }) 

          //If the status filter is in use but not priority
          : mapLoaded && priorityFilter === 'all' && statusFilter !== 'all' ? newMapLocations.filter(item => {
          if (item.status === statusFilter) {
            return true
          } else return false
          }).map(item => {
            return <Markers item={item} />
          }) 

          //If both priority and status filters are in use
          : mapLoaded && priorityFilter !== 'all' && statusFilter !== 'all' ? newMapLocations.filter(item => {
          if (item.status === statusFilter && item.priority === priorityFilter) {
            return true
          } else return false
          }).map(item => {
            return <Markers item={item} />
          }) 
        
          //If none of the conditions are met do nothing
          : ''}
      </div>
    )
}

const mapStateToProps = state => {
  return {
      priorityFilter: state.jobs.priorityFilter,
      statusFilter: state.jobs.statusFilter,
  }
};
export default connect(mapStateToProps)(MapData);