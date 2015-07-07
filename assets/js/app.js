//Default Basemap Layer: Esri Natural Geographic
var EsriNatGeoWorldMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
});

//Basemap Layer: Esri Grayscale
var gray = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
});


//All Attendees from 2007-2011 and 2013-2014 TODO: Add style
var allAttendees = L.geoJson(null, {
	onEachFeature: function (feature, layer) {
		  layer.bindPopup(feature.properties.City + ", " + feature.properties.State + "<br />" + feature.properties.NumSum);
	}
});
$.getJSON("data/allAttendees.json", function (data) {
	  allAttendees.addData(data);
});

//2014 Attendees TODO: Add style
var attendees2014 = L.geoJson(null, {
	onEachFeature: function (feature, layer) {
		  layer.bindPopup(feature.properties.City + ", " + feature.properties.State + "<br />" + feature.properties.NumSum);
	}
});
$.getJSON("data/attendees2014.json", function (data) {
	  attendees2014.addData(data);
});

//2013 Attendees TODO: Add style
var attendees2013 = L.geoJson(null, {
	onEachFeature: function (feature, layer) {
		  layer.bindPopup(feature.properties.City + ", " + feature.properties.State + "<br />" + feature.properties.NumSum);
	}
});
$.getJSON("data/attendees2013.json", function (data) {
	  attendees2013.addData(data);
});

//2011 Attendees TODO: Add style
var attendees2011 = L.geoJson(null, {
	onEachFeature: function (feature, layer) {
		  layer.bindPopup(feature.properties.City + ", " + feature.properties.State + "<br />" + feature.properties.NumSum);
	}
});
$.getJSON("data/attendees2011.json", function (data) {
	  attendees2011.addData(data);
});

//2010 Attendees TODO: Add style
var attendees2010 = L.geoJson(null, {
	onEachFeature: function (feature, layer) {
		  layer.bindPopup(feature.properties.City + ", " + feature.properties.State + "<br />" + feature.properties.NumSum);
	}
});
$.getJSON("data/attendees2010.json", function (data) {
	  attendees2010.addData(data);
});


//2009 Attendees TODO: Add style
var attendees2009 = L.geoJson(null, {
	onEachFeature: function (feature, layer) {
		  layer.bindPopup(feature.properties.City + ", " + feature.properties.State + "<br />" + feature.properties.NumSum);
	}
});
$.getJSON("data/attendees2009.json", function (data) {
	  attendees2009.addData(data);
});

//2008 Attendees TODO: Add style
var attendees2008 = L.geoJson(null, {
	onEachFeature: function (feature, layer) {
		  layer.bindPopup(feature.properties.City + ", " + feature.properties.State + "<br />" + feature.properties.NumSum);
	}
});
$.getJSON("data/attendees2008.json", function (data) {
	  attendees2008.addData(data);
});

//2007 Attendees TODO: Add style
var attendees2007 = L.geoJson(null, {
	onEachFeature: function (feature, layer) {
		  layer.bindPopup(feature.properties.City + ", " + feature.properties.State + "<br />" + feature.properties.NumSum);
	}
});
$.getJSON("data/attendees2007.json", function (data) {
	  attendees2007.addData(data);
});
	
//Define the map and its extent
var map = L.map("map", {
	center: [46.7295, -94.6859],
	zoom: 6,
	layers: [EsriNatGeoWorldMap, allAttendees],
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

//Legend control: Basemap Layers
var baseLayers = {
	"Streets": EsriNatGeoWorldMap,
	"Gray": gray
};

//Legend control: Overlay Layers
var overlays = {
	"All years": allAttendees,
	"2014": attendees2014,
	"2013": attendees2013,
	"2011": attendees2011,
	"2010": attendees2010,
	"2009": attendees2009,
	"2008": attendees2008,
	"2007": attendees2007
};

//Add the legend control to the map
L.control.layers(baseLayers, overlays).addTo(map);