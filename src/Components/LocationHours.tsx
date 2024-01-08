import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../Redux/hooks';
import { LocationHoursProps } from '../Util/types';
import { Col, Row, Button, Space, Typography } from 'antd';
import {
  mapContainerStyle,
  initialCenter,
  initialZoom,
  colors
} from '../Util/constants';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {
  LocationT,
  changeLocation
} from '../Redux/features/location/location-slice';
import useScreenSize from '../Hooks/screenSize';

const LocationHours: React.FC<LocationHoursProps> = ({ locations }) => {
  const { width } = useScreenSize();
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(0);
  const [userPosition, setUserPosition] = useState(null);
  const [center, setCenter] = useState({
    lat: initialCenter.lat,
    lng: initialCenter.lng
  });
  const [mapKey, setMapKey] = useState(1);

  // Use useAppSelector to get the locations from the Redux store
  const locationsFromStore = useAppSelector(
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

  const switchLocation = (selectedLocation) => {
    // Update the center of the map to the location's coordinates
    const cLocationIndex = (selectedLocationIndex + 1) % locations.length;
    const cLocation = locations[cLocationIndex];
    setCenter({ lat: cLocation.lat, lng: cLocation.lng });

    // Fetch locations based on the updated selected index
    dispatch(changeLocation([locations[selectedLocationIndex]]));

    // Force re-render by updating the map key
    setMapKey((prevKey) => prevKey + 1);

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
  /*
  const otherLocationName =
    locations.length > 0
      ? locations[(selectedLocationIndex + 1) % locations.length].name
    : ''; 
  */

  /**<Row align='middle' justify='center' gutter={[30, 30]}>
        <Col xs={22} lg={4} style={{ textAlign: 'center' }}>
          <h2>Location & Hours</h2>
        </Col>
        <Col offset={1} xs={23} lg={5} style={{ textAlign: 'center' }}>
          <Button
            type='primary'
            shape='round'
            style={{
              height: 'auto',
              width: width > 991 ? '80%' : width > 600 ? '30%' : '50%',
              whiteSpace: 'normal'
            }}
            onClick={() => switchLocation(locations[selectedLocationIndex])}
          >
            Switch Location
          </Button>
        </Col>
        <Col offset={1} xs={23} lg={5} style={{ textAlign: 'center' }}>
          {displayedLocations.map((location) => (
            <div key={location.id}>
              <strong>{location.name}</strong>
              <p>{location.address}</p>
              <a target='_blank' href={location.link}>
                Get Directions
              </a>
            </div>
          ))}
        </Col>
        <Col offset={1} xs={24} lg={5} style={{ textAlign: 'center' }}>
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
      </Row> */

  return (
    // fixed redundancy issue by removing div with styling!
    <>
      <Row justify={'center'}>
        <Col span={21}>
          <Row
            style={{ width: '100%' }}
            justify={'space-between'}
            align={'middle'}
          >
            <h1>Location & Hours</h1>
          </Row>
        </Col>
      </Row>
      <br />
      <Row justify='center'>
        <Col span={21}>
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={initialZoom.num}
              key={mapKey} // Key prop to force re-render
              onLoad={onMapLoad}
              options={{
                disableDefaultUI: true,
                zoomControl: true,
                minZoom: 2
              }}
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
      </Row>
      <br />
      <br />
      <Row justify={'center'}>
        <Col xs={21}>
          <Button
            type='primary'
            shape='round'
            style={
              {
                // height: 'auto'
              }
            }
            onClick={() => switchLocation(locations[selectedLocationIndex])}
          >
            Switch Map Location
          </Button>
        </Col>
        <br />
        <br />
        <br />
        <br />
        <Col xs={21}>
          <Row
            justify={'space-between'}
            style={{ width: '100%' }}
            gutter={[10, 30]}
          >
            <Col xs={24} xl={12}>
              <Row style={{ width: '100%' }} gutter={[0, 20]}>
                <Col xs={24}>
                  <Typography.Text style={{ fontSize: '1.1em' }}>
                    <strong style={{ fontWeight: 'bolder' }}>City</strong>:{' '}
                    {locations[0].name}
                  </Typography.Text>
                </Col>
                <Col xs={24}>
                  <Typography.Text>
                    Address: {locations[0].address}
                  </Typography.Text>
                  <Typography.Text style={{ marginLeft: '15px' }}>
                    <a target='_blank' href={locations[0].link}>
                      Get Directions
                    </a>
                  </Typography.Text>
                </Col>
                <Col xs={24}>
                  <Typography.Text>
                    Hours:{' '}
                    {locations[0].name === 'Vancouver'
                      ? 'Monday, Tuesday and Wednesday: 11:00 am - 6:00 pm (Appointment Only)'
                      : 'Thursday, Friday and Saturday: 11:00 am - 6:00 pm (Appointment Only)'}
                  </Typography.Text>
                </Col>
              </Row>
            </Col>
            <Col xs={24} xl={12}>
              <Row style={{ width: '100%' }} gutter={[0, 20]}>
                <Col xs={24}>
                  <Typography.Text style={{ fontSize: '1.1em' }}>
                    <strong style={{ fontWeight: 'bolder' }}>City</strong>:{' '}
                    {locations[1].name}
                  </Typography.Text>
                </Col>
                <Col xs={24}>
                  <Typography.Text>
                    Address: {locations[1].address}
                  </Typography.Text>
                  <Typography.Text style={{ marginLeft: '15px' }}>
                    <a target='_blank' href={locations[1].link}>
                      Get Directions
                    </a>
                  </Typography.Text>
                </Col>
                <Col xs={24}>
                  <Typography.Text>
                    Hours:{' '}
                    {locations[1].name === 'Vancouver'
                      ? 'Monday, Tuesday and Wednesday: 11:00 am - 6:00 pm (Appointment Only)'
                      : 'Thursday, Friday and Saturday: 11:00 am - 6:00 pm (Appointment Only)'}
                  </Typography.Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default LocationHours;
