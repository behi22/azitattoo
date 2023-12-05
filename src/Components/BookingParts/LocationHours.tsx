import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LocationHoursProps } from '../../Util/types';
import { Col, Row, Button, Divider } from 'antd';
import { mapContainerStyle, center, initialZoom } from '../../Util/constants';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {
  LocationT,
  fetchLocation
} from '../../Redux/features/location/location-slice';

const LocationHours: React.FC<LocationHoursProps> = ({ locations }) => {
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(0);
  const [userPosition, setUserPosition] = useState(null);

  // Use useSelector to get the locations from the Redux store
  const locationsFromStore = useSelector(
    (state: { location: { location: LocationT[] } }) => state.location.location
  );

  // Use locations from props if provided, otherwise use locations from the Redux store
  const displayedLocations =
    locations.length > 0
      ? [locations[selectedLocationIndex]]
      : locationsFromStore;

  useEffect(() => {
    // Fetch the user's current location using the Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const onMapLoad = (map) => {
    setMap(map);
  };

  const switchLocation = () => {
    // Fetch locations based on the selected index
    dispatch(fetchLocation([locations[selectedLocationIndex]]));

    // Update the selected index for the next switch
    setSelectedLocationIndex((prevIndex) =>
      prevIndex === locations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getDirections = () => {
    // Check if we have the user's location
    if (!userPosition) {
      console.error('User location not available.');
      return;
    }
    // Assuming the first location is the user's current position
    const sourceLocation = userPosition;
    const destinationLocation = displayedLocations[0];

    // Create a DirectionsService object
    const directionsService = new window.google.maps.DirectionsService();

    // Construct the request object
    const request = {
      origin: new window.google.maps.LatLng(
        sourceLocation.lat,
        sourceLocation.lng
      ),
      destination: new window.google.maps.LatLng(
        destinationLocation.lat,
        destinationLocation.lng
      ),
      travelMode: window.google.maps.TravelMode.DRIVING
    };

    // Make the Directions API request
    directionsService.route(request, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        // Process the directions result
        console.log('Directions API response:', result);
      } else {
        console.error(`Error fetching directions: ${status}`);
      }
    });
  };

  // Get the name of the other location
  const otherLocationName =
    locations.length > 0
      ? locations[(selectedLocationIndex + 1) % locations.length].name
      : '';

  return (
    <div style={{ minHeight: '100vh' }}>
      <Row justify='center'>
        <Col span={3}></Col>
        <Col span={18}>
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={initialZoom.num}
              onLoad={onMapLoad}
            >
              {displayedLocations.map((location) => (
                <Marker
                  key={location.id}
                  position={{ lat: location.lat, lng: location.lng }}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </Col>
        <Col span={3}></Col>
      </Row>
      <Divider orientation='center' style={{}}></Divider>
      <Row align='middle' justify='center'>
        <Col span={3}></Col>
        <Col span={3}>
          <h2>Location & Hours</h2>
        </Col>
        <Col span={1}></Col>
        <Col span={3}>
          <Button type='primary' onClick={switchLocation}>
            Switch to {otherLocationName} Location
          </Button>
        </Col>
        <Col span={1}></Col>
        <Col span={5}>
          {displayedLocations.map((location) => (
            <div key={location.id}>
              <strong>{location.name}</strong>
              <p>{location.address}</p>
              {/* This code is for using the Directions API!
              <a href='#' onClick={getDirections}>
                Get Directions
              </a> 
              */}
              <a target='_blank' href={location.link}>
                Get Directions
              </a>
            </div>
          ))}
        </Col>
        <Col span={1}></Col>
        <Col span={4}>
          <ul>
            {displayedLocations.map((location) => (
              <div key={location.id}>
                {location.hours.map((hour, index) => (
                  <li key={`${location.id}-${index}`}>{hour}</li>
                ))}
              </div>
            ))}
          </ul>
        </Col>
        <Col span={3}></Col>
      </Row>
    </div>
  );
};

export default LocationHours;
