//api del mapa
let map;
let coord = {lat: -34.6080556, lng: -58.3702778};
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: coord,
    })
    let marker = new google.maps.Marker({
        position: coord,
        map: map
      });
}

window.initMap = initMap;