function initMap() {
  const weirdstore = { lat: 43.6709981, lng: -79.5611872 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: weirdstore,
  });
  const marker1 = new google.maps.Marker({
    position: weirdstore,
    map: map,
  });
}
