//Define the map and its extent
var map = L.map("map", {
	center: [46.7295, -94.6859],
	zoom: 6,
	//layers: [],
	minZoom: 2,
	maxZoom: 12,
	maxBounds: bounds,
	attributionControl: true
});
		
//Define the map bounds constraint
//TODO: Define the bounds so users can't zoom out outside of the United States
var southWest = L.latLng(-179.2968749, 71.7154415734),
	northEast = L.latLng(178.9453145, -14.7608357),
	bounds = L.latLngBounds(southWest, northEast);

//Esri Natural Geographic Baselayer (on by default)
var Esri_NatGeoWorldMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo(map);