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

//Bootstrap Tooltip Placement
$('[data-toggle="tooltip"]').tooltip({'placement': 'bottom'});
$('[data-toggle="popover"]').popover({trigger: 'hover','placement': 'right'});

//Icon Classes
var starMarker = L.AwesomeMarkers.icon({
	icon: 'star', 
	prefix: 'fa', 
	markerColor: 'darkred', 
});

var attendeeMarker = L.AwesomeMarkers.icon({
	icon: 'user', 
	prefix: 'fa', 
	markerColor: 'darkblue', 
});

//All Attendees from 2007-2011 and 2013-2014
var allAttendees = L.geoJson(null, {
	pointToLayer: function (feature, latlng) {
	    return L.marker(latlng, {
	    	icon: starMarker,
	    	title: feature.properties.City + ", " + feature.properties.State,
	    	riseOnHover: true
	    });
	  },
	onEachFeature: function (feature, layer) {
	    if (feature.properties) {
	      var content = "<table class='table table-striped table-bordered table-condensed'>" + 
	      "<tr><th>City</th><td>" + feature.properties.City + "</td></tr>" +
	      "<tr><th>State</th><td>" + feature.properties.State + "</td></tr>" +
	      "<tr><th>Total Attendees</th><td>" + feature.properties.NumSum + "*</td></tr>" + "<table>";      
	      layer.on({
	        click: function (e) {
	          $("#feature-title").html('Total Attendees, 2007-2014');
	          $("#feature-info").html(content);
	          $("#featureModal").modal("show");
	        }
	      });
	      $("#feature-list tbody").append('<tr class="feature-row" id="'+L.stamp(layer)+'"><td style="vertical-align: middle;"><span class="fa-stack"><i class="fa fa-square fa-stack-2x" style="color: #A03336;"></i><i class="fa fa-star fa-stack-1x" style="color: white;"></i></span></td><td class="feature-name">'+layer.feature.properties.NAME+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
	    }
	}
});
$.getJSON("data/allAttendees.json", function (data) {
	  allAttendees.addData(data);
});

//2014 Attendees
var attendees2014 = L.geoJson(null, {
	pointToLayer: function (feature, latlng) {
	    return L.marker(latlng, {
	    	icon: attendeeMarker,
	    	title: feature.properties.City + ", " + feature.properties.State,
	    	riseOnHover: true
	    });
	  },
	onEachFeature: function (feature, layer) {
		if (feature.properties) {
		  var content = "<table class='table table-striped table-bordered table-condensed'>" + 
		  "<tr><th>City</th><td>" + feature.properties.City + "</td></tr>" +
		  "<tr><th>State</th><td>" + feature.properties.State + "</td></tr>" +
		  "<tr><th>2014 Attendees</th><td>" + feature.properties.NumSum + "</td></tr>" + "<table>";      
		  layer.on({
		    click: function (e) {
		      $("#feature-title").html('2014 Attendees, Rochester');
		      $("#feature-info").html(content);
		      $("#featureModal").modal("show");
		    }
		  });
		  $("#feature-list tbody").append('<tr class="feature-row" id="'+L.stamp(layer)+'"><td style="vertical-align: middle;"><span class="fa-stack"><i class="fa fa-square fa-stack-2x" style="color: #A03336;"></i><i class="fa fa-star fa-stack-1x" style="color: white;"></i></span></td><td class="feature-name">'+layer.feature.properties.NAME+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
		}
	}
});
$.getJSON("data/attendees2014.json", function (data) {
	  attendees2014.addData(data);
});

//2013 Attendees
var attendees2013 = L.geoJson(null, {
	pointToLayer: function (feature, latlng) {
	    return L.marker(latlng, {
	    	icon: attendeeMarker,
	    	title: feature.properties.City + ", " + feature.properties.State,
	    	riseOnHover: true
	    });
	  },
	onEachFeature: function (feature, layer) {
	    if (feature.properties) {
	      var content = "<table class='table table-striped table-bordered table-condensed'>" + 
	      "<tr><th>City</th><td>" + feature.properties.City + "</td></tr>" +
	      "<tr><th>State</th><td>" + feature.properties.State + "</td></tr>" +
	      "<tr><th>2013 Attendees</th><td>" + feature.properties.NumSum + "</td></tr>" + "<table>";      
	      layer.on({
	        click: function (e) {
	          $("#feature-title").html('2013 Attendees, Rochester');
	          $("#feature-info").html(content);
	          $("#featureModal").modal("show");
	        }
	      });
	      $("#feature-list tbody").append('<tr class="feature-row" id="'+L.stamp(layer)+'"><td style="vertical-align: middle;"><span class="fa-stack"><i class="fa fa-square fa-stack-2x" style="color: #A03336;"></i><i class="fa fa-star fa-stack-1x" style="color: white;"></i></span></td><td class="feature-name">'+layer.feature.properties.NAME+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
	    }
	}
});
$.getJSON("data/attendees2013.json", function (data) {
	  attendees2013.addData(data);
});

//2011 Attendees
var attendees2011 = L.geoJson(null, {
	pointToLayer: function (feature, latlng) {
	    return L.marker(latlng, {
	    	icon: attendeeMarker,
	    	title: feature.properties.City + ", " + feature.properties.State,
	    	riseOnHover: true
	    });
	  },
	onEachFeature: function (feature, layer) {
	    if (feature.properties) {
	      var content = "<table class='table table-striped table-bordered table-condensed'>" + 
	      "<tr><th>City</th><td>" + feature.properties.City + "</td></tr>" +
	      "<tr><th>State</th><td>" + feature.properties.State + "</td></tr>" +
	      "<tr><th>2011 Attendees</th><td>" + feature.properties.NumSum + "</td></tr>" + "<table>";      
	      layer.on({
	        click: function (e) {
	          $("#feature-title").html('2011 Attendees, Saint Cloud');
	          $("#feature-info").html(content);
	          $("#featureModal").modal("show");
	        }
	      });
	      $("#feature-list tbody").append('<tr class="feature-row" id="'+L.stamp(layer)+'"><td style="vertical-align: middle;"><span class="fa-stack"><i class="fa fa-square fa-stack-2x" style="color: #A03336;"></i><i class="fa fa-star fa-stack-1x" style="color: white;"></i></span></td><td class="feature-name">'+layer.feature.properties.NAME+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
	    }
	}
});
$.getJSON("data/attendees2011.json", function (data) {
	  attendees2011.addData(data);
});

//2010 Attendees
var attendees2010 = L.geoJson(null, {
	pointToLayer: function (feature, latlng) {
	    return L.marker(latlng, {
	    	icon: attendeeMarker,
	    	title: feature.properties.City + ", " + feature.properties.State,
	    	riseOnHover: true
	    });
	  },
	onEachFeature: function (feature, layer) {
	    if (feature.properties) {
	      var content = "<table class='table table-striped table-bordered table-condensed'>" + 
	      "<tr><th>City</th><td>" + feature.properties.City + "</td></tr>" +
	      "<tr><th>State</th><td>" + feature.properties.State + "</td></tr>" +
	      "<tr><th>2010 Attendees</th><td>" + feature.properties.NumSum + "</td></tr>" + "<table>";      
	      layer.on({
	        click: function (e) {
	          $("#feature-title").html('2010 Attendees, Duluth');
	          $("#feature-info").html(content);
	          $("#featureModal").modal("show");
	        }
	      });
	      $("#feature-list tbody").append('<tr class="feature-row" id="'+L.stamp(layer)+'"><td style="vertical-align: middle;"><span class="fa-stack"><i class="fa fa-square fa-stack-2x" style="color: #A03336;"></i><i class="fa fa-star fa-stack-1x" style="color: white;"></i></span></td><td class="feature-name">'+layer.feature.properties.NAME+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
	    }
	}
});
$.getJSON("data/attendees2010.json", function (data) {
	  attendees2010.addData(data);
});


//2009 Attendees
var attendees2009 = L.geoJson(null, {
	pointToLayer: function (feature, latlng) {
	    return L.marker(latlng, {
	    	icon: attendeeMarker,
	    	title: feature.properties.City + ", " + feature.properties.State,
	    	riseOnHover: true
	    });
	  },
	onEachFeature: function (feature, layer) {
		if (feature.properties) {
		  var content = "<table class='table table-striped table-bordered table-condensed'>" + 
		  "<tr><th>City</th><td>" + feature.properties.City + "</td></tr>" +
		  "<tr><th>State</th><td>" + feature.properties.State + "</td></tr>" +
		  "<tr><th>2009 Attendees</th><td>" + feature.properties.NumSum + "</td></tr>" + "<table>";      
		  layer.on({
		    click: function (e) {
		      $("#feature-title").html('2009 Attendees, Duluth');
		      $("#feature-info").html(content);
		      $("#featureModal").modal("show");
		    }
		  });
		  $("#feature-list tbody").append('<tr class="feature-row" id="'+L.stamp(layer)+'"><td style="vertical-align: middle;"><span class="fa-stack"><i class="fa fa-square fa-stack-2x" style="color: #A03336;"></i><i class="fa fa-star fa-stack-1x" style="color: white;"></i></span></td><td class="feature-name">'+layer.feature.properties.NAME+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
		}
	}
});
$.getJSON("data/attendees2009.json", function (data) {
	  attendees2009.addData(data);
});

//2008 Attendees
var attendees2008 = L.geoJson(null, {
	pointToLayer: function (feature, latlng) {
	    return L.marker(latlng, {
	    	icon: attendeeMarker,
	    	title: feature.properties.City + ", " + feature.properties.State,
	    	riseOnHover: true
	    });
	  },
	onEachFeature: function (feature, layer) {
	    if (feature.properties) {
	      var content = "<table class='table table-striped table-bordered table-condensed'>" + 
	      "<tr><th>City</th><td>" + feature.properties.City + "</td></tr>" +
	      "<tr><th>State</th><td>" + feature.properties.State + "</td></tr>" +
	      "<tr><th>2008 Attendees</th><td>" + feature.properties.NumSum + "</td></tr>" + "<table>";      
	      layer.on({
	        click: function (e) {
	          $("#feature-title").html('2008 Attendees, Rochester');
	          $("#feature-info").html(content);
	          $("#featureModal").modal("show");
	        }
	      });
	      $("#feature-list tbody").append('<tr class="feature-row" id="'+L.stamp(layer)+'"><td style="vertical-align: middle;"><span class="fa-stack"><i class="fa fa-square fa-stack-2x" style="color: #A03336;"></i><i class="fa fa-star fa-stack-1x" style="color: white;"></i></span></td><td class="feature-name">'+layer.feature.properties.NAME+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
	    }
	}
});
$.getJSON("data/attendees2008.json", function (data) {
	  attendees2008.addData(data);
});

//2007 Attendees
var attendees2007 = L.geoJson(null, {
	pointToLayer: function (feature, latlng) {
	    return L.marker(latlng, {
	    	icon: attendeeMarker,
	    	title: feature.properties.City + ", " + feature.properties.State,
	    	riseOnHover: true
	    });
	  },
	onEachFeature: function (feature, layer) {
	    if (feature.properties) {
	      var content = "<table class='table table-striped table-bordered table-condensed'>" + 
	      "<tr><th>City</th><td>" + feature.properties.City + "</td></tr>" +
	      "<tr><th>State</th><td>" + feature.properties.State + "</td></tr>" +
	      "<tr><th>2007 Attendees</th><td>" + feature.properties.NumSum + "</td></tr>" + "<table>";      
	      layer.on({
	        click: function (e) {
	          $("#feature-title").html('2007 Attendees, Rochester');
	          $("#feature-info").html(content);
	          $("#featureModal").modal("show");
	        }
	      });
	      $("#feature-list tbody").append('<tr class="feature-row" id="'+L.stamp(layer)+'"><td style="vertical-align: middle;"><span class="fa-stack"><i class="fa fa-square fa-stack-2x" style="color: #A03336;"></i><i class="fa fa-star fa-stack-1x" style="color: white;"></i></span></td><td class="feature-name">'+layer.feature.properties.NAME+'</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
	    }
	}
});
$.getJSON("data/attendees2007.json", function (data) {
	  attendees2007.addData(data);
});

//Define the map bounds constraint
var southWest = L.latLng(27.045, -172.353),
	northEast = L.latLng(71.675, -58.447),
	bounds = L.latLngBounds(southWest, northEast);

	
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

//zoom the map to that bounding box
map.fitBounds(bounds);

//Legend control: Basemap Layers
var baseLayers = {
	"Streets": EsriNatGeoWorldMap,
	"Gray": gray
};

//Legend control: Overlay Layers
var groupedOverlays = {
	"Attendees": {
		"All years": allAttendees,
		"2014, Rochester": attendees2014,
		"2013, Rochester": attendees2013,
		"2011, Saint Cloud": attendees2011,
		"2010, Duluth": attendees2010,
		"2009, Duluth": attendees2009,
		"2008, Rochester": attendees2008,
		"2007, Rochester": attendees2007
	}
};

/* Larger screens get expanded layer control and visible sidebar */
if (document.body.clientWidth <= 767) {
  var isCollapsed = true;
} else {
  var isCollapsed = false;
}

// Make the "Attendees" group exclusive (radio inputs)
var options = {
		exclusiveGroups: ["Attendees"],
		collapsed: isCollapsed 
};

//Add the layer control to the map
var layerControl = L.control.groupedLayers(baseLayers, groupedOverlays, options, {
	  collapsed: isCollapsed
	}).addTo(map);