import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import trip from '../trip.json';

const class1 = [];
const class2 = [];
const class3 = [];
const class4 = [];
const class5 = [];


const getObjectCoor = (item) => {
  return { latitude: item.lat, longitude: item.lon }
}

const getFilterClass = () =>
  trip.trackPoints
    .forEach(item => {
      if (item.class === 1) {
        class1.push(getObjectCoor(item));
        return;
      }
      if (item.class === 2) {
        class2.push(getObjectCoor(item))
        return;
      }
      if (item.class === 3) {
        class3.push(getObjectCoor(item))
        return;
      }
      if (item.class === 4) {
        class4.push(getObjectCoor(item))
        return;
      }
      if (item.class === 5) {
        class5.push(getObjectCoor(item))
        return;
      }
    })

const classColor1 = '#62B821';
const classColor2 = '#0091FF';
const classColor3 = '#FFEE00';
const classColor4 = '#FF0000';
const classColor5 = '#000000';

const Trip = () => {
  getFilterClass();

  return (
    <MapView
      style={{ ...StyleSheet.absoluteFillObject }}
      initialRegion={{
        latitude: trip.trackPoints[0].lat,
        longitude: trip.trackPoints[0].lon,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      showsScale={true}
      zoomEnabled={true}>
      <Polyline coordinates={class1} strokeColor={classColor1} strokeWidth={4} />
      <Polyline coordinates={class2} strokeColor={classColor2} strokeWidth={4} />
      <Polyline coordinates={class3} strokeColor={classColor3} strokeWidth={4} />
      <Polyline coordinates={class4} strokeColor={classColor4} strokeWidth={4} />
      <Polyline coordinates={class5} strokeColor={classColor5} strokeWidth={4} />
    </MapView>
  );
}

export default Trip;
