var map;
var mapCenter = {lat: 59.93913, lng: 30.31994};

function initMap() {
  map = new google.maps.Map(document.getElementsByClassName('map-canvas')[0], {
    center: mapCenter,
    zoom: 17
  });





var image = "img/map-marker.png";
  var beachMarker = new google.maps.Marker({
    position: {lat: 59.93861, lng: 30.32378},
    map: map,
    icon: image
  });
    
}
